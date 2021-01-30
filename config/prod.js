// prod.js - production keys
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoUri: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  mailgunPrivateApiKey: process.env.MAILGUN_PRIVATE_API_KEY,
  mailgunPublicValidationKey: process.env.MAILGUN_PUBLIC_VALIDATION_KEY,
  mailgunHttpWebhookSigningKey: process.env.MAILGUN_HTTP_WEBHOOK_SIGNING_KEY,
};
