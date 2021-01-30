const keys = require('../config/keys');

var mailgun = require('mailgun-js')({
  apiKey: keys.mailgunPrivateApiKey,
  domain: 'sandboxde2381cb0f2b4460aa8376d19131dd21.mailgun.org',
});

const sendEmail = async ({ subject, recipients }, content) => {
  const message = {
    from: 'no-reply@sandboxde2381cb0f2b4460aa8376d19131dd21.mailgun.org',
    to: recipients.map(({ email }) => email).join(','),
    subject: subject,
    html: content,
  };

  const result = await mailgun.messages().send(message);

  return result;
};

module.exports = sendEmail;
