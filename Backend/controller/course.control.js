import courseModel from "../models/Course.model.js";

export const addcourse = async (req, res) => {
  try {
    const { title, description, week, level, instructor, coursetype } =
      req.body;

    let curriculam = req.body.curriculam;
    if (typeof curriculam === "string") {
      curriculam = JSON.parse(curriculam);
    }

    const imagePaths = (req.files || []).map(
      (file) => `/uploads/${file.filename}`
    );

    const newCourse = new courseModel({
      title,
      description,
      week,
      level,
      instructor,
      images: imagePaths,
      curriculam,
      coursetype: coursetype === "true" || coursetype === true,
    });

    await newCourse.save();
    res.status(201).json({ message: "Course created!" });
  } catch (error) {
    console.error("Error in addcourse:", error.message);
    res.status(500).json({ error: "Invalid data or internal error." });
  }
};

export const getcourse = async (req, res) => {
  try {
    const course = await courseModel.find();
    res.status(200).json(course);
  } catch (error) {
    console.log("not get the courses" + error);
  }
};

export const coursedetails = async (req, res) => {
  try {
    const {id} = req.params;
    console.log(id)
    const course = await courseModel.findById(id);
    res.json(course);
  } catch (error) {
    console.log(error);
  }
};
