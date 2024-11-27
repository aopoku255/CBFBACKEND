/* eslint-disable */
const nodemailer = require("nodemailer");
require("dotenv").config();

const forwardMail = (mailBody) =>
  new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    // write a function to send the mail

    const mailOptions = {
      from: "CARISCA <info@carisca.knust.edu.gh>",
      to: "ankomahjnr@carisca.knust.edu.gh",
      subject: "CARISCA BUSINESS FORUM",
      html: mailBody,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject(error);
      }
      resolve("ok");
    });
  });

module.exports = forwardMail;
