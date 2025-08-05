import React from "react";
import Announcement from "./Announcement";
import Main from "./Main";
import Benefits from "./Benefits";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.scrollTo === "price") {
      const pricingSection = document.getElementById("price");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
        navigate(location.pathname, { replace: true });
      }
    }
  }, [location]);
  return (
    <div>
      <Announcement />
      <Main />
      <Benefits />
      <Courses />
      <Testimonials />
      <div className="" id="price">
        <Pricing />
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
