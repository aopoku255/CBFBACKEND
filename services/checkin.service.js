const CheckInSchema = require("../schema/CheckIn.Schema");
const RegisterSchema = require("../schema/Register.Schema");

async function checkIn(req, res) {
  try {
    const { email } = req.body;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if there's already a check-in for the user today
    const user = await RegisterSchema.findOne({ email });
    if (user) {
      const existingCheckIn = await CheckInSchema.findOne({
        email,
        date: { $gte: today },
      });

      if (existingCheckIn) {
        return {
          status: "error",
          data: "Participant has already checked in today",
        };
      }

      const newCheckIn = await CheckInSchema.create({
        email: user?.email,
        prefix: user?.prefix,
        first_name: user?.first_name,
        last_name: user?.last_name,
        organization: user?.organization,
        continent: user?.continent,
        mobile_number: user?.mobile_number,
        country: user?.country,
        sector: user?.sector,
        roler: user?.role,
        gender: user?.gender,
        date: today,
      });
      await newCheckIn.save();
      return {
        status: "success",
        data: "Checkin successful",
        prefix: user?.prefix,
        first_name: user?.first_name,
        last_name: user?.last_name,
        organization: user?.organization,
      };
    } else {
      return { status: "error", data: "Participant not registered" };
    }
  } catch (error) {
    return {
      status: "error",
      data: "An error occured",
    };
  }
}

module.exports = { checkIn };
