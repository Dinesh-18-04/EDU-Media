import React from "react";
import { Link } from "react-router-dom";
import webd from "../assets/web.png";
import ui from "../assets/ui.png";
import mob from "../assets/mob.png";
import gra from "../assets/gra.png";
import front from "../assets/front.png";
import adv from "../assets/adv.png";

const list = [
  {
    imgg: webd,
    week: "4",
    level: "Beginner",
    name: "John Smith",
    Title: "Web Design Fundamentals",
    desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    imgg: ui,
    week: "6",
    level: "Intermediate",
    name: "Emily Johnson",
    Title: "UI/UX Design",
    desc: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  },
  {
    imgg: mob,
    week: "8",
    level: "Intermediate",
    name: "David Brown",
    Title: "Mobile App Development",
    desc: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
  },
  {
    imgg: gra,
    week: "10",
    level: "Beginner",
    name: "Sarah Thompson",
    Title: "Graphic Design for Beginners",
    desc: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
  },
  {
    imgg: front,
    week: "10",
    level: "Intermediate",
    name: "Michael Adams",
    Title: "Front-End Web Development",
    desc: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
  },
  {
    imgg: adv,
    week: "6",
    level: "Advance",
    name: "Jennifer Wilson",
    Title: "Advanced JavaScript",
    desc: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
  },
];

const Courses = () => {
  return (
    <div className="md:mx-[5.5rem] mx-[1rem]">
      <div className=" md:mt-[6.5rem] mt-[2rem] mb-12">
        <h1 className="md:text-[3rem] text-[35px] font-semibold">Our Courses</h1>
        <div className="md:flex md:items-center md:justify-between">
          <div className="">
            <p className="md:font-semibold max-md:text-sm mt-1 md:w-[80%] text-gray-600 ">
              Explore a wide range of expertly crafted courses designed to help
              you master in-demand skills. From beginner to advanced levels,
              each course is structured to provide hands-on experience,
              real-world applications, and guidance from industry professionals.
              Learn anytime, anywhere — at your own pace.
            </p>
          </div>
          <div className="w-[20%] flex justify-end">
            <button className="bg-white w-[100px] max-md:mt-4 rounded-md max-md:py-2 md:h-[50px] md:font-semibold font-medium">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-3">
        {list.map((element, index) => (
          <div className="bg-white shadow-md rounded-md md:p-11 md:w-[690px] md:h-[670px]">
            <div className="md:w-[605px]">
              <img src={element.imgg} className="object-cover" alt="Web Design" />
            </div>
            <div className="max-md:mx-2 md:flex md:items-center md:justify-between mt-6">
              <div className="flex md:items-center md:justify-center gap-4 ">
                <div className="border border-solid border-gray-300 px-4 py-1.5 rounded-md text-gray-600 font-semibold">
                  {element.week} Weeks
                </div>
                <div className="border border-solid border-gray-300 px-4 rounded-md py-1.5 text-gray-600 font-semibold">
                  {element.level}
                </div>
              </div>
              <div className="font-semibold max-md:mt-3 text-[18px] text-gray-700">
                By {element.name}
              </div>
            </div>
            <div className="md:mt-6 mt-2 max-md:mx-2">
                <h1 className="font-bold text-[23.5px] text-gray-800">{element.Title}</h1>
                <p className=" mt-2 text-gray-600 md:text-[17px]">{element.desc}</p>
            </div>
            <div className="border-none mt-5 flex justify-end max-md:mx-5 max-md:my-2 max-md:mt-5">
                <Link to="/course"><button className="bg-slate-100 font-semibold w-full rounded-md p-4">Get it Now</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
