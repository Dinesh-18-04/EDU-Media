import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isSubscription: {
    type: Boolean,
    default: false,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  subscribedAt: {
    type: Date,
    default: null, 
  },
});

export default mongoose.model("Subscription", subscriptionSchema);

