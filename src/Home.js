import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Tvc from "./components/Tvc/Index";
import ProjectCard from "./components/ProjectCard/";
import Points from "./components/Points";
import Cta from "./components/Cta/Index";
import Serviecs from "./components/Serviecs";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import Aos from "aos";
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
      <SmoothScroll>
        <div className="min-h-screen flex flex-col items-center bg-[#111111]   overflow-visible p-0 relative">
          <Banner
            imageSrc="https://framerusercontent.com/images/VQYjxxzZqlkTdkIJlP0oR87du0.jpg"
            title="akash singh"
            buttonText="Available For Work"
            buttonLink="/contact"
            description="I am a dedicated web designer and developer, deeply committed to the principles of minimalist design. With more than 5 years of hands-on experience in the industry."
            aboutLink="/about"
            aboutText="More About Me"
          />
          <Points />
          <MyPortfolio
            title={"Selected Projects"}
            width={"w-[90%] flex-row "}
            parentClass={"  pt-10 relative "}
            LinkData={
              <Link to="/portfolio">
                <p className="text-white text-lg font-medium leading-[25.2px] text-center">
                  More Projects
                </p>
              </Link>
            }
          />
          <Serviecs />
          <Cta />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Home;
