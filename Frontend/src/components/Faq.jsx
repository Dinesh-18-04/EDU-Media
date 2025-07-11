import React, { useState } from "react";
import plus from "../assets/plusbutton.png";
import cross from "../assets/crossbutton.png";
const list = [
  {
    outer: "Can I enroll in multiple courses at once?",
    inner:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    outer: "What kind of support can I expect from instructors?",
    inner:
      "You’ll get help from instructors through messages, forums, and live sessions. They’ll answer your doubts, give feedback, and support you during the course.",
  },
  {
    outer: "Are the courses self-paced or do they have specific start and end dates?",
    inner:
      "Most of our courses are self-paced, allowing you to learn at your convenience. However, some programs may have fixed schedules with specific start and end dates, especially those that include live sessions or group activities.",
  },
  {
    outer: "Are there any prerequisites for the courses?",
    inner:
      "Most courses are designed for beginners and don’t require any prior knowledge. However, some advanced courses may have prerequisites, which will be clearly mentioned in the course description.",
  },
  {
    outer: "Can I download the course materials for offline access?",
    inner:
      "Yes, most courses allow you to download materials like PDFs, slides, and videos for offline access. This way, you can continue learning even without an internet connection. However, some content may require online access due to licensing or interactive features.",
  },
];

const Faq = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleFaq = (index) =>{
    if(isOpen === index){
      setisOpen(null);
    }
    else{
      setisOpen(index);
    }
  }
  return (
    <div>
      <div className="bg-white md:mt-[100px] mt-8 md:mx-[5.7rem] mx-[1rem] rounded-lg md:p-[5.3rem] p-5 md:flex justify-between md:gap-[50px]">
        <div className="md:w-[500px]">
          <h1 className="md:text-[3rem] text-[35px] font-bold ">Frequently Asked Questions</h1>
          <p className="text-md font-medium mt-3">
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
          <div className="md:mt-12 mt-5">
            <button className="border border-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-600">
              See All FAQ's
            </button>
          </div>
        </div>
        <div className="mt-2">
          <div className=" flex flex-col gap-9">
            {list.map((Element, index) => (
              <div key={index} className="border border-gray-200 md:px-12 md:py-10 px-4 py-2 rounded-lg md:w-[700px]">
                <div className=" flex items-center justify-between ">
                  <p className="md:font-semibold md:text-xl font-medium tracking-wide">
                    {Element.outer}
                  </p>
                  <img
                    src={isOpen === index ? cross : plus}
                    onClick={() => toggleFaq(index)}
                    className="cursor-pointer md:w-[50px] w-[35px]"
                    alt=""
                  />
                </div>
                {isOpen === index && (
                  <div className="mt-[65px] ml-0.5 border-t border-gray-100">
                    <p className="font-medium pt-5 text-[16px] text-gray-600 tracking-wide">
                      {Element.inner}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
