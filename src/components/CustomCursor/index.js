import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import _ from "lodash";
import "./index.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);
  const clickedKnowMoreRef = useRef(false);

  // Debounce function to limit the rate of hover events
  const debounce = (func, delay) => {
    return _.debounce(func, delay);
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = () => {
      if (cursor) {
        gsap.to(cursor, {
          duration: 0.1,
          x: mouseX,
          y: mouseY,
        });
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateCursor();
    };

    const resetCursorDot = () => {
      if (cursorDot) {
        gsap.to(cursorDot, {
          opacity: 0.5,
          width: 60,
          height: 60,
          duration: 0.2,
          border: "0 solid rgba(255, 255, 255, 1)",
          backgroundColor: "#fff",
        });
        cursorDot.textContent = "";
        cursorDot.style.cssText = "";
        cursorDot.classList.remove("cursor-dot-rotate");
      }
    };

    const handleKnowMoreHoverEnter = () => {
      isHoveringRef.current = true;
      setIsHovering(true);
      if (cursorDot) {
        gsap.to(cursorDot, {
          opacity: 1,
          width: 100,
          height: 100,
          duration: 0.2,
          border: "0 solid rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        });
        cursorDot.classList.add("cursor-dot-rotate");
        cursorDot.textContent = "KNOW MORE";
        cursorDot.style.color = "rgba(255, 255, 255, 0.8)";
        cursorDot.style.fontSize = "13px";
        cursorDot.style.fontWeight = "600";
        cursorDot.style.textAlign = "center";
        cursorDot.style.display = "flex";
        cursorDot.style.alignItems = "center";
        cursorDot.style.justifyContent = "center";
        cursorDot.style.letterSpacing = "2.2px";
        cursorDot.style.fontFamily = "'montserrat', sans-serif";
      }
    };

    const handleKnowMoreHoverLeave = (e) => {
      console.log("handleKnowMoreHoverLeave is executed");

      // Prevent hover leave if the click was just registered
      if (clickedKnowMoreRef.current) {
        setTimeout(() => {
          clickedKnowMoreRef.current = false; // Reset the flag for future interactions
          console.log(
            "Clicked, cursor reset flag reset:",
            clickedKnowMoreRef.current
          );
        }, 200); // Adjust timeout as needed
        return; // Do not execute further hover leave logic
      }

      isHoveringRef.current = false;
      setIsHovering(false);
      resetCursorDot();
      console.log("Still hovering", isHovering);
    };

    const handleKnowMoreClick = (e) => {
      clickedKnowMoreRef.current = true; // Set the flag when clicked
      console.log("Know more clicked!");
      resetCursorDot();
      // Add any further action to be taken on click
    };

    const handleContainerHoverEnter = () => {
      isHoveringRef.current = true;
      setIsHovering(true);
      if (cursorDot) {
        gsap.to(cursorDot, {
          scale: 0,
          duration: 0.1,
        });
      }
    };

    const handleContainerHoverLeave = () => {
      isHoveringRef.current = false;
      setIsHovering(false);
      if (cursorDot) {
        gsap.to(cursorDot, {
          scale: 1,
          duration: 0.5,
        });
      }
    };

    const handleInvertedHoverEnter = () => {
      isHoveringRef.current = true;
      setIsHovering(true);
      if (cursorDot) {
        gsap.to(cursorDot, {
          scale: 1.5,
          filter: "invert(100%)",
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    const handleInvertedHoverLeave = () => {
      isHoveringRef.current = false;
      setIsHovering(false);
      if (cursorDot) {
        gsap.to(cursorDot, {
          scale: 1,
          filter: "invert(0%)",
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    // Debounced versions of the hover handlers
    const debouncedKnowMoreHoverEnter = debounce(handleKnowMoreHoverEnter, 50);
    const debouncedKnowMoreHoverLeave = debounce(handleKnowMoreHoverLeave, 50);
    const debouncedContainerHoverEnter = debounce(
      handleContainerHoverEnter,
      50
    );
    const debouncedContainerHoverLeave = debounce(
      handleContainerHoverLeave,
      50
    );
    const debouncedInvertedHoverEnter = debounce(handleInvertedHoverEnter, 50);
    const debouncedInvertedHoverLeave = debounce(handleInvertedHoverLeave, 50);

    const addHoverListeners = () => {
      const knowMoreElements = document.querySelectorAll(".know-more");
      const containerElements = document.querySelectorAll(".container-hover");
      const invertedElements = document.querySelectorAll(".inverted-hover");

      knowMoreElements.forEach((target) => {
        target.addEventListener("mouseenter", debouncedKnowMoreHoverEnter);
        target.addEventListener("mouseleave", handleKnowMoreHoverLeave);
        target.addEventListener("click", handleKnowMoreClick);
      });

      containerElements.forEach((container) => {
        container.addEventListener("mouseenter", debouncedContainerHoverEnter);
        container.addEventListener("mouseleave", debouncedContainerHoverLeave);
      });

      invertedElements.forEach((element) => {
        element.addEventListener("mouseenter", debouncedInvertedHoverEnter);
        element.addEventListener("mouseleave", debouncedInvertedHoverLeave);
      });
    };

    // Initial setup
    addHoverListeners();

    // Setup MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          addHoverListeners();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Add mouse move event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();

      // Remove hover listeners
      const knowMoreElements = document.querySelectorAll(".know-more");
      const containerElements = document.querySelectorAll(".container-hover");
      const invertedElements = document.querySelectorAll(".inverted-hover");

      knowMoreElements.forEach((target) => {
        target.removeEventListener("mouseenter", debouncedKnowMoreHoverEnter);
        target.removeEventListener("mouseleave", handleKnowMoreHoverLeave);
        target.removeEventListener("click", handleKnowMoreClick);
      });

      containerElements.forEach((container) => {
        container.removeEventListener(
          "mouseenter",
          debouncedContainerHoverEnter
        );
        container.removeEventListener(
          "mouseleave",
          debouncedContainerHoverLeave
        );
      });

      invertedElements.forEach((element) => {
        element.removeEventListener("mouseenter", debouncedInvertedHoverEnter);
        element.removeEventListener("mouseleave", debouncedInvertedHoverLeave);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "hovering" : ""}`}
    >
      <div ref={cursorDotRef} className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;
