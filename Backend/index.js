import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./route/route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("uploads"));

await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongo db connected");
}).catch((err)=>{
    console.log("not connected");
})

app.use("/api",router);



app.listen(5000,()=> console.log("server started on 5000"));
