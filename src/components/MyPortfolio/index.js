import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WebLayout from "../WebLayout";
import Heading from "../Heading";
import Card from "../ProjectCard/Card";
import Image1 from "../../image/AssurePathlab.png";
import Image2 from "../../image/centra greens.png";
import Image3 from "../../image/jUJHAR TRAVEL MOCKUP.png";
import Image4 from "../../image/fastway.png";

const Index = ({ title, width, LinkData, parentClass, Data }) => {
  return (
    <>
      <WebLayout>
        <Heading title={title} titleData={LinkData}>
          <div className={parentClass} >
            <div className=" flex flex-wrap gap-x-4 gap-y-6">
              {Data.map((project, index) => (
                <Card
                  key={index}
                  mainclass={width}
                  slug={project.slug}
                  imgSrc={project.imgSrc}
                  title={project.title}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </Heading>
      </WebLayout>
    </>
  );
};

export default Index;
