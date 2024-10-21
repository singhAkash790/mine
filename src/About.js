import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Expreince from "./components/Expreince";
import Cta from "./components/Cta/Index";
import Points from "./components/Points";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import pageData from "./Data/About.json";
import Marquee from "./components/Marquee";
const About = () => {
  return (
    <>
      <Header />
      <SmoothScroll  smoothness={2}>
        <div className="min-h-screen flex flex-col items-center bg-[#111111]   overflow-visible p-0 relative">
          <Banner
            title={pageData.bannerData.title}
            description={pageData.bannerData.description}
          />
          <Marquee Data ={pageData.marqueData}/>
          <AboutUs Data={pageData.AboutUs} />
          <Points data={pageData.points} />
          <Expreince Data={pageData.Experience} />
          <Cta Data={pageData.cta} />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default About;
