const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    job_title: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    company_name: {
      type: String,
      require: true,
    },
    industry: {
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
    enquiry: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sponsors", SponsorSchema);
