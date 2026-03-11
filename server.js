const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simulated Database (In-memory for this test)
const db = {};

// Save newly encrypted user data
app.post('/register', (req, res) => {
    const { userId, payload } = req.body;
    if (db[userId]) return res.status(400).json({ error: "User ID already exists." });
    
    db[userId] = payload;
    res.json({ message: "Encrypted profile saved to server." });
});

// Retrieve encrypted vault for local decryption
app.post('/login', (req, res) => {
    const { userId } = req.body;
    if (!db[userId]) return res.status(404).json({ error: "User ID not found." });
    
    res.json({ payload: db[userId] });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Secure server running on port ${port}`));
