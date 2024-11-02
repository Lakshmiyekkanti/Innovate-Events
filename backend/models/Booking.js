const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  eventName: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  hallId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hall' }, 
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
