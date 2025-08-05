import { instance as razorpay } from "../middleware/razorpay.middleware.js";
import subscriptionModel from "../models/subscription.model.js";
import dotenv from "dotenv";

dotenv.config();

export const createOrder = async (req, res) => {
  const { email } = req.body;
  try {

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const options = {
      amount: 700000, // ₹7000 in paise
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Debug log Razorpay order
    console.log("Created Razorpay Order:");

    const sub = await subscriptionModel.findOneAndUpdate(
      { email },
      {
        email,
        isSubscription: false,
        isFree: false,
        subscribedAt: null,
      },
      { upsert: true, new: true }
    );


    res.json({
      key: process.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      orderId: order.id,
      email,
    });
  } catch (error) {

    console.error("Error in createOrder:", error);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
};
