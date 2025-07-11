import React, { useState } from "react";
import axios from "axios";
import arrow from "../assets/Abstract Line.png";
import flash from "../assets/Icon Container.png";

const Addcourse = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [week, setWeek] = useState("");
  const [level, setLevel] = useState("");
  const [inst, setInst] = useState("");
  const [images, setImages] = useState([]);
  const [coursetype, setCoursetype] = useState("Free");
  const [curriculam, setCurriculam] = useState([{f: "" }]);

  const handleCurriculamChange = (index, field, value) => {
    const updated = [...curriculam];
    updated[index][field] = value;
    setCurriculam(updated);
  };

  const addCurriculamField = () => {
    if (curriculam.length >= 5) {
      alert("Maximum 5 curriculum topics allowed.");
      return;
    }
    setCurriculam([...curriculam, {f: "" }]);
  };

  const removeCurriculamField = (index) => {
    const updated = [...curriculam];
    updated.splice(index, 1);
    setCurriculam(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", des);
    formData.append("week", week);
    formData.append("level", level);
    formData.append("instructor", inst);
    formData.append("curriculam", JSON.stringify(curriculam));
    formData.append("coursetype", coursetype === "Paid");

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await axios.post("http://localhost:5000/api/addcourse", formData);
      alert("Course added successfully!");
      setTitle("");
      setDes("");
      setWeek("");
      setLevel("");
      setInst("");
      setImages([]);
      setCoursetype("Free");
      setCurriculam([{ f: "" }]);
    } catch (error) {
      console.error("Error uploading course:", error);
      alert("Failed to add course.");
    }
  };

  return (
    <div className="p-5 md:px-[7rem] pt-16 bg-gray-50 min-h-screen">
      {/* Decorative Header */}
      <div className="relative flex justify-center items-center bg-white p-2 pr-6 rounded-md md:mx-[15rem] mx-5 mb-12 shadow">
        <div className="absolute max-md:w-[20px] md:-top-8 md:-left-6 -top-4 -left-3">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="flex items-center gap-3 justify-center">
          <img src={flash} alt="icon" className="md:w-[50px] w-[30px]" />
          <h1 className="font-bold md:text-[2.4rem] text-xl text-gray-800">
            <span className="text-[#ff9500]">Add</span> a New Course
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="p-3 border rounded-lg bg-white shadow-sm"
          />
          <textarea
            placeholder="Description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            required
            className="p-3 border rounded-lg bg-white shadow-sm"
            rows="4"
          />
          <input
            type="number"
            placeholder="Weeks"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            required
            className="p-3 border rounded-lg bg-white shadow-sm"
          />
          <input
            type="text"
            placeholder="Level (e.g., Beginner)"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="p-3 border rounded-lg bg-white shadow-sm"
          />
          <input
            type="text"
            placeholder="Instructor Name"
            value={inst}
            onChange={(e) => setInst(e.target.value)}
            required
            className="p-3 border rounded-lg bg-white shadow-sm"
          />
          <select
            value={coursetype}
            onChange={(e) => setCoursetype(e.target.value)}
            className="p-3 border rounded-lg bg-white shadow-sm"
          >
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5">
          <div className="p-4 border bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">
              Curriculum{" "}
              <span className="ml-1 font-normal text-sm">(5 Topics)</span>
            </h3>
            {curriculam.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Topic"
                  value={item.f}
                  onChange={(e) =>
                    handleCurriculamChange(index, "f", e.target.value)
                  }
                  className="p-2 border rounded flex-1"
                />
                {curriculam.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCurriculamField(index)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addCurriculamField}
              disabled={curriculam.length >= 5}
              className="text-blue-600 text-sm font-medium mt-2"
            >
              + Add Topic
            </button>
          </div>

          <div className="p-4 border bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">
              Images{" "}
              <span className="ml-1 font-normal text-sm">(3 images)</span>
            </h3>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImages([...e.target.files])}
              required
              className=""
            />
          </div>

          <button
            type="submit"
            className="bg-[#ff9500] hover:bg-orange-600 text-white font-semibold py-3 px-5 rounded-lg shadow"
          >
            Submit Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addcourse;
