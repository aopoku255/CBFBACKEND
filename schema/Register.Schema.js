const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema(
  {
    prefix: {
      type: String,
      require: false,
    },
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    organization: {
      type: String,
      require: true,
    },
    continent: {
      type: String,
      require: true,
    },
    mobile_number: {
      type: String,
      require: false,
    },
    country: {
      type: String,
      require: true,
    },
    sector: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    mailing_list: {
      type: Boolean,
      require: false,
      default: false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", RegisterSchema);
