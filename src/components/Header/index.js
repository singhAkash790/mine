import React, { useEffect, useState } from "react";
import Logo from "../SVG/Logo";
import Aos from "aos";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagnticButton from "../MagnticButton/Index";
import WebLayout from "../WebLayout";
import CallBtn from "../SVG/CallBtn";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import "./header.css"; // Assuming you have other styles here

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

  return (
    <WebLayout _sclass={"pt-2"}
      _class={`pt-4 z-10 relative  ${
        headerState ? "header_fixed w-auto top-0 w-full left-0" : ""
      }`}
    >
      <nav
        className={` w-full z-50 transition-all duration-300 ease-in-out bg-[#e9e9e923] rounded-full flex items-center justify-between py-4 px-8 border-t border-[rgba(255,255,255,0.5)] backdrop-blur-md m-auto`}
      >
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://framerusercontent.com/images/2JIgalejcmrUKEz5JwwdnjEupE.svg"
              alt="Logo"
              className="h-5"
            />
          </NavLink>
        </div>
        <div className="flex items-start gap-2">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white text-[15px] tracking-[1px] font-normal">
              Home
            </span>
          </NavLink>
          <NavLink
            to="/about"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white text-[15px] tracking-[1px] font-normal">
              About
            </span>
          </NavLink>
          <NavLink
            to="/portfolio"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white text-[15px] tracking-[1px] font-normal">
              Portfolio
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            className="flex items-center gap-2.5 bg-transparent uppercase rounded-full py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            <span className="text-white text-[15px] tracking-[1px] font-normal">
              Contact
            </span>
          </NavLink>
        </div>
      </nav>
    </WebLayout>
  );
};

export default Index;
