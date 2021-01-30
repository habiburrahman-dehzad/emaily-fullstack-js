const mongoose = require('mongoose');
const Path = require('path-parser');
const URL = require('url');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const sendEmail = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const bodyParser = require('body-parser');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    try {
      const surveys = await Survey.find({ _user: req.user.id }).select({
        recipients: false,
      });

      return res.send(surveys);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
    }
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    try {
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map((email) => ({ email })),
        _user: req.user.id,
        dateSent: Date.now(),
      });

      await sendEmail(survey, surveyTemplate(survey));
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
    }
  });

  app.post(
    '/api/survey/webhooks',
    bodyParser.urlencoded({ extended: true }),
    (req, res) => {
      const p = new Path('/api/survey/:surveyId/:choice');
      const { recipient: email, url, event } = req.body;
      const pathname = new URL(url).pathname;
      const match = p.test(pathname);
      if (match && event === 'clicked') {
        Survey.updateOne(
          {
            _id: match.surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [match.choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date(),
          }
        ).exec();
      }

      res.send({});
    }
  );
};
