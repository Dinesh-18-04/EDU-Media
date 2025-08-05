import React, { useEffect, useState } from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import img from "../assets/sara.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin,setIsLogin] = useState(false);
  const navigate = useNavigate();

  async function sendData() {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if(res.status == 200){
        localStorage.setItem("name",res.data.user.name);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("email", res.data.user.email);
        setIsLogin(true);
        navigate("/");
        console.log("LogIn successful");
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Announcement />
      <div className="flex items-center justify-between mx-[5.5rem] gap-20 mt-[110px]">
        <div className="w-[55%]">
          <h1 className="text-3xl font-semibold my-3">Students Testimonials</h1>
          <p>
            This platform has transformed the way I learn! The courses are
            well-structured, easy to follow, and incredibly practical. I've
            gained real-world skills that boosted my confidence and career
            prospects.
          </p>
          <div className="bg-white rounded-lg mt-[50px] ">
            <div className="">
              <div className="md:p-12 p-5 border-b border-gray-100">
                <p className="text-gray-600 md:text-[18px]">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
              </div>
              <div className="md:px-12 p-5 py-5 flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img src={img} className="w-14" alt="" />
                  <p className="font-semibold">sarah L</p>
                </div>
                <div className="">
                  <button className="bg-slate-100 md:px-5 md:py-3 px-3 py-2 font-medium md:font-semibold text-gray-600 rounded-lg">
                    Read Full Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[45%] rounded-lg pt-10 px-[51px] ">
          <h1 className="text-[40px] font-semibold text-center">Login</h1>
          <p className="text-[17px] text-center mt-1">
            Welcome back! Please log in to access your account.
          </p>
          <div className="mt-[44px]">
            <p className="font-semibold">Email</p>
            <input
              type="text"
              placeholder="Enter you Email"
              className="bg-[#fcfcfd] w-full border border-gray-200 rounded-lg py-5 pl-5 mt-3"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name=""
              id=""
            />
          </div>
          <div className="mt-[27px]">
            <p className="font-semibold">Password</p>
            <input
              type="password"
              placeholder="Enter you Email"
              className="bg-[#fcfcfd] w-full border border-gray-200 rounded-lg py-5 pl-5 mt-3"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name=""
              id=""
            />
            <p className="text-right text-[17px] mt-[16px] ">
              Forgot Password?
            </p>
          </div>
          <button
            onClick={sendData}
            className="bg-[#ff9500] text-white w-full rounded-lg py-4 mt-10 font-semibold"
          >
            Login
          </button>
          <p className="text-center my-7">
            Don't have an account?{" "}
            <span className="font-semibold">Sign Up</span>↗
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
