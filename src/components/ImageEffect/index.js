import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import desktopImage1 from "../../image/Vedio Thumbnail/1.jpg";
import desktopImage2 from "../../image/Vedio Thumbnail/2.jpg";
import desktopImage3 from "../../image/Vedio Thumbnail/3.jpg";
import desktopImage4 from "../../image/Vedio Thumbnail/4.jpg";
import desktopImage5 from "../../image/Vedio Thumbnail/5.jpg";
import desktopImage6 from "../../image/Vedio Thumbnail/6.jpg";
import desktopImage7 from "../../image/Vedio Thumbnail/7.jpg";
import desktopImage8 from "../../image/Vedio Thumbnail/8.jpg";

import mobileImage1 from "../../image/Mobile Thumbnail/1.jpg";
import mobileImage2 from "../../image/Mobile Thumbnail/2.jpg";
import mobileImage3 from "../../image/Mobile Thumbnail/3.jpg";
import mobileImage4 from "../../image/Mobile Thumbnail/4.jpg";
import mobileImage5 from "../../image/Mobile Thumbnail/5.jpg";
import mobileImage6 from "../../image/Mobile Thumbnail/6.jpg";
import mobileImage7 from "../../image/Mobile Thumbnail/7.jpg";
import mobileImage8 from "../../image/Mobile Thumbnail/8.jpg";

const ImageAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const desktopImages = [
    desktopImage1,
    desktopImage2,
    desktopImage3,
    desktopImage4,
    desktopImage5,
    desktopImage6,
    desktopImage7,
    desktopImage8,
  ];

  const mobileImages = [
    mobileImage1,
    mobileImage2,
    mobileImage3,
    mobileImage4,
    mobileImage5,
    mobileImage6,
    mobileImage7,
    mobileImage8,
  ];

  const images = window.innerWidth <= 800 ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Repeat every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ImageContainer>
      <TransitionGroup component={null}>
        <CSSTransition
          key={currentIndex}
          timeout={3000}
          classNames={{
            enter: "enter",
            enterActive: "enterActive",
          }}
          unmountOnExit
        >
          <ImageWrapper
            src={images[currentIndex]}
            direction={currentIndex % 4}
          />
        </CSSTransition>
      </TransitionGroup>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 50vh;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  z-index: 1;

  &.enter {
    transform: ${(props) =>
      props.direction === 0
        ? "translateX(100%)"
        : props.direction === 1
        ? "translateX(-100%)"
        : props.direction === 2
        ? "translateY(100%)"
        : "translateY(-100%)"};
    z-index: 2;
  }

  &.enterActive {
    transform: translateX(0) translateY(0);
    transition: transform 2s ease;
    z-index: 2;
  }
`;

export default ImageAnimation;
