import express from "express";
import { Webhook } from "svix";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

app.post(
  "/api/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    try {
      const SIGNING_SECRET = process.env.SIGNING_SECRET;
      if (!SIGNING_SECRET) {
        throw new Error("Missing SIGNING_SECRET");
      }

      const wh = new Webhook(SIGNING_SECRET);
      const headers = req.headers;
      const payload = req.body;

      // Extract Svix headers
      const svix_id = headers["svix-id"];
      const svix_timestamp = headers["svix-timestamp"];
      const svix_signature = headers["svix-signature"];

      if (!svix_id || !svix_timestamp || !svix_signature) {
        return res.status(400).json({ success: false, message: "Missing Svix headers" });
      }

      // Verify the webhook signature
      const evt = wh.verify(payload, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });

      console.log("✅ Webhook verified:", evt);
      res.status(200).json({ success: true, message: "Webhook received" });
    } catch (error) {
      console.error("❌ Error processing webhook:", error.message);
      res.status(400).json({ success: false, message: error.message });
    }
  }
);

app.listen(8000, () => console.log("Server running on port 8000"));
