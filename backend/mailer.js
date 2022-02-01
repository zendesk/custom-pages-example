const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {
  notifyUser: (recipient) => {
    // Send via Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${process.env.MAIL_SERVICE_USER}`,
        pass: `${process.env.MAIL_SERVICE_PW}`,
      },
    });
    const mailOptions = {
      from: 'vip.notifications1@gmail.com',
      to: recipient,
      subject: 'VIP Support',
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
