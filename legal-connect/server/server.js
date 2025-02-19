import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware, requireAuth, getAuth } from '@clerk/express'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

const PORT = process.env.PORT || 8000;

app.get('/protected', requireAuth(), async (req, res) => {

    const { userId } = getAuth(req)
  
    const user = await clerkClient.users.getUser(userId)
  
    return res.json({ user })
  })

