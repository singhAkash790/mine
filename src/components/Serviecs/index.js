import React from "react";
import WebLayout from "../WebLayout";
import "./index.css";
import Heading from "../Heading";

const Index = ({ Data }) => {
  return (
    <WebLayout>
      <Heading title={"My Services"}>
        <div className=" flex justify-items-center pt-10  flex-col relative gap-8 xl:w-[90%] w-full mx-auto">
          {Data.map((service) => (
            <div
              key={service.id}
              className="service-card   bg-[#1b1b1b]   w-full"
            >
              <div className="flex flex-col justify-start flex-shrink-0  text-white">
                <h2 className="7xl:text-[24px] 6xl:text-[20px]   lg:tracking-[1.5px] tracking-wide font-semibold uppercase ">
                  {service.title}
                </h2>
              </div>
              <div className="flex flex-col justify-start 4xl:w-[40%] 2xl:w-[50%] xl:w-[55%] lg:px-0 px-2 w-full flex-shrink-0 text-white">
                <p className=" tracking-[0.8px] leading-normal text-[#fefefe]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Heading>
    </WebLayout>
  );
};

export default Index;
