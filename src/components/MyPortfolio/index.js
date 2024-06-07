import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WebLayout from "../WebLayout";
import Heading from "../Heading";
import Card from "../ProjectCard/Card";

const Index = ({ title, width, LinkData, parentClass }) => {
  const projectData = [
    {
      href: "./project/andromeda",
      imgSrc:
        "https://framerusercontent.com/images/knqFZ7PlQ36gLj5P0wd3dO9d9zc.jpg",
      title: "Andromeda",
      tags: ["UI/UX Design", "Product Presentation"],
    },
    {
      href: "./project/galaxy",
      imgSrc: "https://example.com/galaxy.jpg",
      title: "Galaxy",
      tags: ["Web Development", "E-commerce"],
    },
    // Add more project data as needed
  ];
  return (
    <>
      <WebLayout>
        <Heading title={title} titleData={LinkData}>
          <div className={parentClass}>
            {projectData.map((project, index) => (
              <Card
                key={index}
                mainclass={width}
                href={project.href}
                imgSrc={project.imgSrc}
                title={project.title}
                tags={project.tags}
              />
            ))}
          </div>
        </Heading>
      </WebLayout>
    </>
  );
};

export default Index;
