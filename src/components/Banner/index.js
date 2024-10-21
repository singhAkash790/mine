import React from "react";
import { NavLink } from "react-router-dom";
import WebLayout from "../WebLayout";
import profileImg from "../../image/profile.jpeg";
import RoundedBtn from "../Button/RoundedBtn";

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
        className=" flex flex-col items-center justify-center "
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
        data-aos-duration="800"
      >
        {imageSrc && (
          <div className=" top-0  rounded-lg overflow-hidden xl:w-[340px] w-full">
            <img
              src={imageSrc}
              alt="Akash profile image"
              className="inverted-hover  inverted-mask w-full h-full object-cover"
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-duration="1000"
            />
          </div>
        )}
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
                <div className="absolute w-2 h-2 rounded-full bg-[rgb(75,207,31)] animate-pulse"></div>
                <div className="absolute w-3 h-3 rounded-full bg-[rgba(75,207,31,0.3)] animate-ping"></div>
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
          {aboutText && (
            <RoundedBtn
              Linkto={aboutLink}
              buttonText={aboutText}
              buttonClass="dark"
            />
          )}
        </div>
      </div>
    </WebLayout>
  );
};

export default Hero;
