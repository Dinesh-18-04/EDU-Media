import express from "express";
import multer from "multer";
import { addcourse, getcourse } from "../controller/course.control.js";
import { login, register } from "../controller/auth.control.js";
import { verifyPayment } from "../controller/verifypayment.control.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { createOrder } from "../controller/createorder.control.js";
import { getInfo, proCancel } from "../controller/getinfo.control.js";


const router = express.Router();

// 🗂️ Setup Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save in /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  }
});

const upload = multer({ storage });

router.post("/addcourse", upload.array("images", 3), addcourse);
router.get("/getcourse",getcourse);
router.post("/register",register);
router.post("/login",login);
router.post("/create-order", authenticate, createOrder); // ✅ this is correct
router.post("/verify-payment", authenticate, verifyPayment);
router.get("/getinfo",authenticate, getInfo);
router.post("/procancel",authenticate, proCancel);

export default router;
