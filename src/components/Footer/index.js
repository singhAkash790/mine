import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../SVG/Instagram";
import Linked from "../SVG/Linked";
import Facebook from "../SVG/FaceBook";
import WebLayout from "../WebLayout";
import Logo from "../SVG/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { to: "https://x.com", label: "instagram", Icon: Instagram },
  { to: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { to: "https://t.me", label: "telegram", Icon: Facebook },
  { to: "https://linkedin.com", label: "LinkedIn", Icon: Linked },
];

const index = () => {
  return (
    <WebLayout _sclass="pb-0">
      <div className="flex-shrink-0 h-auto relative w-full z-10 box-border antialiased">
        <div className="contents box-border antialiased">
          <div className="w-full opacity-100 place-content-center items-center flex flex-col  overflow-visible p-0  relative box-border antialiased">
            <div
              data-aos="zoom-up"
              data-aos-easing="ease-in-back"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              className="opacity-100 place-content-center items-center flex flex-col gap-8  overflow-visible p-0 relative w-full box-border antialiased"
            >
              <div className="opacity-100 lg:justify-between w-100 lg:items-center flex lg:flex-row flex-col justify-start items-start gap-8  overflow-visible p-0 relative w-full box-border antialiased">
                <Link
                  to="/"
                  className="opacity-100 font-inter text-black text-base no-underline aspect-[5.10526/1] flex-shrink-0 h-5 overflow-visible relative w-24 block box-border antialiased"
                >
                  <div className="absolute rounded-none inset-0 box-border antialiased">
                    <Logo />
                  </div>
                </Link>
                <div className=" opacity-100  items-start flex flex-row gap-x-4 gap-y-2 lg:w-1/2 w-fit flex-wrap  sm:justify-center justify-start z-10 box-border antialiased">
                  {links.map(({ to, label }) => (
                    <div
                      className="opacity-100 flex-shrink-0 h-auto relative w-auto box-border antialiased"
                      key={to}
                    >
                      <Link
                        to={to}
                        data-aos="fade-in"
                        data-aos-easing="ease-in-back"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1200"
                        className=" bg-transparent rounded-full opacity-100 place-content-center items-center cursor-pointer flex flex-row py-2  overflow-visible  relative no-underline w-min box-border antialiased"
                      >
                        <div className="outline-none flex flex-col justify-start  opacity-100 relative flex-shrink-0 h-auto whitespace-pre box-border antialiased">
                          <p className="text-white uppercase  tracking-[2px] font-[500] text-center text-[14px] leading-6 box-border antialiased">
                            {label}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                {/* //socail icon */}
                <div className="opacity-100 place-content-center items-center flex flex-row gap-4 overflow-visible p-0 relative w-min box-border antialiased">
                  {socialLinks.map(({ to, label, Icon }) => (
                    <div
                      className="opacity-100 flex-shrink-0 h-[40px] relative w-[40px] box-border antialiased"
                      key={label}
                    >
                      <Link
                        aria-label={label}
                        className="h-full w-full opacity-100 cursor-pointer overflow-hidden relative no-underline block box-border antialiased"
                        to={to}
                        target="_blank"
                        rel="noopener"
                      >
                        <div className="image-rendering-pixelated  fill-[#fafafa] color-white opacity-100 absolute aspect-square flex-shrink-0  inset-0 box-border antialiased">
                          <Icon />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" bg-[#fafafa42] opacity-20 flex-shrink-0 h-px overflow-visible relative w-full box-border antialiased"></div>
              <div className="opacity-100 place-content-center justify-between items-center flex flex-row gap-3 h-auto overflow-visible p-0 relative w-full box-border antialiased">
                <div className="outline-none flex flex-col justify-start  opacity-100 relative flex-shrink-0 h-auto whitespace-pre box-border antialiased">
                  <p className="text-[#e6e6e6b9] text-center text-sm font-inter font-normal leading-6 box-border antialiased">
                    2024. All rights reserved.
                  </p>
                </div>
                <div
                  data-framer-name="by Molfar"
                  className="outline-none flex flex-col justify-start flex-shrink-0 opacity-100 relative  h-auto whitespace-pre box-border antialiased"
                >
                  <Link
                    to="https://molfar.co"
                    target="_blank"
                    rel="noopener"
                    className="text-[#e6e6e6b9] text-center text-sm font-inter font-normal leading-6 box-border antialiased"
                    data-styles-preset="FKXgixZ2m"
                  >
                    Developed by : Akash
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default index;
