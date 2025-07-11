import React from "react";

import logo from "../assets/Logo.png";
import gmail from "../assets/gmail.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import face from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linked from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="bg-white md:mt-[100px] mt-7 md:px-24 px-6 md:pt-16 pt-3 flex flex-wrap justify-between">
        <div className="">
          <img src={logo} className="md:w-[50px] w-[40px] max-md:mt-10 mb-8 " alt="" />
          <div className="flex flex-col gap-5">
            <div className="gap-2 flex items-center">
              <div className="w-5">
                <img src={gmail} className="" alt="" />
              </div>
              <p className="text-md tracking-wider">hello@skillbridge.com</p>
            </div>
            <div className="gap-2 flex items-center">
              <div className="w-5">
                <img src={phone} className="" alt="" />
              </div>
              <p className="text-md tracking-wider">+91 8248855937</p>
            </div>
            <div className="gap-2 flex items-center">
              <div className="w-4">
                <img src={location} className="" alt="" />
              </div>
              <p className="text-md tracking-wider">Chennai</p>
            </div>
          </div>
        </div>
        <div className="flex md:gap-48 gap-20 max-md:mt-10">
          <div className="">
            <h1 className="text-xl font-semibold mb-4">Home</h1>
            <ul className="flex flex-col gap-3 ">
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimonial</li>
              <li>Our FAQ's</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold mb-4">About Us</h1>
            <ul className="flex flex-col gap-3 ">
              <li>Company</li>
              <li>Achivements</li>
              <li>Our Goals</li>
            </ul>
          </div>
        </div>
        <div className="mr-20 flex flex-col md:items-center max-md:mt-10">
          <h1 className="text-xl font-semibold mb-4">Social Profiles</h1>
          <div className="flex items-center gap-4">
            <img src={face} className="w-12" alt="" />
            <img src={twitter} className="w-12" alt="" />
            <img src={linked} className="w-12" alt="" />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-100 mt-6"></div>
      <div className="py-5">
        <p className="text-center text-gray-600 tracking-wider">
          © 2023 Skillbridge. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
