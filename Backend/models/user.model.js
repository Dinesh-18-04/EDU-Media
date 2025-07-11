import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  subscription: { type: String, default: "Free" },
});

export default mongoose.model("User", userSchema);
