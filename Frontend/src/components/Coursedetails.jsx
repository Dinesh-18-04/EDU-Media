import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coursedetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [course, setCourse] = useState(null);

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
      <h1>{course.title}</h1>
    </div>
  );
};

export default Coursedetails;
