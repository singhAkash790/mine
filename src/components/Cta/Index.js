import React, { useEffect, useState } from "react";
import WebLayout from "../WebLayout";
import pagedata from "../../Data/Cta.json";
import "./index.css";

const Index = () => {
  const Data = pagedata.cta;
  return (
    <WebLayout _class="bg-cover bg-center cta">
      <div
        className="flex flex-col justify-center 7xl:h-[700px] h-[40vh] items-center overflow-visible p-0 relative w-full z-1 box-border antialiased"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-back"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <div className="w-full">
          <div className="flex flex-col justify-center items-center gap-8 overflow-visible p-0 relative rounded-[24px] bg-gradient-radial from-white via-transparent to-transparent shadow-lg antialiased">
            <a
              href={Data.contactLink}
              className="flex items-center gap-12 bg-opacity-10 bg-black rounded-3xl p-4"
            >
              <div
                className="bg-gray-900 bg-opacity-90 rounded-full flex items-center gap-3 w-fit px-5 py-3 inset-2"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-once="true"
                data-aos-duration="800"
              >
                <div className="bg-green-500 rounded-full w-2 h-2 transform -rotate-75"></div>
                <div className="flex flex-col justify-start flex-shrink-0">
                  <p className="font-normal text-white leading-tight">
                    {Data.contactText}
                  </p>
                </div>
              </div>
            </a>
            <div
              className="w-full cursor-pointer h-24 relative"
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-once="true"
              data-aos-duration="800"
            >
              <a
                href={Data.emailLink}
                rel="noopener"
                className="2xl:text-6xl 2xl:h-[75px]  text-[30px] h-[35px]  transition-transform duration-300 leading-none relative overflow-hidden flex"
              >
                <div className="flex flex-col justify-center items-center gap-2 absolute top-0 left-0 right-0 hover:bottom-0 hover:-top-full transition-all duration-500 ease-out overflow-hidden w-full  ">
                  <p className="font-bold text-white uppercase ">
                    {Data.email}
                  </p>
                  <p className="font-bold text-white uppercase  ">
                    {Data.email}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Index;
