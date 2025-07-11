import React from "react";
import sara from "../assets/sara.png";
import jason from "../assets/jason.png";
import emily from "../assets/emily.png";
import michael from "../assets/michael.png";

const list = [
  {
    message:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    name: "Sarah L",
    img: sara,
  },
  {
    message:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    name: "Jason M",
    img: jason,
  },
  {
    message:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    name: "Emily R",
    img: emily,
  },
  {
    message:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    name: "Michael K",
    img: michael,
  },
];

const Testimonials = () => {
  return (
    <div className="md:mx-[5.5rem] mx-[1rem]">
      <div className="md:mt-[6.5rem] mt-[2rem]">
        <h1 className="md:text-[3rem] text-[35px] font-semibold">Our Testimonials</h1>
        <div className="md:flex md:items-center md:justify-between">
          <div className="">
            <p className="md:font-semibold mt-1 max-md:text-sm md:w-[80%] text-gray-600 ">
              Hear from our learners around the world. Our students have
              transformed their careers through our engaging, practical, and
              flexible learning experience. Their success stories are a true
              reflection of the impact our courses can create.
            </p>
          </div>
          <div className="w-[20%] flex justify-end">
            <button className="bg-white w-[100px] max-md:mt-4 rounded-md max-md:py-2 md:h-[50px] md:font-semibold font-medium">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5  md:mt-16 mt-5">
        {list.map((element, index) => (
          <div className="bg-white rounded-lg ">
            <div className="">
              <div className="md:p-12 p-5 border-b border-gray-100">
                <p className="text-gray-600 md:text-[18px]">
                  {element.message}
                </p>
              </div>
              <div className="md:px-12 p-5 py-5 flex justify-between items-center">
                <div className=" flex items-center gap-6">
                  <img src={element.img} className="w-14" alt="" />
                  <p className="font-semibold">{element.name}</p>
                </div>
                <div className="">
                  <button className="bg-slate-100 md:px-5 md:py-3 px-3 py-2 font-medium md:font-semibold text-gray-600 rounded-lg">Read Full Story</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
