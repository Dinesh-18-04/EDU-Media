import React from "react";
import freeicon from "../assets/priceicon.png";
import freewrong from "../assets/freewrong.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const listfree = [
  {
    img: freeicon,
    f1: "Access to selected free courses.",
  },
  {
    img: freeicon,
    f1: "Limited course materials and resources.",
  },
  {
    img: freeicon,
    f1: "Basic community support.",
  },
  {
    img: freeicon,
    f1: "No certification upon completion.",
  },
  {
    img: freeicon,
    f1: "Ad-supported platform.",
  },
  {
    img: freewrong,
    f1: "Access to exclusive Pro Plan community forums.",
  },
  {
    img: freewrong,
    f1: "Early access to new courses and updates.",
  },
];
const listpro = [
  {
    img: freeicon,
    f1: "Unlimited access to all courses.",
  },
  {
    img: freeicon,
    f1: "Unlimited course materials and resources.",
  },
  {
    img: freeicon,
    f1: "Priority support from instructors.",
  },
  {
    img: freeicon,
    f1: "Course completion certificates.",
  },
  {
    img: freeicon,
    f1: "Ad-free experience.",
  },
  {
    img: freeicon,
    f1: "Access to exclusive Pro Plan community forums.",
  },
  {
    img: freeicon,
    f1: "Early access to new courses and updates.",
  },
];

const Pricing = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // ✅ move this inside
  const isLogin = localStorage.getItem("isLogin") === "true";

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFree, setIsFree] = useState(false);

  const fetchSubscription = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/getinfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsSubscribed(res.data.isSubscription);
      setIsFree(res.data.isFree);
    } catch (err) {
      console.log("Failed to fetch subscription:", err);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  const handleLoginAlert = async (req, res) => {
    try {
      if (isLogin != true) {
        alert("LogIn to Continue the payment.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProCancel = async () => {
    setIsSubscribed(false);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/procancel",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        alert("Subscription cancelled successfully!");
        await fetchSubscription();
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to cancel subscription");
    }
  };

  // const handleFree = async (req, res) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.post(
  //       "http://localhost:5000/api/free",
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if(res.status === 200){
  //       alert("Free Subscription Activated.");
  //       await fetchSubscription();
  //       setIsFree(true);
  //     }
  //     else{
  //       alert("something went wrong");
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleFreeCancel = async (req,res) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.post(
  //       "http://localhost:5000/api/freecancel",
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if(res.status === 200){
  //       alert("Free Subscription Cancelled.");
  //       await fetchSubscription();
  //       setIsFree(false);
  //     }
  //     else{
  //       alert("something went wrong");
  //     }
      
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // }

  const handleProPayment = async (req, res) => {
    try {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      const { data } = await axios.post(
        "http://localhost:5000/api/create-order",
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await fetchSubscription();

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        handler: async function (response) {
          await axios.post(
            "http://localhost:5000/api/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email: email,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          alert("Payment successful! You are now a Pro user.");
          await fetchSubscription();
          navigate("/course");
        },
        prefill: {
          name: "Dinesh",
          email: email,
        },
        theme: {
          color: "#ff9500",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.log(err);
      alert("Payment failed or something went wrong.");
    }
  };

  return (
    <div className="md:mx-[5.5rem] mx-[1rem]" id="price">
      <div className="md:mt-[6.9rem] mt-[2rem]">
        <h1 className="md:text-[3rem] text-[35px] font-semibold">
          Our Pricing
        </h1>
        <div className="">
          <p className="ms:font-semibold mt-1 max-md:text-sm md:w-[80%] text-gray-600 ">
            Choose a plan that fits your learning journey. Whether you're just
            getting started or looking to advance your skills, our affordable
            pricing options give you full access to high-quality courses, expert
            support, and career-boosting resources.
          </p>
        </div>
      </div>
      <div className="bg-white md:mt-16 mt-5 md:p-14 p-7 grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-2 rounded-lg">
        <div className="bg-[#fcfcfd] md:p-7 p-4 rounded-lg border border-gray-200">
          <div className=" bg-[#fff9f0] rounded-lg border shadow-sm border-gray-200 py-2 md:my-5 my-2">
            <p className="font-semibold text-center md:text-[23px] text-[18px]">
              Free Plan
            </p>
          </div>
          <h1 className="text-center font-semibold md:text-[20px]">
            <span className="font-bold md:text-[75px] text-[35px]">$0</span>
            /month
          </h1>
          <div className="bg-white border border-gray-200 rounded-lg ">
            <div className="md:mt-7 md:p-7 p-3 md:px-16">
              <h1 className="text-center font-semibold md:text-[22px] text-[17px]">
                Available Features
              </h1>
              <div className="flex flex-col gap-6 mt-7">
                {listfree.map((Element, index) => (
                  <div className="border border-gray-200 shadow-md flex rounded-lg px-4 py-3 gap-3 max-md:items-center ">
                    <span>
                      <img className="w-5" src={Element.img} alt="" />
                    </span>
                    <div className="md:font-semibold max-md:text-[10px] text-gray-600">
                      {Element.f1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3">
              {isLogin ? (
                <button  className="text-white bg-[#ff9500] text-center w-full md:p-5 p-3 rounded-b-lg">
                  Activated
                </button>
              ) : (
                <button onClick={handleLoginAlert} className="text-white bg-[#ff9500] text-center w-full md:p-5 p-3 rounded-b-lg">
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[#fcfcfd] md:p-7 p-4 rounded-lg border border-gray-200">
          <div className=" bg-[#fff9f0] rounded-lg border shadow-sm border-gray-200 py-2 md:my-5 my-2">
            <p className="font-semibold text-center md:text-[23px] text-[18px]">
              Pro Plan
            </p>
          </div>
          <h1 className="text-center font-semibold md:text-[20px]">
            <span className="font-bold md:text-[75px] text-[35px]">$76</span>
            /month
          </h1>
          <div className="bg-white border border-gray-200 rounded-lg ">
            <div className="md:mt-7 md:p-7 p-3 md:px-16">
              <h1 className="text-center font-semibold md:text-[22px] text-[17px]">
                Available Features
              </h1>
              <div className="flex flex-col gap-6 mt-7">
                {listpro.map((Element, index) => (
                  <div className="border border-gray-200 shadow-md flex rounded-lg px-4 py-3 gap-3 max-md:items-center ">
                    <span>
                      <img className="w-5" src={Element.img} alt="" />
                    </span>
                    <div className="md:font-semibold max-md:text-[10px] text-gray-600">
                      {Element.f1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3">
              {isSubscribed ? (
                <button
                  onClick={isLogin ? handleProCancel : handleLoginAlert}
                  className="text-black bg-slate-400 text-center w-full md:p-5 font-semibold p-3 rounded-b-lg"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={isLogin ? handleProPayment : handleLoginAlert}
                  className="text-white bg-[#ff9500] text-center w-full md:p-5 p-3 rounded-b-lg"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
