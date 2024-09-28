import React from "react";
import WebLayout from "../WebLayout";
import Heading from "../Heading";
import "./index.css";
import DetailRole from "./DetailRole";
import DetailData from "./DetailData";

const ProductDetails = ({ productData }) => {
  return (
    <WebLayout>
      <div className="product5-grid mt-8 gap-4">
        <div className="home-sections-label left-section-fixed z-10">
          <DetailRole title={"Details"} Data={productData.Role} />
        </div>
        <div className="w-layout-grid homepage-layouts-grid right-section-fixed ">
          <div className="relative 2xl:gap-8 gap-6 flex flex-col">
            <DetailData
              data={
                <div>
                  <ul className="list list-disc ">
                    {productData.Details.map((detail, index) => (
                      <li key={index} className="mt-2 tracking-[0.5px]">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              }
              title={"Overview"}
            />
            <DetailData
              data={
                <div>
                  <ul className="list list-disc">
                    {productData.KeyFeatures.map((feature, index) => (
                      <li key={index} className="mt-2  tracking-[0.5px]">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              }
              title={"Key Features"}
            />
            <DetailData
              data={
                <div className=" tracking-[0.5px]">
                  {productData.Mission[0]}
                </div>
              }
              title={"Mission"}
            />
            <DetailData
              data={
                <div className="tracking-[0.5px]">{productData.Impact[0]}</div>
              }
              title={"Impact"}
            />
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default ProductDetails;
