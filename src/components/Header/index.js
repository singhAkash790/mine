import React, { useEffect, useState } from "react";
import Logo from "../SVG/Logo";
import Aos from "aos";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagnticButton from "../MagnticButton/Index";
import CallBtn from "../SVG/CallBtn";
import { Link, NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import "./header.css"; // Assuming you have other styles here
import Instagram from "../SVG/Instagram";
import Linked from "../SVG/Linked";
import Facebook from "../SVG/FaceBook";
import WebLayout from "../WebLayout";

const Index = () => {
  const [headerState, setHeaderState] = useState(false);
  const changeBackground = () => {
    setHeaderState(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };
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
  return (
    <WebLayout
      _sclass={" __header pt-2"}
      _class_ID={"header-container"}
      _class={`pt-4 z-10 relative _header_cnt  ${
        headerState ? "header_fixed w-auto top-0 w-full left-0" : ""
      }`}
    >
      <nav
        className={` xl:w-[90%] w-[95%] z-50 transition-all duration-300 ease-in-out  bg-[#e9e9e923]  rounded-full flex items-center justify-between xl:py-4 md:py-3 py-2 px-8 border-t border-[rgba(255,255,255,0.5)] backdrop-blur-md m-auto ${
          isActive
            ? "h-screen opacity-100 border-none flex-col items-start relative  bg-black transition-all duration-500 ease-linear w-full rounded-none  flex  _header_nav"
            : "transition-all duration-500"
        }`}
      >
        <div
          className={`flex items-center ${
            isActive ? "w-full justify-start h-[50px]" : ""
          }`}
        >
          <NavLink
            to="/"
            className="flex items-center xl:w-[150px] md:w-[130px] w-[100px]"
          >
            <Logo />
          </NavLink>
        </div>
        <div className="lg:flex items-start gap-2 hidden  ">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white uppercase  tracking-[2px] font-[500] text-center text-[14px]">
              Home
            </span>
          </NavLink>
          <NavLink
            to="/about"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white uppercase  tracking-[2px] font-[500] text-center text-[14px]">
              About
            </span>
          </NavLink>
          <NavLink
            to="/portfolio"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white uppercase  tracking-[2px] font-[500] text-center text-[14px]">
              Portfolio
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white uppercase  tracking-[2px] font-[500] text-center text-[14px]">
              Contact
            </span>
          </NavLink>
        </div>
        <div
          className={`menu menu-type-1 ${isActive ? " humberActive " : ""}`}
          onClick={handleMenuToggle}
        >
          <input type="checkbox" id="btn-1" />
          <label for="btn-1"></label>
        </div>
        <div
          className={`w-full mx-auto relative z-20  ${
            isActive ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-wrap -mx-3">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <div className="mb-4">
                <ul className="list-none m-0 p-0">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className="py-2 transition-all duration-500 ease-linear transform opacity-100"
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) => `
    text-5xl leading-relaxed font-light block mb-0 font-audrey uppercase
    transition duration-500 ease-in-out relative overflow-hidden
    ${
      isActive
        ? "text-orange-500 hover:text-orange-500"
        : "text-gray-600 hover:text-orange-500"
    }
  `}
                        data-after={link.label}
                      >
                        <span className="inline-block transform transition duration-500 ease-in-out">
                          {link.label}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full  px-3">
              <div className="lg:hidden flex  flex-row transform transition-all duration-500 ease-linear opacity-100">
                {/* Contact details */}
                <div className="w-4/5 float-left">
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-wider inline-block relative text-gray-500">
                      Follow Me
                    </span>
                  </div>
                  <ul className="flex gap-4 list-none m-0 p-0">
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
                          <div className="image-rendering-pixelated  fill-gray-600 color-white opacity-100 absolute aspect-square flex-shrink-0  inset-0 box-border antialiased">
                            <Icon />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </WebLayout>
  );
};

export default Index;
