import React from "react";
import WebLayout from "../WebLayout";
import Heading from "../Heading";

const Stats = () => {
  return (
    <WebLayout>
      <Heading
        title={"My Stats"}
        titleData={
          <div className="flex items-end justify-between gap-0 h-[132.797px] w-[568px]">
            <div className="flex flex-col items-center justify-center rounded-[40px] gap-2">
              <div className="flex items-center justify-center gap-0 h-24">
                <span className="text-white text-[80px] font-bold pointer-events-none">
                  5
                </span>
                <span className="text-white text-[80px] font-bold uppercase">
                  +
                </span>
              </div>
              <p className="text-white text-base font-normal">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[40px] gap-2">
              <div className="flex items-center justify-center gap-0 h-24">
                <span className="text-white text-[80px] font-bold pointer-events-none">
                  99
                </span>
                <span className="text-white text-[80px] font-bold uppercase">
                  +
                </span>
              </div>
              <p className="text-white text-base font-normal">
                Successful Projects
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[40px] gap-2">
              <div className="flex items-center justify-center gap-0 h-[92px]">
                <span className="text-white text-[80px] font-bold pointer-events-none">
                  10
                </span>
              </div>
              <p className="text-white text-base font-normal">Design Awards</p>
            </div>
          </div>
        }
      />
    </WebLayout>
  );
};

export default Stats;
