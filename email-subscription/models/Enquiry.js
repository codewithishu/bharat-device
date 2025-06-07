// models/Enquiry.js
const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Enquiry", enquirySchema);
