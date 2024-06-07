import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Expreince from "./components/Expreince";
import Cta from "./components/Cta/Index";
import MyPortfolio from "./components/MyPortfolio";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import Aos from "aos";
import Marquee from "./components/Marquee";
const Portfolio = () => {
  return (
    <>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col items-center bg-[#111111]   overflow-visible p-0 relative">
          <Header />
          <Banner
            title="
            MY PORTFOLIO"
            description="Discover my diverse portfolio showcasing polished digital solutions crafted for clients across various industries."
          />
          <MyPortfolio
            title={"My Expreince"}
            width={"w-[48%] "}
            parentClass={"flex flex-flow items-start justify-center gap-0 w-[90%] mx-auto  overflow-hidden pt-10 relative box-border"}
          />
          <Cta />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Portfolio;
