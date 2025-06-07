const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const Connectdb= require("./db/connect");

const email = require("./email-subscription/Models/Email");
const enquiry = require("./email-subscription/models/Enquiry");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const start =async()=>{
try{
 await Connectdb();
}
 catch(err) {
  console.log(err.message);
 }}
 start();

// POST route to save email
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required." });

  try {
    const existing = await email.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already subscribed." });

    const newEmail = new email({ email });
    await newEmail.save();

    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

app.post("/enquiry", async (req, res) => {
  try {
    const { firstName, email, message } = req.body;
    if (!firstName || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newEnquiry = new enquiry({ firstName, email, message });
    await newEnquiry.save();

    res.status(200).json({ message: "Enquiry submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
