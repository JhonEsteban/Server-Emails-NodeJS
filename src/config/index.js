require('dotenv').config();

const CONFIG = {
  hostEmail: process.env.HOST_EMAIL,
  authUser: process.env.AUTH_USER,
  authPassword: process.env.AUTH_PASSWORD,
  emailDestination: process.env.EMAIL_DESTINATION,
};

module.exports = CONFIG;
