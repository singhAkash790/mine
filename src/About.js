import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Expreince from "./components/Expreince";
import Cta from "./components/Cta/Index";
import Points from "./components/Points";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import Aos from "aos";
import Marquee from "./components/Marquee";
const About = () => {
  return (
    <>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col items-center bg-[#111111]   overflow-visible p-0 relative">
          <Header />
          <Banner
            title="about Singh"
            description="Throughout my career, I have collaborated with clients from diverse industries, translating their visions into polished digital solutions."
          />
          <Marquee />
          <AboutUs />
          <Points />
          <Expreince />
          <Cta />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default About;
