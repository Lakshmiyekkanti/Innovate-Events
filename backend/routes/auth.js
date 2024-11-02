// Import necessary modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { GoogleAuth } = require('google-auth-library'); // Import GoogleAuth
const router = express.Router();
const User = require('./models/User'); // Mongoose model for User

// Google Authentication Setup
const auth = new GoogleAuth({
    keyFile: 'C:/path/to/your/project/innovate-event-84000b238c41.json',
    scopes: 'https://www.googleapis.com/auth/cloud-platform'
});

// Function to get access token
async function getAccessToken() {
    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return token;
}

// Register Route
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ email: req.body.email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' });
        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

// Get Access Token Route (new route)
router.get('/google-auth', async (req, res) => {
    try {
        const token = await getAccessToken();
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error getting access token', error });
    }
});

module.exports = router;
