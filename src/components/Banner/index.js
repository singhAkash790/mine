import React from "react";
import { NavLink } from "react-router-dom";
import WebLayout from "../WebLayout";
import profileImg from "../../image/profile.jpeg";

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
      <div
        className="flex flex-col items-center justify-center 2xl:pt-[120px]  pt-[80px]"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <div className=" top-0  rounded-lg overflow-hidden xl:w-[340px] w-full">
          <img
            src={profileImg}
            alt="Akash profile image"
            className="w-full h-full object-cover"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-duration="1000"
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-6 ${
            imageSrc ? "lg:-mt-[120px] md:-mt-[150px]" : ""
          }`}
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <h1
            className="text-white 7xl:text-[148px] 5xl:text-[140px] 4xl:text-[130px] 3xl:text-[120px] 2xl:text-[110px] xl:text-[100px] lg:text-[80px] md:text-[75px] sm:text-[60px] xs:text-[50px] text-[42px] leading-tight font-bold uppercase tracking-normal text-center"
            data-aos="fade-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            {title}
          </h1>
          {buttonText && (
            <NavLink
              to={buttonLink}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-[118px] bg-[rgba(110,110,110,0.1)] hover:bg-[rgba(77,77,77,0.2)] transition-colors"
            >
              <div className="relative flex items-center justify-center w-3 h-3 rotate-[-18.43deg]">
                <div className="absolute w-2 h-2 rounded-full bg-[rgb(75,207,31)] "></div>
              </div>
              <span
                className="text-white text-base font-normal"
                data-aos="fade-in"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                {buttonText}
              </span>
            </NavLink>
          )}
          <p className="text-white text-base font-normal text-center max-w-[80ch]">
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
