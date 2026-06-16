const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  eventType: String,
  eventDate: String,
  guests: String,
  venue: String,
  budget: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);