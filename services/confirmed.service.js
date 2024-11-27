const confirmAttendanceMailBody = require("../helpers/confirmAttendanceMailBody");
const sendMail = require("../helpers/sendMail");
const ConfirmedSchema = require("../schema/Confirmed.Schema");
const RegisterSchema = require("../schema/Register.Schema");

async function confirmAttendees(req) {
  const { email } = req.body;
  try {
    const emailExist = await RegisterSchema.findOne({ email });
    const alreadyConfirmed = await ConfirmedSchema.findOne({ email });
    if (!emailExist) {
      return {
        status: "error",
        data: "Please register before you can confirm attendance",
      };
    }
    if (alreadyConfirmed) {
      return {
        status: "error",
        data: "You have already confirmed that you are attending",
      };
    }
    const response = new ConfirmedSchema({ email });
    if (response) {
      const results = await response.save();
      const mail = confirmAttendanceMailBody(emailExist?.first_name);
      await sendMail(email, mail);
      return { status: "success", data: emailExist?.first_name };
    }
  } catch (error) {
    return { status: "error", data: "An error occured" };
  }
}

module.exports = { confirmAttendees };
