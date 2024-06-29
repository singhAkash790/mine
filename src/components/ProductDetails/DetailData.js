import React from "react";

const index = ({ data, title }) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-start rounded-[40px] w-fit"
        data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-duration="600"
      >
        <h3 className="bg-[#1c1c1c] rounded-[100px] py-3 px-8 border-t border-t-[rgba(255,255,255,0.5)]  flex items-center gap-2 text-white xl:text-sm text-[12px]   uppercase font-semibold  xl:tracking-[2px] tracking-[1px]">
          {title}
        </h3>
      </div>
      <div
        className="w-full pl-1 mx-auto xl:pt-6  gap-3"
        data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-duration="600"
      >
        <div className=" text-white pl-2">{data}</div>
      </div>
    </>
  );
};

export default index;
