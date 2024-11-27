const mongoose = require("mongoose");
const ConfirmedSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("ConfirmedAttendees", ConfirmedSchema);
