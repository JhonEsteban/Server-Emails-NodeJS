const { Router } = require('express');

const nodemailer = require('nodemailer');

const CONFIG = require('../config');

const router = Router();

router.post('/send-email', (req, res) => {
  const { name, email, description } = req.body;

  let transporter = nodemailer.createTransport({
    host: CONFIG.hostEmail,
    port: 587,
    service: 'Gmail',
    secure: true,
    auth: {
      user: CONFIG.authUser,
      pass: CONFIG.authPassword,
    },
  });

  let mailOptions = {
    from: email,
    to: CONFIG.emailDestination,
    subject: `Tienes un email de ${name} `,
    html: `
      <h2> ${name} - ${email}</h2>
      <p>${description}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    } else {
      res.status(200).send({
        success: true,
        message: 'Se envió con éxito',
      });
    }
  });
});

module.exports = router;
