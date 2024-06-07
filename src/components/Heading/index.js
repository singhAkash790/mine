import React from "react";

const Index = ({ children, title, titleData }) => {
  return (
    <div className=" border-solid border-gray-100 flex flex-col items-start justify-start rounded-full place-content-start h-auto overflow-visible p-4 relative w-full">
      <div className="w-full border-t border-[#1c1c1c] rounded-[100px]   flex flex-col  pt-[40px]">
        <div className="flex items-start justify-between w-[90%]  mx-auto ">
          <div className="flex flex-col items-center justify-start rounded-[40px]">
            <h3 className="bg-[#1c1c1c] rounded-[100px] py-3 px-8 border-t border-t-[rgba(255,255,255,0.5)]  flex items-center gap-2 text-white text-base font-normal">
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
