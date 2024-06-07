import React from "react";
import { Link } from "react-router-dom";

const Card = ({ href, imgSrc, title, tags, mainclass }) => {
  return (
    <Link
      href={href}
      className={`flex flex-wrap items-center  justify-start mx-auto relative text-blue-600 no-underline gap-10 ${mainclass}`}
    >
      <div className="contents">
        <div
          className="relative flex-1  h-auto"
          style={{
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)",
            opacity: 1,
          }}
        >
          <div
            tabIndex="0"
            className="relative flex flex-col items-start justify-start gap-4 w-full bg-[#1c1c1c] rounded-3xl border-t border-solid border-white-[0.25] cursor-pointer overflow-visible p-0 pb-6"
            style={{ backdropFilter: "blur(0px)" }}
          >
            <div className="relative flex-shrink-0 w-full h-[600px] overflow-hidden rounded-3xl">
              <div
                className="absolute top-0 left-0 right-0 bottom-0 flex-shrink-0"
                style={{
                  transform: "none",
                  transformOrigin: "568px 300px",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: "inherit" }}
                >
                  <img
                    decoding="async"
                    src={imgSrc}
                    alt=""
                    className="block w-full h-full object-cover"
                    style={{
                      borderRadius: "inherit",
                      imageRendering: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="relative flex items-end justify-between gap-2.5 w-full h-[87.9844px] overflow-visible p-0 px-6">
              <div className="relative flex flex-col items-start justify-start gap-2  h-[87.9844px] overflow-visible">
                <div className="relative flex flex-col justify-start flex-shrink-0">
                  <h2 className="text-[24px] font-medium leading-[160%] text-white m-0 p-0">
                    {title}
                  </h2>
                </div>
                <div className="relative flex flex-row items-start justify-start gap-2 w-fit overflow-visible">
                  {tags.map((tag, index) => (
                    <div key={index} className="relative">
                      <div
                        tabIndex="0"
                        className="relative flex w-fit flex-row items-center justify-center gap-0 px-4 py-2 rounded-full border border-solid border-white"
                      >
                        <p className="text-[16px] font-normal leading-[160%] text-center text-white m-0 p-0">
                          {tag}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-2.5 w-fit h-10 px-4 py-2 bg-transparent rounded-full border border-solid border-white">
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
