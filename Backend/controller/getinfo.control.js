import subscriptionModel from "../models/subscription.model.js";

export const getInfo = async (req, res) => {
  try {
    const email = req.user.email;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const info = await subscriptionModel.findOne({ email });

    if (!info) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ isSubscription: info.isSubscription });
  } catch (error) {
    console.error("Error fetching subscription info:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const proCancel = async (req, res) => {
  try {
    const email = req.user.email;
    const res = await subscriptionModel.findOneAndUpdate(
      { email: email },
      { isFree: false, isSubscription: false },
      { new: true }
    );
    res.status(200).json({ isSubscription: info.isSubscription });
  } catch (error) {
    console.log(error);
  }
};

export const free = async (req,res) =>{
  try {
    const email = req.user.email;
    const info = await subscriptionModel.findOneAndUpdate(
      {email:email},
      {isFree:true},
      {new:true}
    );
    res.status(200).json({isfree: info.isFree});
  } catch (error) {
    console.log(error)
  }
}

export const freecancel = async (req,res) => {
  try {
    const email = req.user.email;
    const info = await subscriptionModel.findOneAndUpdate(
      {email:email},
      {isfree:false},
      {new:true}
    );
    res.status(200).json({isFree:info.isFree});
  } catch (error) {
    console.log(error);
  }
}
