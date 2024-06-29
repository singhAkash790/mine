import React from "react";

const Index = ({ children, title, titleData }) => {
  return (
    <div
      className=" border-solid border-gray-100 flex flex-col items-start justify-start rounded-full place-content-start h-auto overflow-visible xl:x`p-4 relative w-full"
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-once="true"
      data-aos-duration="600"
      // data-aos-anchor-placement="top-center"
    >
      <div className="w-full border-t border-[#464646] 2xl:rounded-[100px] xl:rounded-[70px] lg:rounded-[50px] md:rounded-[40px]  rounded-[20px]  flex flex-col  pt-[40px]">
        <div className="flex items-start lg:justify-between w-[90%]  justify-center xl:flex-row flex-col xl:gap-0 gap-5  mx-auto ">
          <div className="flex flex-col items-center justify-start rounded-[40px]">
            <h3 className="bg-[#1c1c1c] rounded-[100px] py-3 px-8 border-t border-t-[rgba(255,255,255,0.5)]  flex items-center gap-2 text-white xl:text-sm text-[12px]   uppercase font-semibold  xl:tracking-[2px] tracking-[1px]">
              {title}
            </h3>
          </div>
          {titleData}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Index;
