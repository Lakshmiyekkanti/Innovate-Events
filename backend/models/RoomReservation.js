const mongoose = require('mongoose');

const roomReservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    guests: { type: Number, required: true },
    roomType: { type: String, required: true },
    rooms: { type: Number, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
});

module.exports = mongoose.model('RoomReservation', roomReservationSchema);
