import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../SVG/Logo";

const Index = () => {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const logo = logoRef.current;
    const overlay = overlayRef.current;

    const preloaderItems = preloader.querySelectorAll(".preloader-grid-item");

    const tl = gsap.timeline({ paused: true });

    tl.to(preloader, { display: "flex", duration: 0 })
      .to(preloaderItems, { height: "100%", duration: 0 }, 0)
      .to(logo, { y: 0, opacity: 1, duration: 0.3, ease: "none" }, 0)
      .to(
        logo,
        {
          y: "8.25rem",
          duration: 0.3,
          ease: "cubic - bezier(0.5, -0.75, 0.7, 2)",
        },
        1.2
      )
      .to(preloaderItems[2], { height: 0, duration: 0.3, ease: "ease" }, 1.8)
      .to(preloaderItems[1], { height: 0, duration: 0.3, ease: "ease" }, 2)
      .to(preloaderItems[0], { height: 0, duration: 0.3, ease: "ease" }, 2.2)
      .to(overlay, { opacity: 0, duration: 0.1, ease: "ease" }, 2.7)
      .to(preloader, { display: "none", duration: 0 }, 2.9);

    const handleAnimationStart = () => {
      tl.play();
    };

    window.addEventListener("load", handleAnimationStart);

    return () => {
      window.removeEventListener("load", handleAnimationStart);
      tl.kill();
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 right-0 bottom-0 z-50 flex justify-center items-start "
      ref={preloaderRef}
    >
      <div
        className="h-full flex-1 bg-[#252424] preloader-grid-item"
        ref={overlayRef}
      ></div>
      <div className="h-full flex-1 bg-[#252424] md:border-r border-none md:border-l border-[#9b9b9b] preloader-grid-item"></div>
      <div className="h-full flex-1 bg-[#252424] preloader-grid-item"></div>
      <div className="absolute top-1/2 z-10 overflow-hidden -translate-y-1/2 h-200px w-fit  ">
        <div
          className="flex justify-center  items-center text-2xl opacity-0 w-[240px]"
          ref={logoRef}
        >
          {/* <img
            src="https://triverseadvertising.com/patel_website/admin-portal/images/logo.png"
            alt=""
            className="w-[250px]"
          /> */}
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Index;
