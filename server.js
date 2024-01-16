const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express()
const port = 5000
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://kevin:mbonimpaye1@crud.s9jq02z.mongodb.net/bytehub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// User Model
const User = mongoose.model('User', {
    names: String,
    email: String,
    password: String,
})

// Register Route
app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

