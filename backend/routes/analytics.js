const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Assuming you have a Booking model

router.get('/', async (req, res) => {
    try {
        // Example to get booking counts and revenue
        const bookings = await Booking.aggregate([
            { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 }, total: { $sum: "$price" } } }
        ]);

        res.json({
            bookings: bookings.map(item => ({ date: item._id, count: item.count })),
            revenue: bookings.map(item => ({ date: item._id, amount: item.total })),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
