import express from 'express';
import bodyParser from 'body-parser';
import { Webhook } from 'svix';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.raw({ type: 'application/json' }));

app.post('/api/webhooks', async (req, res) => {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    console.error('Error: SIGNING_SECRET is not defined in .env');
    return res.status(500).json({ success: false, message: 'Server misconfiguration' });
  }

  const wh = new Webhook(SIGNING_SECRET);
  const headers = req.headers;
  const payload = req.body;

  const svix_id = headers['svix-id'];
  const svix_timestamp = headers['svix-timestamp'];
  const svix_signature = headers['svix-signature'];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ success: false, message: 'Missing Svix headers' });
  }

  let evt;

  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Webhook verification failed:', err.message);
    return res.status(400).json({ success: false, message: 'Invalid webhook signature' });
  }

  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type ${eventType}`);
  console.log('Webhook payload:', evt.data);

  return res.status(200).json({ success: true, message: 'Webhook received' });
});

export default app;
