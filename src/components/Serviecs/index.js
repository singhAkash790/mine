import React from "react";
import WebLayout from "../WebLayout";
import "./index.css";
import Heading from "../Heading";

const services = [
  {
    id: 1,
    title: "01. Web Design",
    description:
      "I specialize in creating modern and elegant designs that not only captivate audiences but also effectively communicate your brand message.",
  },
  {
    id: 2,
    title: "02. Web Development",
    description:
      "With proficiency in HTML, CSS, JavaScript, and various development frameworks, I bring your vision to life with pixel-perfect precision.",
  },
  {
    id: 3,
    title: "03. Graphic Design",
    description:
      "I specialize in creating impactful visual assets that reflect the unique personality and core values of your brand, ensuring a memorable and authentic representation.",
  },
  {
    id: 4,
    title: "04. Website Maintenance",
    description:
      "With my comprehensive website maintenance and support services, you can trust that your online presence is expertly cared for, allowing you to focus on what matters most.",
  },
];

const Index = () => {
  return (
    <WebLayout>
      <Heading title={"My Services"} >
        <div className=" flex justify-items-center pt-10  flex-col relative gap-8 w-[90%] mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card   bg-[#1b1b1b]   w-full"
            >
              <div className="flex flex-col justify-start flex-shrink-0  text-white">
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <div className="flex flex-col justify-start w-[40%] flex-shrink-0 text-white">
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Heading>
    </WebLayout>
  );
};

export default Index;
