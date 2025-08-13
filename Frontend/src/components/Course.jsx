import React from "react";
import axios from "axios";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [list, setlist] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin") === "true";
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getcourse")
      .then((res) => setlist(res.data))
      .catch((err) => console.error(err));

    fetchSubscriptionStatus();
  }, []);

  const fetchSubscriptionStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/getinfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsSubscribed(res.data.isSubscription);
    } catch (err) {
      console.error("Failed to fetch subscription:", err);
    }
  };

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

                <button
                  onClick={() => {
                    if (isLogin === true) {
                      if (Element.coursetype === false) {
                        navigate(`/course/${Element._id}`);
                      } else {
                        if (isSubscribed) {
                          navigate(`/course/${Element._id}`);
                        } else {
                          alert(
                            "Please subscribe to the Pro Plan to access this paid course."
                          );
                        }
                      }
                    }
                    else{
                      alert("LogIn to continue the free course.");
                    }
                  }}
                  className="bg-[#fcfcfd] border max-md:text-sm border-gray-200 md:min-w-[165px] w-[110px] max-md:mt-4 md:h-[50px] h-[35px] font-semibold rounded-lg"
                >
                  View Course
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 md:gap-5 gap-2 md:mt-7 mt-3">
              {Element.images.slice(0, 3).map((img, idx) => (
                <div className="">
                  <img
                    key={idx}
                    src={`http://localhost:5000${img}`}
                    alt={`Course Img ${idx + 1}`}
                    className="rounded-md w-[430px] md:h-[360px] h-[100px] object-cover"
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
                  {Element.coursetype == true ? "Paid" : "free"}
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
