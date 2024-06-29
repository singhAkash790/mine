import React from "react";

const projectDetails = {
  sections: [
    { label: "Role :", tags: ["UI/UX Designer", "Graphic Designer"] },
    { label: "Service :", tags: ["UI/UX Design", "Product Presentation"] },
    { label: "Industry :", tags: ["Artificial Intelligence", "Technology"] },
    { label: "Date :", tags: ["Nov. 2023 - Dec. 2024"] },
  ],
};

const DetailRole = ({ title }) => (
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
      className="w-full pl-1 mx-auto pt-6 gap-3"
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-once="true"
      data-aos-duration="600"
    >
      {projectDetails.sections.map(({ label, tags }, index) => (
        <div
          key={index}
          className="relative flex items-center gap-4 mb-3 w-full  box-border antialiased"
        >
          <div className="">
            <p className=" text-white whitespace-nowrap text-[15px]">{label}</p>
          </div>
          <div className="relative flex items-start gap-0 w-full justify-start  box-border antialiased">
            {tags.map((tag, tagIndex) => (
              <div key={tagIndex}>
                <div className=" border border-white border-opacity-70 rounded-full px-4 py-2">
                  <div>
                    <p className=" text-white xl:text-[16px] text-[12px] gap-2">
                      {tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default DetailRole;
