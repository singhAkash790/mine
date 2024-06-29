import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Expreince from "./components/Expreince";
import Cta from "./components/Cta/Index";
import MyPortfolio from "./components/MyPortfolio";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import PageData from "./Data/Portfolio.json";

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
          <MyPortfolio
            Data={PageData.project.projectData}
            title={PageData.project.title}
            width={"lg:w-[47%] w-full flex flex-wrap "}
            parentClass={
              "flex flex-flow items-start justify-center lg:gap-0 lg:flex-row flex-col gap-8 xl:w-[90%] w-full mx-auto  overflow-hidden pt-10 relative box-border"
            }
          />
          <Cta Data={PageData.cta} />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Portfolio;
