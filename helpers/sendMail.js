/* eslint-disable */
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (email, mailBody) =>
  new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    // write a function to send the mail

    const mailOptions = {
      from: "CARISCA BUSINESS FORUM <info@carisca.knust.edu.gh>",
      to: email,
      subject: "Secure Your Spot for CARISCA Business Forum 2025",
      html: mailBody,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject(error);
        console.log(error);
      }
      resolve("ok");
    });
  })
    .then((res) => console.log("Email sent"))
    .catch((err) => console.log("An error occured"));

module.exports = sendMail;
