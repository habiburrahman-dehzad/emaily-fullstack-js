const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        source: req.body.id,
        description: '$5 for 5 email credits',
      });

      req.user.credits += 5;
      const user = await req.user.save();

      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  });
};
