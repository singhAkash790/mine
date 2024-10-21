import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WebLayout from "../WebLayout";
import Heading from "../Heading";
import "./index.css";

const Marquee = ({ Data }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const items = marqueeElement.querySelectorAll("li");

    // Set up GSAP timeline
    const tl = gsap.timeline({ repeat: -1, paused: true });

    // Calculate total width of items
    let totalWidth = 0;
    items.forEach((item) => {
      totalWidth += item.offsetWidth;
    });

    // Clone items for seamless loop
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      marqueeElement.appendChild(clone);
    });

    // Animate
    tl.fromTo(
      marqueeElement,
      { x: "0%" },
      { x: `-${totalWidth}px`, duration: totalWidth / 100, ease: "linear" }
    );

    // Play timeline
    tl.play();

    // Pause animation on hover
    marqueeElement.addEventListener("mouseenter", () => tl.pause());
    marqueeElement.addEventListener("mouseleave", () => tl.play());

    return () => {
      // Clean up event listeners and clones
      marqueeElement.removeEventListener("mouseenter", () => tl.pause());
      marqueeElement.removeEventListener("mouseleave", () => tl.play());
      items.forEach((item) => item.remove());
      tl.kill();
    };
  }, []);

  return (
    <WebLayout>
      <Heading title={Data.title}>
        <div className="marquee relative overflow-hidden xl:w-[90%] w-full mx-auto py-2 ">
          <div className="overflow-hidden mx-auto py-2">
            <ul
              ref={marqueeRef}
              className="marquee py-3 inline-flex space-x-4 max-w-auto items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              {Data.data.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-6  min-w-[250px]"
                >
                  <img
                    title={skill.label}
                    src={skill.icon}
                    alt={skill.label}
                    className="p-5 m-3 object-contain w"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Heading>
    </WebLayout>
  );
};

export default Marquee;
