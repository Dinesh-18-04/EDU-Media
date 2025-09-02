import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

import Home from "./components/Home";
import Course from "./components/Course";
import Addcourse from "./components/Addcourse";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Coursedetails from "./components/Coursedetails";
import About from "./components/About";

function AppRoutes() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
          localStorage.setItem("isLogin", "false");
          navigate("/login");
        } else {
          localStorage.setItem("isLogin", "true");
        }
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.setItem("isLogin", "false");
        navigate("/login");
      }
    } else {
      localStorage.setItem("isLogin", "false");
    }
  };

  useEffect(() => {
    checkToken();
    setIsLoading(false);

    const interval = setInterval(checkToken, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  if (isLoading) return null;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/addcourse" element={<Addcourse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/course/:id" element={<Coursedetails />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
