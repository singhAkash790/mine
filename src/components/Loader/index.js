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

    gsap.config({ force3D: true }); // Force GSAP to use CSS transforms

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.to(preloader, { display: "flex", duration: 0, onComplete: () => console.log('Step 1: Preloader displayed') })
        .to(preloaderItems, { height: "100%", duration: 0, onComplete: () => console.log('Step 2: Grid items full height') }, 0)
        .to(logo, { y: 0, opacity: 1, duration: 0.3, ease: "none", onComplete: () => console.log('Step 3: Logo visible') }, 0)
        .to(
          logo,
          {
            y: "8.25rem",
            duration: 0.3,
            ease: "cubic-bezier(0.5, -0.75, 0.7, 2)",
            onComplete: () => console.log('Step 4: Logo moved down')
          },
          1.2
        )
        .to(preloaderItems[2], { height: 0, duration: 0.3, ease: "ease", onComplete: () => console.log('Step 5: Third grid item hidden') }, 1.8)
        .to(preloaderItems[1], { height: 0, duration: 0.3, ease: "ease", onComplete: () => console.log('Step 6: Second grid item hidden') }, 2)
        .to(preloaderItems[0], { height: 0, duration: 0.3, ease: "ease", onComplete: () => console.log('Step 7: First grid item hidden') }, 2.2)
        .to(overlay, { opacity: 0, duration: 0.1, ease: "ease", onComplete: () => console.log('Step 8: Overlay faded out') }, 2.7)
        .to(preloader, { display: "none", duration: 0, onComplete: () => console.log('Step 9: Preloader hidden') }, 2.9);

      const handleAnimationStart = () => {
        console.log('Animation started');
        tl.play();
      };

      let fallbackTimer;

      if (document.readyState === 'complete') {
        console.log('Document already loaded, starting animation');
        handleAnimationStart();
      } else {
        console.log('Document not yet loaded, setting up listeners');
        window.addEventListener('load', handleAnimationStart);
        // Fallback: Start animation after a delay if 'load' event doesn't fire
        fallbackTimer = setTimeout(() => {
          console.log('Fallback timer triggered');
          handleAnimationStart();
        }, 3000);
      }

      return () => {
        window.removeEventListener('load', handleAnimationStart);
        if (fallbackTimer) {
          clearTimeout(fallbackTimer);
        }
        tl.kill();
      };
    }, [preloader, logo, overlay, preloaderItems]);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed left-0 top-0 right-0 bottom-0 z-50 flex justify-center items-start"
      ref={preloaderRef}
    >
      <div
        className="h-full flex-1 bg-[#252424] preloader-grid-item"
        ref={overlayRef}
      ></div>
      <div className="h-full flex-1 bg-[#252424] md:border-r border-none md:border-l border-[#9b9b9b] preloader-grid-item"></div>
      <div className="h-full flex-1 bg-[#252424] preloader-grid-item"></div>
      <div className="absolute top-1/2 z-10 overflow-hidden -translate-y-1/2 h-200px w-fit">
        <div
          className="flex justify-center items-center text-2xl opacity-0 w-[240px]"
          ref={logoRef}
        >
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Index;