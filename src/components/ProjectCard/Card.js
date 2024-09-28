import React from "react";
import { Link } from "react-router-dom";

const Card = ({ slug, imgSrc, title, tags, mainclass }) => {
  return (
    <Link
      to={`/project/${slug}`}
      className={`flex flex-wrap items-center  justify-start mx-auto relative text-blue-600 no-underline gap-10 ${mainclass}`}
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-once="true"
      data-aos-duration="500"
    >
      <div className="contents">
        <div className="relative flex-1  h-auto">
          <div
            tabIndex="0"
            className="relative flex flex-col items-start justify-start gap-4 w-full bg-[#1c1c1c] rounded-3xl border-t border-solid border-white-[0.25] cursor-pointer overflow-visible p-0 pb-6"
            style={{ backdropFilter: "blur(0px)" }}
          >
            <div className="relative flex-shrink-0 w-full h-full overflow-hidden rounded-3xl">
              <div className="flex">
                <img
                  src={imgSrc}
                  alt=""
                  className="block w-full h-full object-cover border-r-inherit"
                />
              </div>
            </div>
            <div className="relative flex items-start justify-between gap-2.5 w-full  overflow-visible p-0 px-6 2xl:h-[150px] h-auto">
              <div className="relative flex flex-col items-start justify-around   gap-2  h-auto overflow-visible">
                <div className="relative flex flex-col justify-start flex-shrink-0">
                  <h2 className="2xl:text-[34px] text-[15px] font-medium lg:tracking-wider tracking-wide text-white  uppercase ">
                    {title}
                  </h2>
                </div>
                <div className="relative w-full flex flex-wrap   items-start justify-start gap-2    overflow-visible">
                  {tags.map((tag, index) => (
                    <div key={index} className="relative">
                      <div
                        tabIndex="0"
                        className="relative flex w-fit flex-row items-center justify-center gap-0 px-4 py-2 rounded-full border border-solid border-white border-opacity-70"
                      >
                        <p className="md:text-[16px] text-[12px] font-normal  text-center text-white m-0 p-0">
                          {tag}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative lg:flex hidden flex-row items-center justify-center gap-2.5 w-fit h-10 px-4 py-2 my-auto bg-transparent rounded-full border border-solid border-white">
                <div className="relative flex-shrink-0 w-6 h-6 fill-current text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                  >
                    <use href="#svg-1469643496_314"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
