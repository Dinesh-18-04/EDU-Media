import React from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";

import ac1 from "../assets/ac1.png";
import ac2 from "../assets/ac2.png";
import ac3 from "../assets/ac3.png";
import ac4 from "../assets/ac4.png";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";

import sym from "../assets/sym.png";

const achievements = [
  {
    img: ac1,
    title: "Trusted by Thousands",
    desc: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
  },
  {
    img: ac2,
    title: "Award-Winning Courses",
    desc: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
  },
  {
    img: ac3,
    title: "Positive Student Feedback",
    desc: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
  },
  {
    img: ac4,
    title: "Industry Partnerships",
    desc: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
  },
];

const goals = [
  {
    img: g1,
    title: "Provide Practical Skills",
    desc: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    img: g2,
    title: "Foster Creative Problem-Solving",
    desc: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
  },
  {
    img: g3,
    title: "Promote Collaboration and Community",
    desc: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
  },
  {
    img: g4,
    title: "Stay Ahead of the Curve",
    desc: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
  },
];

const About = () => {
  return (
    <div>
      <Announcement />
      <div className="md:grid grid-cols-2 md:px-24 px-5 py-5 md:py-[5rem] items-center border-y">
        <div className="md:text-[41px] text-[30px] font-bold">About Skillbridge</div>
        <div className="md:ml-10 text-md font-medium text-gray-600">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </div>
      </div>

      <div className="md:mx-24 ms:mt-[70px] mx-5 mt-10">
        <h1 className="md:text-3xl text-[25px] font-semibold">Achievements</h1>
        <p className="text-gray-600 mt-3 font-medium">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {achievements.map((element, index) => (
            <div className="bg-white rounded-md shadow-md md:p-12 p-5">
              <img className="w-[60px]" src={element.img} alt="" />
              <h2 className="text-[21.5px] font-semibold mt-6">
                {element.title}
              </h2>
              <p className="mt-3 text-[17px] text-gray-700">{element.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:mx-24 ms:mt-[70px] mx-5 mt-10">
        <h1 className="md:text-3xl text-[25px] font-semibold">Our Goals</h1>
        <p className="text-gray-600 mt-3 font-medium">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact. Through our carefully crafted courses, we aim to
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {goals.map((element, index) => (
            <div className="bg-white rounded-md shadow-md p-5 md:p-12">
              <img className="w-[60px]" src={element.img} alt="" />
              <h2 className="text-[21.5px] font-semibold mt-6">
                {element.title}
              </h2>
              <p className="mt-3 text-[17px] text-gray-700">{element.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white mt-9 md:p-16 p-5 max-md:pb-16 relative rounded-lg">
          <div className="md:flex">
            <div className=" md:w-[60%] pb-5">
              <h1 className="md:text-[40px] font-bold text-[20px] pb-5">
                <span className="text-[#ff9500]">Together</span>, let's shape
                the future of digital innovation
              </h1>
              <p>
                Join us on this exciting learning journey and unlock your
                potential in design and development.
              </p>
            </div>
            <div className=" w-[40%] relative">
              <button className="bg-[#ff9500] text-white font-semibold md:px-7 px-4 md:py-3 py-1 rounded-md absolute md:right-0 md:top-10">
                Join Now
              </button>
            </div>
          </div>
          <div className="max-md:hidden absolute md:top-0 md:right-40">
            <img className="w-[400px]" src={sym} alt="" />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default About;
