import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { RiAccountCircleLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";

const Announcement = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handlePricingClick = () => {
    if (window.location.pathname === "/") {
      const el = document.getElementById("price");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "price" } });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("name");
    setName(storedName);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp > currentTime) {
          setIsLogin(true);
        } else {
          localStorage.removeItem("token");
          setIsLogin(false);
        }
      } catch (err) {
        localStorage.removeItem("token");
        setIsLogin(false);
      }
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
    setName("");
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-[#ff9500] text-center md:w-[1545px] md:h-[41px] h-[25px] text-white m-auto mt-6 rounded-md flex justify-center items-center ">
        <h1 className="md:tracking-wider md:font-medium text-sm">
          Free Courses 🌟 Sale Ends Soon, Get It Now ➔
        </h1>
      </div>

      <div className="mx-3 my-2 md:my-[1.2rem] md:mx-[5.5rem] flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="md:w-[50px] w-[25px]" />
          <ul className="md:flex hidden ml-[3.9rem] gap-[1rem] font-semibold">
            <Link to="/">
              <li className="hover:bg-slate-200 px-3.5 py-2 rounded-md">
                Home
              </li>
            </Link>
            <Link to="/course">
              <li className="hover:bg-slate-200 px-3.5 py-2 rounded-md">
                Courses
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:bg-slate-200 px-3.5 py-2 rounded-md">
                About Us
              </li>
            </Link>
            <li
              onClick={handlePricingClick}
              className="hover:bg-slate-200 px-3.5 py-2 rounded-md cursor-pointer"
            >
              Pricing
            </li>
            <li className="hover:bg-slate-200 px-3.5 py-2 rounded-md">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex items-center md:gap-8 gap-5">
          {!isLogin ? (
            <>
              <Link to="/signup">
                <button className="font-semibold max-md:text-sm">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-[#ff9500] text-white font-semibold md:px-7 px-4 md:py-3 py-1 rounded-md">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="relative group flex items-center gap-2">
                <p className="text-xl font-semibold">{name}</p>
                <RiAccountCircleLine className="text-[30px]" />
                <div className="absolute top-8 right-0 hidden group-hover:flex bg-white shadow-lg rounded-md px-3 py-2 z-10">
                  <LuLogOut
                    onClick={handleLogout}
                    className="cursor-pointer text-[20px] text-red-500"
                    title="Logout"
                  />
                </div>
              </div>
            </>
          )}
          <div className="md:hidden">
            <IoMenu className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
