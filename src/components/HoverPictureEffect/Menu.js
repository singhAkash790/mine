import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  const menuItems = useRef([]);

  useEffect(() => {
    animateOtherComponents();
    showMenuItems();
  }, []);

  const animateOtherComponents = () => {
    // Example animation for other components
    gsap.to(".box", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
      },
    });
  };

  const showMenuItems = () => {
    gsap.from(".menu__item-textinner", {
      duration: 1.2,
      ease: "Expo.easeOut",
      startAt: { y: "100%" },
      y: 0,
      delay: (pos) => pos * 0.06,
    });
  };

  return (
    <nav className="menu">
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} text={item.text} imageSrc={item.imageSrc} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
