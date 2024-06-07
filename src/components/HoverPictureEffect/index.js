import React, { useEffect } from "react";
import { gsap } from "gsap";

const items = [
  { text: "Brand Strategy", imageSrc: "path/to/image1.jpg" },
  { text: "Brand Architecture", imageSrc: "path/to/image2.jpg" },
  { text: "Brand Positioning", imageSrc: "path/to/image3.jpg" },
  { text: "Brand Design Language", imageSrc: "path/to/image4.jpg" },
];

const Menu = ({ items }) => {
  useEffect(() => {
    gsap.to(".menu__item-textinner", {
      duration: 1.2,
      ease: "Expo.easeOut",
      startAt: { y: "100%" },
      y: 0,
      delay: (index) => index * 0.06,
    });
  }, []);

  return (
    <nav className="menu">
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} text={item.text} />
        ))}
      </ul>
    </nav>
  );
};

const MenuItem = ({ text }) => {
  useEffect(() => {
    gsap.from(".menu__item-textinner", {
      duration: 0.5,
      rotationY: -20,
      transformOrigin: "0% 50%",
      onComplete: () => {
        gsap.to(".menu__item-textinner", { duration: 0.5, rotationY: 0 });
      },
    });
  }, []);

  return (
    <li className="menu__item">
      <span className="menu__item-textinner">{text}</span>
    </li>
  );
};

const Index = () => {
  useEffect(() => {
    gsap.to(".box", {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: { amount: 0.5 },
    });
  }, []);

  return (
    <div className="container">
      <Menu items={items} />
    </div>
  );
};

export default Index;
