// This module uses nodemailer to generate email notifications
// on successful submission in app.js
// See https://nodemailer.com/about/ for more details

const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {
  notifyUser: (recipient) => {
    // Send via Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // Email service credentials
      auth: {
        user: `${process.env.MAIL_SERVICE_USER}`,
        pass: `${process.env.MAIL_SERVICE_PW}`,
      },
    });
    const mailOptions = {
      from: 'vip.notifications1@gmail.com',
      // recipient email address passed for app.js user submission
      to: recipient,
      subject: 'VIP Support',
      // Email template to be sent
      html: { path: './template.html' },
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  },
};
