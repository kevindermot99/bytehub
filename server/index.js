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

mongoose.connect('mongodb+srv://kevin:mbonimpaye1@custer2024.rzlybv8.mongodb.net/bytehub')

// User Model
const User = mongoose.model('User', {
    names: String,
    email: String,
    password: String,
})

// Register Route
app.post('/api/register', async (req, res) => {
    try {
        const { names, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ names: names, email: email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login Route
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.status(401).json({ message: "Email doesn't exists" })
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            res.status(401).json({ message: "Incorrect Password !" })
            return;
        }

        const token = jwt.sign({ email }, 'bytehub', { expiresIn: '1h' })
        res.json({ token })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server Error" })
    }
})



// Middleware to check authentication
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Unauthorized: Missing token' });

    jwt.verify(token.split(' ')[1], 'bytehub', (err, decodedToken) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
        req.user = { email: decodedToken.email }
        next();
    });
};


// Protected Route HOME
app.get('/api/auth', authenticateToken, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });

        if (!user) {
            return res.status(404).json({ message: "User not Found" })
        }
        const userInfo = { email: req.user.email, names: user.names };

        res.json({ userInfo })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: "Internal server Error"})
    }
    
    
})

app.listen(port, () => {
    console.log(`Server is runnig on ${port} niggah !`)
});

