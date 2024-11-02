// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const User = require('./models/User');
const RoomReservation = require('./models/RoomReservation');
const TableReservation = require('./models/TableReservation');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Registration endpoint
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            res.json(isMatch ? "exist" : "notexist");
        } else {
            res.json("notexist");
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json("fail");
    }
});

// Room Reservation endpoint
app.post('/reserve-room', async (req, res) => {
    try {
        const newRoomReservation = new RoomReservation(req.body);
        await newRoomReservation.save();
        res.status(201).json({ message: "Room reservation successful" });
    } catch (error) {
        console.error("Room reservation error:", error);
        res.status(500).json({ message: "Room reservation failed" });
    }
});

// Table Reservation endpoint
app.post('/reserve-table', async (req, res) => {
    try {
        const newTableReservation = new TableReservation(req.body);
        await newTableReservation.save();
        res.status(201).json({ message: "Table reservation successful" });
    } catch (error) {
        console.error("Table reservation error:", error);
        res.status(500).json({ message: "Table reservation failed" });
    }
});

// Endpoint to get the total count of users
app.get('/api/users/count', async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.json({ count: userCount });
    } catch (error) {
        console.error("Error fetching user count:", error);
        res.status(500).json({ message: "Failed to retrieve user count" });
    }
});

// Endpoint to get the total count of room reservations
app.get('/api/room-reservations/count', async (req, res) => {
    try {
        const roomCount = await RoomReservation.countDocuments();
        res.json({ count: roomCount });
    } catch (error) {
        console.error("Error fetching room reservation count:", error);
        res.status(500).json({ message: "Failed to retrieve room reservation count" });
    }
});

// Endpoint to get the total count of table reservations
app.get('/api/table-reservations/count', async (req, res) => {
    try {
        const tableCount = await TableReservation.countDocuments();
        res.json({ count: tableCount });
    } catch (error) {
        console.error("Error fetching table reservation count:", error);
        res.status(500).json({ message: "Failed to retrieve table reservation count" });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
