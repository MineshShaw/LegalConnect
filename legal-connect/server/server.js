import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import supabase from './supabaseClient.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Supabase Backend is Running 🚀');
});

app.get('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.post('/users', async (req, res) => {
    const { full_name, email, role } = req.body;
    const { data, error } = await supabase.from('users').insert([{ full_name, email, role }]);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
