import React from "react";
import vid from "../assets/vid.mp4";
import bene from "../assets/beneButton.png";

const list = [
  {
    no:"01",
    head: "Flexible Learning Schedule",
    content:
      "Fit you coursework around your existing commitments and obligatons.",
  },
  {
    no:"02",
    head: "Expert Instruction",
    content:
      "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    no:"03",
    head: "Diverse Course Offerings",
    content:
      "Explore a wide range of design and development courses covering various topics.",
  },
  {
    no:"04",
    head: "Updated Curriculum",
    content:
      "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    no:"05",
    head: "Practical Projects and Assignments",
    content:
      "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    no:"06",
    head: "Interactive Learning Environment",
    content:
      "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

const Benefits = () => {
  return (
    <div className="md:mx-[5.5rem] mx-[1rem]">
      <div className="md:mt-[5.5rem] mt-[2rem]">
        <video
          src={vid}
          autoPlay
          muted
          className="mx-auto md:w-[1400px] md:h-[720px] object-cover rounded-md"
        />
      </div>

      <div className="md:mt-[6rem] mt-[1rem]">
        <h1 className="md:text-[3rem] text-[35px] font-semibold">Benefits</h1>
        <div className="md:flex md:items-center md:justify-between">
          <div className="">
            <p className="md:font-semibold mt-1 max-md:text-sm md:w-[80%] text-gray-600 ">
              Upgrade your skills with expert-designed courses. Learn from
              industry leaders, build real-world projects, and gain the
              confidence to excel in your career. Our flexible, self-paced
              learning approach ensures you stay in control while accessing
              high-quality content anytime, anywhere.
            </p>
          </div>
          <div className="w-[20%] flex justify-end">
            <button className="bg-white w-[100px] max-md:mt-4 rounded-md max-md:py-2 md:h-[50px] md:font-semibold font-medium">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-4 md:mt-[3rem] mt-[1rem]">
        {list.map((element, index) => (
          <div>
            <div className="relative bg-white rounded-md md:h-[410px] md:pl-11 md:px-10 md:py-5 px-4 py-2">
              <h1 className="md:text-[4rem] text-[3rem] mr-2 font-bold justify-end flex">{element.no}</h1>
              <div className="md:mt-4 md:gap-3 gap-2 flex flex-col">
                <h2 className="font-semibold md:text-[1.5rem] text-[25px]">{element.head}</h2>
                <p className="text-gray-600 md:text-[1.2rem]">
                  {element.content}
                </p>
              </div>
              <div className="absolute right-3 bottom-3 flex justify-end md:mt-16 mt-2 mr-1">
                <img src={bene} alt="" className="md:w-16 w-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
