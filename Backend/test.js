import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

const instance = new Razorpay({
  key_id: "rzp_test_2YsWoPoDuTcvxj",
  key_secret: "v2WQXeWufdwNI3QW01JjDGxB",
});

instance.orders.create({
  amount: 760000,
  currency: "INR",
  receipt: `receipt_test_${Date.now()}`,
})
.then((order) => {
  console.log("✅ Order Created:");
})
.catch((err) => {
  console.error("❌ Error:", err);
});
