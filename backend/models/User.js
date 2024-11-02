const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    savedPaymentMethods: [{
        type: String, // e.g., "Visa", "PayPal"
        last4: String,
        expMonth: Number,
        expYear: Number,
    }],
});

module.exports = mongoose.model('User', userSchema);
