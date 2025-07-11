import React from "react";
import axios from "axios";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";

import co1 from "../assets/co1.png";
import co2 from "../assets/co2.png";
import co3 from "../assets/co3.png";

// const list = [
//   {
//     title: "Web Design Fundamentals",
//     des: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
//     img1: co1,
//     img2: co2,
//     img3: co3,
//     week: "4",
//     level: "Beginner",
//     name: "John Smith",
//     curriculam: [
//       {
//         t: "01",
//         f: "Introduction to HTML",
//       },
//       {
//         t: "02",

//         f: "Styling with CSS",
//       },
//       {
//         t: "03",

//         f: "Introduction to Responsive Design",
//       },
//       {
//         t: "04",

//         f: "Design Principles for Web",
//       },
//       {
//         t: "05",

//         f: "Building a Basic Website",
//       },
//     ],
//   },
// ];

const Course = () => {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getcourse")
      .then((res) => setlist(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Announcement />
      <div className="md:grid md:grid-cols-2 justify-between items-start md:px-[90px] pt-5 md:pt-[5.5rem] md:pb-12 px-5 pb-5 border-y border-gray-200">
        <div className="">
          <h1 className="md:font-bold max-md:mb-3 font-semibold md:text-[43px] text-[24px]">
            Online Courses on Design and Development
          </h1>
        </div>
        <div className="md:ml-12">
          <p className="md:text-[17px] text-sm leading-relaxed">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>
      </div>

      <div className="">
        {list.map((Element, index) => (
          <div
            key={index}
            className="bg-white rounded-lg mx-5 md:mx-[5.5rem] p-5 md:p-[43px] md:mt-[5.5rem] mt-12"
          >
            <div className="flex flex-col gap-2">
              <h1 className="md:text-2xl text-xl font-semibold">
                {Element.title}
              </h1>
              <div className="md:flex items-center justify-between gap-10">
                <div className="">
                  <p className="md:text-[17px] text-sm md:font-medium text-gray-600 tracking-wider">
                    {Element.description}
                  </p>
                </div>
                <button className="bg-[#fcfcfd] border max-md:text-sm border-gray-200 md:w-[165px] w-[110px] max-md:mt-4 md:h-[50px] h-[35px] font-semibold rounded-lg">
                  View Course
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 md:gap-5 gap-2 md:mt-7 mt-3">
              {Element.images.slice(0, 3).map((img, idx) => (
                <div className="">
                  <img
                    key={idx}
                    src={`http://localhost:5000${img}`} // prepend server base URL
                    alt={`Course Img ${idx + 1}`}
                    className="rounded-md w-[430px] h-[360px] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="md:flex md:items-center md:justify-between mt-6">
              <div className="flex md:items-center md:justify-center gap-4 ">
                <div className="border border-solid border-gray-300 md:px-4 md:py-1.5 px-2 py-1 rounded-md text-gray-600 font-medium md:font-semibold">
                  {Element.week} Weeks
                </div>
                <div className="border border-solid border-gray-300 md:px-4 px-2 py-1 rounded-md md:py-1.5 text-gray-600 font-medium md:font-semibold">
                  {Element.level}
                </div>
                <div className="border border-solid border-gray-300 md:px-4 px-2 py-1 rounded-md md:py-1.5 text-gray-600 font-medium md:font-semibold">
                  {Element.coursetype == true ? "Paid":"free"}
                </div>
              </div>
              <div className="font-semibold max-md:mt-3 text-[18px] text-gray-700">
                By {Element.instructor}
              </div>
            </div>

            <div className="md:mt-[3rem] mt-5 rounded-lg border border-gray-200">
              <div className="md:p-5 md:pl-7 p-3 pl-4 border-b border-gray-200">
                <h1 className="font-semibold text-xl tracking-wide">
                  Curriculam
                </h1>
              </div>
              <div className="md:p-5 md:pl-11 p-3 pl-6 md:grid md:grid-cols-5 gap-20">
                {Element.curriculam.map((item, index) => (
                  <div
                    key={index}
                    className="md:border-r max-md:border-b max-md:mb-5 max-md:pb-5 border-gray-200 pr-5"
                  >
                    <h1 className="font-bold text-3xl md:text-5xl">
                      {String(index + 1).padStart(2, "0")}
                    </h1>
                    <p className="md:text-[20px] mt-2">{item.f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Course;
