const express = require('express');
const cors = require('cors');

const InitialRoute = require('./routes/initial-route');
const SendEmails = require('./routes/send-emails');

const app = express();

// Configurations
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use(InitialRoute);
app.use(SendEmails);

module.exports = app;
