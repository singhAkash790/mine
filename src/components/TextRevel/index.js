import React from "react";
import gsap from "gsap";

const Index = ({ children, _Class, spanClass }) => {
  const lineRef = React.useRef(null);

  React.useEffect(() => {
    gsap.from(lineRef.current.children, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <div
      className={`line relative overflow-hidden w-max h-min ${_Class}`}
      ref={lineRef}
    >
      <span className={`absolute leading-normal ${spanClass}`}>{children}</span>
    </div>
  );
};

export default Index;
