import React, { useEffect, useState } from "react";
import "./index.css";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Define a threshold for when the class should be added
      const scrollThreshold = window.innerHeight;

      // Check if the scroll position is greater than the threshold
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToServices = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={
          isScrolled
            ? "floating-button show desktop-show"
            : "floating-button desktop-show"
        }
        onClick={handleScrollToServices}
      >
        <a>enquire Now</a>
      </div>
      <div
        className={
          isScrolled ? "float_btn mobile_show show" : "float_btn mobile_show"
        }
      >
        <a
          href="https://wa.me/+917302261924?text=Hello!%20Plumber Bathware, I am interested in dealership opportunities."
          target="_blank"
        >
          <BsWhatsapp />
          Whatsapp
        </a>
        <a
          href="tel:7302261924"
          // target="_blank"
        >
          <FiPhoneCall />
          Call
        </a>
      </div>
    </>
  );
};

export default Index;
