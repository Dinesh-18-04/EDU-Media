import crypto from "crypto";
import subscriptionModel from "../models/subscription.model.js";
import dotenv from "dotenv";
dotenv.config();

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      email,
    } = req.body;

    // Create the expected signature using HMAC SHA256
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    // ✅ Signature verified: update subscription
    await subscriptionModel.findOneAndUpdate(
      { email },
      {
        isFree: true,
        isSubscription: true,
        subscribedAt: new Date(),
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Payment verified. Subscription activated." });
  } catch (error) {
    console.error("❌ Payment verification failed:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
};
