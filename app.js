const express = require('express');
const mongoose = require('mongoose');
const profileRoutes = require('./routes/profile');


const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/linkedin_profiles')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/profiles', profileRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
