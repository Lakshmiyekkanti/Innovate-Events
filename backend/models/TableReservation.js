const mongoose = require('mongoose');

const tableReservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    guests: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

module.exports = mongoose.model('TableReservation', tableReservationSchema);
