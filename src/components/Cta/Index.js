import React from "react";
import WebLayout from "../WebLayout";
import "./index.css";

const Index = () => {
  return (
    <WebLayout _class=" bg-cover bg-center  cta">
      <div className="flex flex-col justify-center h-[700px] items-center overflow-visible p-0 relative w-full z-1 box-border antialiased">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center gap-8  overflow-visible p-0 relative rounded-[24px] bg-gradient-radial from-white via-transparent to-transparent shadow-lg antialiased">
            <a
              href="./contact"
              className="flex items-center gap-12 bg-opacity-10 bg-black rounded-3xl p-4"
              tabIndex="0"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <div className="bg-gray-900 bg-opacity-90 rounded-full flex items-center gap-3 w-fit px-5 py-3 inset-2">
                <div className="bg-green-500 rounded-full w-2 h-2 transform -rotate-75"></div>
                <div className="flex flex-col justify-start flex-shrink-0">
                  <p className="font-normal text-white text-[18px] leading-tight">
                    Available For Work
                  </p>
                </div>
              </div>
            </a>
            <div className="w-full cursor-pointer h-24 relative" tabIndex="0">
              <a
                href="mailto:yourname@example.com"
                rel="noopener"
                className="flex flex-col justify-center items-center gap-0 absolute top-0 left-0 right-0 bottom-0"
                style={{
                  textDecoration: "none",
                  color: "rgb(255, 255, 255)",
                  boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <p className="font-bold text-white text-6xl uppercase leading-tight">
                  molfar@gmail.com
                </p>
                <p className="font-bold text-white text-6xl hidden uppercase leading-tight opacity-60">
                  molfar@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Index;
