import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Points from "./components/Points";
import Cta from "./components/Cta/Index";
import Serviecs from "./components/Serviecs";
import Banner from "./components/Banner";
import SmoothScroll from "./components/SmoothScroll";
import Aos from "aos";
import { Link, useParams } from "react-router-dom";
import ProjectImage from "./components/ProjectImage/Index";
import Data from "./Data/slides.json";
import ProductDetails from "./components/ProductDetails";

const ProductDetail = () => {
  useEffect(() => {
    Aos.init({
      // Global settings for AOS
    });
  }, []); // Only run once when the component mounts

  const { slug } = useParams();

  // Filter the data based on the slug
  const productData = Data.Data.find((item) => item.slug === slug);

  // Log for debugging
  console.log("Slug:", slug);
  console.log("Found product data:", productData);

  // Check if productData is undefined
  if (!productData) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <Header />
      <SmoothScroll smoothness={2}>
        <div className="min-h-screen flex flex-col items-center bg-[#111111] overflow-visible p-0 relative">
          <Banner
            title={productData.title}
            description={productData.description}
          />
          <ProjectImage image={productData.imgSrc} title={productData.title} />
          <ProductDetails productData={productData.productData} />
          <Points />
          <Cta />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
};
export default ProductDetail;
