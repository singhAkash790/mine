import React from "react";
import "./index.css";
const index = () => {
  return (
    <div>
      <div className="ico animated">
        <div className="circle circle-top"></div>
        <div className="circle circle-main"></div>
        <div className="circle circle-bottom"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="50"
          height="50"
        >
          <path
            className="st-arrow"
            d="M25.19 18.81a1 1 0 0 0-1.41 0L17 25.59V12.51a1 1 0 1 0-2 0v13.08l-6.78-6.78a1 1 0 0 0-1.41 1.41l8.48 8.49a1 1 0 0 0 1.42 0l8.48-8.49a1 1 0 0 0 0-1.41zM16 9.51a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default index;
