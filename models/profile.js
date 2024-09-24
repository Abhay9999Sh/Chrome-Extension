const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    about: { type: String },
    bio: { type: String },
    location: { type: String },
    follower_count: { type: Number },
    connection_count: { type: Number }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
