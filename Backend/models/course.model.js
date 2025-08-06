import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  week: String,
  level: String,
  instructor: String,
  images: [String],
  curriculam: [
    {
      f: String,
    }
  ],
  coursetype: {
    type: Boolean,
  },
  videos: [
    {
      v: String,
    }
  ],
});

export default mongoose.model("course", courseSchema);