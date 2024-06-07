import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MenuItem  = ({ text }) => {
  const revealRef = useRef(null);
  const revealInnerRef = useRef(null);
  const revealImageRef = useRef(null);
  const textInnerRef = useRef(null);

  useEffect(() => {
    gsap.set(revealRef.current, { perspective: 800 });
    gsap.set(revealInnerRef.current, { transformStyle: "preserve-3d" });
    gsap.set(revealImageRef.current, {
      rotationY: -20,
      transformOrigin: "0% 50%",
    });
  
    const tl = gsap.timeline({ paused: true });
  
    tl.to(revealInnerRef.current, { duration: 0.5, rotationY: 0 }).to(
      revealImageRef.current,
      { duration: 0.5, rotationY: 0 },
      0
    );
  
    if (revealRef.current) {
      revealRef.current.addEventListener("mouseenter", () => tl.play());
      revealRef.current.addEventListener("mouseleave", () => tl.reverse());
    }
  
    return () => {
      if (revealRef.current) {
        revealRef.current.removeEventListener("mouseenter", () => tl.play());
        revealRef.current.removeEventListener("mouseleave", () => tl.reverse());
      }
    };
  }, []);

  return (
    <li  className="menu__item">
      <span ref={textInnerRef} className="menu__item-textinner">
        {text}
      </span>
    </li>
  );
};

export default MenuItem ;
