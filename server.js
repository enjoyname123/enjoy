const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// Your MongoDB Atlas Connection String
const mongoURI = "mongodb+srv://gagan_db_user:evWAaVqZBg7G4TD1@feed.voetdoc.mongodb.net/secureTerminal?retryWrites=true&w=majority&appName=Feed";

mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB Atlas: feed.voetdoc"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Database Schema
const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    payload: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Handle Registration & Profile Updates
app.post('/register', async (req, res) => {
    const { userId, payload } = req.body;
    try {
        // This will create a new user or update an existing one automatically
        await User.findOneAndUpdate({ userId }, { payload }, { upsert: true });
        console.log(`User data persisted for: ${userId}`);
        res.json({ message: "Success" });
    } catch (err) {
        console.error("Save Error:", err);
        res.status(500).json({ error: "Database error during save." });
    }
});

// Handle Login & Data Retrieval
app.post('/login', async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findOne({ userId });
        if (!user) return res.status(404).json({ error: "User ID not found." });
        res.json({ payload: user.payload });
    } catch (err) {
        console.error("Fetch Error:", err);
        res.status(500).json({ error: "Database error during fetch." });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Secure server live on port ${port}`));
