import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Expreince from "./components/Expreince";
import Cta from "./components/Cta/Index";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import PageData from "./Data/About.json";
import Marquee from "./components/Marquee";
const Portfolio = () => {
  return (
    <>
      <Header />
      <SmoothScroll>
        <div className="min-h-screen flex flex-col items-center bg-[#111111]   overflow-visible p-0 relative">
          <Banner
            title={PageData.bannerData.title}
            description={PageData.bannerData.description}
          />
          <ContactForm />
          <Cta Data={PageData.cta} />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Portfolio;
