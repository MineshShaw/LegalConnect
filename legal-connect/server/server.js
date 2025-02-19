import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import supabase from './supabaseClient.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send({'data':'Supabase Backend is Running 🚀'});
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return res.status(400).json({ message: error.message });

    res.json({ 
        message: 'Login successful', 
        user: data.user, 
        token: data.session.access_token 
    });
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return res.status(400).json({ message: error.message });

    res.json({ 
        message: 'User registered successfully', 
        user: data.user 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
