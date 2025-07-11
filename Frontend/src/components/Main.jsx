import React from "react";

import flash from "../assets/Icon Container.png";
import arrow from "../assets/Abstract Line.png";
import zap from "../assets/Zapier.png";
import spo from "../assets/Spotify.png";
import zoom from "../assets/Zoom.png";
import ama from "../assets/Amazon.png";
import ado from "../assets/Adobe.png";
import not from "../assets/Notion.png";
import net from "../assets/Netflix.png";

const Main = () => {
  return (
    <div>
      <div className="">
        <div className="relative flex justify-center items-center bg-white p-2 pr-6 rounded-md md:mx-[27.5rem] mx-7 md:mt-[7rem] mt-10">
          <div className="absolute max-md:w-[20px] md:-top-8 md:-left-6 -top-4 -left-3">
            <img src={arrow} alt="" />
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="">
              <img src={flash} alt="" className="md:w-[50px] w-[30px]" />
            </div>
            <div className="">
              <h1 className="font-bold md:text-[2.4rem] ">
                <span className="text-[#ff9500]">Unlock</span> Your Creative
                Potential
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-md:mx-7 md:mt-7 mt-5 gap-5">
          <h2 className="md:text-[2.12rem] max-md:text-center text-xl font-semibold">
            With Online Design and Development Courses.
          </h2>
          <p className="md:text-[1.21rem] text-sm font-medium max-md:text-center">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>
        <div className="flex justify-center items-center md:mt-[4rem] mt-6 gap-4">
          <button className="bg-[#ff9500] text-white font-semibold md:px-7 px-4 py-2 md:py-4 max-md:text-[15px] rounded-md">
            Explore Courses
          </button>
          <button className="bg-white font-semibold md:px-6 md:py-4 px-4 py-2 max-md:text-[15px] rounded-md">
            View Pricing
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-7 max-md:flex max-md:overflow-scroll bg-white items-center justify-center md:mx-[5.5rem] rounded-md md:mt-[6.7rem] mt-6 md:px-7 md:py-[2.8rem] px-4 py-3">
        <div className="flex justify-center items-center border-r border-gray-300">
          <img src={zap} alt="" className="w-[65px]" />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300">
          <img src={spo} alt="" className="w-[90px]" />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300">
          <img src={zoom} alt="" className="w-[65px]" />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300">
          <img src={ama} alt="" className="w-[70px]" />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300">
          <img src={ado} alt="" className="w-[85px]" />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300">
          <img src={not} alt="" className="w-[80px]" />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300">
          <img src={net} alt="" className="w-[70px]" />
        </div>
      </div>
    </div>
  );
};

export default Main;
