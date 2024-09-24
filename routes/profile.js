const express = require('express');
const Profile = require('../models/profile');
const router = express.Router();

//Post api to save data in database
router.post('/', async (req, res) => {
    try {
        console.log("Received data:", req.body);
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        console.error("Error saving profile:", error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
