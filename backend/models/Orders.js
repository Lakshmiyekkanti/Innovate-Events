const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
    },
    address: {
        type: String,
        required: true, // Address is required
    },
    phone: {
        type: String,
        required: true, // Phone number is required
    },
    selectedFoodItems: {
        type: [String], // Array of selected food item names
        required: true, // Selected food items are required
    },
    totalCost: {
        type: Number,
        required: true, // Total cost is required
    },
    orderType: {
        type: String,
        enum: ['delivery', 'takeaway'], // Possible order types
        required: true, // Order type is required
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the order creation date
    }
});

// Create the Order model from the schema
const Order = mongoose.model('Order', orderSchema);

// Export the Order model
module.exports = Order;
