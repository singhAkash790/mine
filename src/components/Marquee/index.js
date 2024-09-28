import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WebLayout from "../WebLayout";
import Heading from "../Heading";
import "./index.css";

const Marquee = () => {
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

  const data = [
    { img: "https://i.imgur.com/TUOFz1n.png" },
    { img: "https://i.imgur.com/3qClVXn.png" },
    { img: "https://i.imgur.com/eftNxi3.png" },
    { img: "https://i.imgur.com/61R0rq9.png" },
    { img: "https://i.imgur.com/3rfocvs.png" },
    { img: "https://i.imgur.com/KbPxAP4.png" },
    { img: "https://i.imgur.com/nv0GIVs.png" },
    { img: "https://i.imgur.com/UUuFrI1.png" },
    { img: "https://i.imgur.com/MD0t2pZ.png" },
  ];

  return (
    <WebLayout>
      <Heading title={"Top Clients"}>
        <div className="marquee relative overflow-hidden xl:w-[90%] w-full mx-auto py-2 ">
          <div className="overflow-hidden  mx-auto py-2">
            <ul
              ref={marqueeRef}
              className="marquee py-3 inline-flex space-x-4 max-w-auto items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              {data.map((item, index) => (
                <li key={index} className="w-[250px]">
                  <div className=" w-full">
                    <img src={item.img} alt="" className="w-full" />
                    {/* <div className="text-white text-2xl">{item.text}</div> */}
                  </div>
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
