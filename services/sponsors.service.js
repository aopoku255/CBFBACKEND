const forwardMail = require("../helpers/forwardMail");
const forwardMailBody = require("../helpers/forwardMailBody");
const mailBody = require("../helpers/mailBody");
const sendMail = require("../helpers/sendMail");
const SponsorsSchema = require("../schema/Sponsors.Schema");

async function postSponsors(req) {
  const {
    first_name,
    last_name,
    email,
    mobile_number,
    company_name,
    job_title,
    industry,
    country,
    enquiry,
    comment,
  } = req.body;
  const checkIfSponsorExist = await SponsorsSchema.findOne({ email });

  if (checkIfSponsorExist)
    return { status: "error", data: "User already registered" };

  const newUser = new SponsorsSchema({ ...req.body });
  try {
    const results = await newUser.save();
    if (results) {
      // const mail = mailBody(first_name);
      // await sendMail(email, mail);

      const forwardEmailBody = forwardMailBody(
        first_name,
        last_name,
        email,
        mobile_number,
        company_name,
        job_title,
        industry,
        country,
        enquiry,
        comment
      );

      await forwardMail(forwardEmailBody);

      return { status: "success", data: "Sponsor Registered successfully" };
    }
  } catch (error) {
    return { status: "error", data: error };
  }
}

module.exports = { postSponsors };
