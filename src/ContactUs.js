import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Expreince from "./components/Expreince";
import Cta from "./components/Cta/Index";
import ContactForm from "./components/ContactForm";
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
            CONTACT ME"
            description="Reach out and let's collaborate on bringing your vision to life. I'm here to help you with your next project."
          />
          <ContactForm />
          <Cta />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Portfolio;
