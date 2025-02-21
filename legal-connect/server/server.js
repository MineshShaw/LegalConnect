import express from "express";
import { Webhook } from "svix";
import bodyParser from "body-parser";
import { db } from "./firebaseAdmin.js";
import "dotenv/config";

const app = express();

app.post(
  "/api/webhook",
  bodyParser.raw({ type: "application/json" }), // Use raw body parser for Svix
  async (req, res) => {
    try {
      const SIGNING_SECRET = process.env.SIGNING_SECRET;
      if (!SIGNING_SECRET) throw new Error("Missing SIGNING_SECRET");

      const wh = new Webhook(SIGNING_SECRET);
      const headers = req.headers;
      const payload = req.body; // Raw buffer

      const svix_id = headers["svix-id"];
      const svix_timestamp = headers["svix-timestamp"];
      const svix_signature = headers["svix-signature"];

      if (!svix_id || !svix_timestamp || !svix_signature) {
        return res.status(400).json({ success: false, message: "Missing Svix headers" });
      }

      // Verify the webhook signature
      const evt = wh.verify(payload.toString(), {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });

      const eventType = evt.type;
      const userData = evt.data;

      console.log(`Received event: ${eventType}`);

      // Handle different webhook event types
      if (eventType === "user.created") {
        await db.collection("users").doc(userData.id).set({
          id: userData.id,
          email: userData.email_addresses?.[0]?.email_address || "",
          createdAt: userData.created_at,
          updatedAt: userData.updated_at,
        });
        console.log("✅ User created in Firebase");
      } else if (eventType === "user.updated") {
        await db.collection("users").doc(userData.id).update({
          email: userData.email_addresses?.[0]?.email_address || "",
          updatedAt: userData.updated_at,
        });
        console.log("✅ User updated in Firebase");
      } else if (eventType === "user.deleted") {
        await db.collection("users").doc(userData.id).delete();
        console.log("✅ User deleted from Firebase");
      }

      res.status(200).json({ success: true, message: "Webhook processed" });
    } catch (error) {
      console.error("❌ Error processing webhook:", error.message);
      res.status(400).json({ success: false, message: error.message });
    }
  }
);

// Fix: Correct the port number
app.listen(8000, () => console.log("Server running on port 8000"));