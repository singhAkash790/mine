import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WebLayout from "../WebLayout";
import Heading from "../Heading";

const Index = () => {
  return (
    <>
      <WebLayout>
        <Heading
          title={"My Experience"}
          titleData={
            <div className="flex flex-col items-start justify-start gap-[10px] h-[106.391px] w-[568px] overflow-hidden p-0 relative box-border">
              <div className="flex items-start justify-between w-full h-[28.7969px] overflow-visible p-0 relative box-border">
                <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
                  <p className="text-white text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
                    Freelance Designer
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
                  <p className="text-[rgba(255,255,255,0.4)] text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
                    Currently
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-between w-full h-[28.7969px] overflow-visible p-0 relative box-border">
                <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
                  <p className="text-white text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
                    Product Designer at Facebook
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
                  <p className="text-[rgba(255,255,255,0.4)] text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
                    Nov. 2020 - Dec. 2022
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-between w-full h-[28.7969px] overflow-visible p-0 relative box-border">
                <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
                  <p className="text-white text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
                    Computer Engineer at Google
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
                  <p className="text-[rgba(255,255,255,0.4)] text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
                    Jan. 2019 - Nov. 2020
                  </p>
                </div>
              </div>
            </div>
          }
        ></Heading>
      </WebLayout>
    </>
  );
};

export default Index;
