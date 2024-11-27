const forwardMail = require("../helpers/forwardMail");
const forwardMailBody = require("../helpers/forwardMailBody");
const mailBody = require("../helpers/mailBody");
const sendMail = require("../helpers/sendMail");
const RegisterSchema = require("../schema/Register.Schema");
const registeredusers = require("../cariscaforum.registers.json");
const registeredusersname = require("../firstname.registers.json");

async function postRegister(req) {
  //   console.log(req.body);

  const { email } = req.body;

  const checkIfSponsorExist = await RegisterSchema.findOne({ email });

  if (checkIfSponsorExist)
    return { status: "error", data: "User already registered" };

  const newUser = new RegisterSchema({ ...req.body });
  try {
    const results = await newUser.save();
    if (results) {
      const mail = mailBody(req.body.first_name);
      sendMail(req.body.email, mail);

      return { status: "success", data: "Registration successful" };
    }
  } catch (error) {
    return { status: "error", data: error };
  }
}

module.exports = { postRegister };
