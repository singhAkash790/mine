import React from "react";
import WebLayout from "../WebLayout";
import Heading from "../Heading";
import Counter from "./counter";
import Data from "../../Data/Points.json";

const Stats = () => { 
  return (
    <WebLayout>
      <Heading
        title={"My Stats"}
        titleData={
          <div className="flex lg:items-end items-center xl:mx-0 mx-auto justify-between md:flex-row flex-col lg:gap-0 gap-5 xl:h-[132.797px] h-auto xl:w-[568px] w-auto">
            {Data.points.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-[40px] gap-2"
              >
                <div className="flex items-center justify-center gap-0 lg:h-24 h-18">
                  <Counter
                    startValue={item.startValue}
                    endValue={item.endValue}
                    speed={item.speed}
                    classForText="xl:text-[80px] lg:text-[70px] md:text-[60px] text-[45px] leading-snug"
                  />
                  <span className="text-white xl:text-[80px] lg:text-[70px] md:text-[60px] text-[45px] leading-snug font-bold uppercase">
                    {item.Plus}
                  </span>
                </div>
                <p className="text-white text-center font-normal">{item.label}</p>
              </div>
            ))}
          </div>
        }
      />
    </WebLayout>
  );
};

export default Stats;
