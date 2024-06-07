import React from "react";
import { NavLink } from "react-router-dom";
import WebLayout from "../WebLayout";

const Hero = ({
  imageSrc,
  title,
  buttonText,
  buttonLink,
  description,
  aboutLink,
  aboutText,
}) => {
  return (
    <WebLayout>
      <div className="flex flex-col items-center justify-center pt-[120px] ">
        <div className=" top-0  rounded-lg overflow-hidden">
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-6 ${
            imageSrc ? "-mt-[120px]" : ""
          }`}
        >
          <h1 className="text-white text-[148px] leading-[148px] font-bold uppercase tracking-normal text-center">
            {title}
          </h1>
          {buttonText && (
            <NavLink
              to={buttonLink}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-[118px] bg-[rgba(77,77,77,0.1)] hover:bg-[rgba(77,77,77,0.2)] transition-colors"
            >
              <div className="relative flex items-center justify-center w-3 h-3 rotate-[-18.43deg]">
                <div className="absolute w-2 h-2 rounded-full bg-[rgb(75,207,31)] translate-x-[-1] translate-y-[-1]"></div>
              </div>
              <span className="text-white text-base font-normal">
                {buttonText}
              </span>
            </NavLink>
          )}
          <p className="text-white text-base font-normal text-center max-w-[600px]">
            {description}
          </p>
          <NavLink
            to={aboutLink}
            className="group flex items-center flex-col justify-center  "
          >
            <span className="text-white text-base font-medium">
              {aboutText}
            </span>
            {/* <div className="h-[1px] w-full bg-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg> */}
          </NavLink>
        </div>
      </div>
    </WebLayout>
  );
};

export default Hero;
