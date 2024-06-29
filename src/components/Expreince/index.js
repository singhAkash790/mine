import React, { useState, useEffect } from "react";
import WebLayout from "../WebLayout";
import Heading from "../Heading";

const Index = ({Data}) => {
  
  const renderExperience = () => {
    return Data.experienceData.map((item, index) => (
      <div
        key={index}
        className="flex items-start justify-between w-full lg:h-[28.7969px] h-auto lg:flex-row flex-col pt-2 lg:pt-0 overflow-visible p-0 relative box-border"
      >
        <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
          <p className="text-white text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
            {item.role}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start opacity-100 flex-shrink-0 transform-none relative box-border">
          <p className="text-[rgba(255,255,255,0.4)] text-left font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border antialiased">
            {item.duration}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <WebLayout>
        <Heading
          title={Data.title}
          titleData={
            <div className="flex flex-col items-start justify-start gap-[10px] lg:h-[106.391px] lg:w-[568px] w-full overflow-hidden p-0 relative box-border">
              {renderExperience()}
            </div>
          }
        />
      </WebLayout>
    </>
  );
};

export default Index;
