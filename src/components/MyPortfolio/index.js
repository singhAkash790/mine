import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WebLayout from "../WebLayout";
import Heading from "../Heading";
import Card from "../ProjectCard/Card";

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
