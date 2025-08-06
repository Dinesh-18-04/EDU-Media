import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Announcement from "./Announcement";
import vid from "../assets/vid1.mp4";

const Coursedetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [link, setLink] = useState(vid);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getcourse/${id}`)
      .then((res) => {
        console.log("data:", res.data);
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading course details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Announcement />
      <div className="grid grid-cols-2 px-24 py-[5rem] items-center border-y">
        <div className="text-3xl font-bold">{course.title}</div>
        <div className="ml-10 text-md font-medium text-gray-600">
          {course.description}
        </div>
      </div>
      <div className="md:mt-[5.5rem] mt-[2rem]">
        <video
          src={link}
          controls
          className="mx-auto md:w-[1400px] md:h-[720px] object-cover rounded-md"
        />
      </div>

      <div className="mx-20 my-10 mt-20">
        <div className="grid grid-cols-2 gap-10">
          {course.curriculam.map((item, index) => (
            <div
              key={index}
              className=" bg-white p-5 px-10 rounded-lg shadow-md"
            >
              <h1 className="font-bold text-3xl text-right md:text-7xl">
                {String(index + 1).padStart(2, "0")}
              </h1>
              <p className="md:text-[25px] font-semibold mt-2">{item.f}</p>
              <div className=" mt-5">
                <button
                  onClick={() => {
                    setLink(course.videos[index]?.v || vid);
                    console.log(link)
                  }}
                  className=" hover:scale-105 transition-all bg-transparent text-black border-2 font-semibold md:px-4 px-4 py-2 md:py-2 max-md:text-[15px] rounded-md"
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
