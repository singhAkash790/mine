import React from "react";
import WebLayout from "../WebLayout";
const Index = ({ image, title }) => {
  return (
    <>
      <WebLayout>
        <div
          name="project"
          className="flex flex-col items-center gap-[80px]  w-full box-border antialiased relative"
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-duration="600"
        >
          <div
            name="banner"
            className="relative flex-none w-full h-[800px] box-border antialiased rounded-[24px]"
          >
            <div className="absolute inset-0 rounded-[24px] box-border antialiased">
              <img
                decoding="async"
                sizes="min(100vw, 1216px)"
                src={image}
                alt={title}
                className="block w-full h-[800px] rounded-[24px] object-cover antialiased inverted-hover"
              />
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
};

export default Index;
