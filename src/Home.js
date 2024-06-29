import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Points from "./components/Points";
import Cta from "./components/Cta/Index";
import Serviecs from "./components/Serviecs";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import Aos from "aos";
import pageData from "./Data/Home.json";
import { Link } from "react-router-dom";
import MyPortfolio from "./components/MyPortfolio";

const Home = () => {
  useEffect(() => {
    Aos.init({
      // Global settings for AOS
    });
  }, []); // Only run once when the component mounts

  return (
    <>
      <Header />
      <SmoothScroll smoothness={4}>
        <div className="min-h-screen flex flex-col items-center bg-[#111111] overflow-visible p-0 relative">
          <Banner
            imageSrc={pageData.bannerData.imageSrc}
            title={pageData.bannerData.title}
            buttonText={pageData.bannerData.buttonText}
            buttonLink={pageData.bannerData.buttonLink}
            description={pageData.bannerData.description}
            aboutLink={pageData.bannerData.aboutLink}
            aboutText={pageData.bannerData.aboutText}
          />
          <Points data={pageData.points} />
          <MyPortfolio
            title={pageData.project.title}
            width={"xl:w-[90%] w-full flex-row "}
            parentClass={"  pt-10 relative gap-10 flex flex-col"}
            Data={pageData.project.projectData}
            LinkData={
              <Link to={pageData.project.pagelink}>
                <p
                  className="text-white text-sm font-semibold leading-tight text-center xl:block hidden uppercase tracking-[2px]
                "
                >
                  {pageData.project.title2}
                </p>
              </Link>
            }
          />
          <Serviecs Data={pageData.services} />
          <Cta Data={pageData.cta} />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Home;
