import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import WebLayout from "../WebLayout";
import "./index.css";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const Index = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <WebLayout _sclass="Faq bg-white" _class="Faq_scn">
        <div
          class="heading"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-once="true"
          data-aos-duration="600"
        >
          <h3>FAQ</h3>
        </div>
        <div
          className="Faq_cnt"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
          data-aos-duration="700"
        >
          <Accordion
            open={open === 1}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={1} open={open} />}
            className="gap-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="bg-[#e9ecf1] rounded-full px-8 mb-4 py-5 font-[400] font-Averta text-[25px] border-none"
            >
              What is branding and why is it important?
            </AccordionHeader>
            <AccordionBody
              className=" font-Averta text-[20px] leading-relaxed font-[400] w-[88%] mx-auto  tracking-tight text-black mb-[30px]
            "
            >
              Branding is the way people perceive your business. This is usually
              built over time from repeated exposure to your brand. Your
              audience forms an emotional connection to your brand, so having a
              consistent brand identity that communicates who you are
              effectively is an important and powerful tool. If you need more
              proof, it’s shown that companies that master design principles
              generate 32% higher revenue growth than their average peers.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="bg-[#e9ecf1] rounded-full px-8 font-[400] mb-4 py-5 font-Averta text-[25px] border-none"
            >
              What is brand strategy and why is it important?
            </AccordionHeader>
            <AccordionBody
              className=" font-Averta text-[20px]  leading-relaxed font-[400] w-[88%] mx-auto  tracking-tight text-black mb-[30px]

            "
            >
              Branding is the way people perceive your business. This is usually
              built over time from repeated exposure to your brand. Your
              audience forms an emotional connection to your brand, so having a
              consistent brand identity that communicates who you are
              effectively is an important and powerful tool. If you need more
              proof, it’s shown that companies that master design principles
              generate 32% higher revenue growth than their average peers.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="bg-[#e9ecf1] rounded-full px-8 mb-4 font-[400] py-5 font-Averta text-[25px] border-none"
            >
              What are the deliverables of a branding project?
            </AccordionHeader>
            <AccordionBody
              className=" font-Averta text-[20px] leading-relaxed font-[400] w-[88%] mx-auto  tracking-tight text-black mb-[30px]

            "
            >
              Branding is the way people perceive your business. This is usually
              built over time from repeated exposure to your brand. Your
              audience forms an emotional connection to your brand, so having a
              consistent brand identity that communicates who you are
              effectively is an important and powerful tool. If you need more
              proof, it’s shown that companies that master design principles
              generate 32% higher revenue growth than their average peers.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="bg-[#e9ecf1] rounded-full px-8 mb-4 font-[400] py-5 font-Averta text-[25px] border-none"
            >
              How long does a typical branding project take to complete?
            </AccordionHeader>
            <AccordionBody
              className=" font-Averta text-[20px] leading-relaxed font-[400] w-[88%] mx-auto  tracking-tight text-black mb-[30px]

            "
            >
              Branding is the way people perceive your business. This is usually
              built over time from repeated exposure to your brand. Your
              audience forms an emotional connection to your brand, so having a
              consistent brand identity that communicates who you are
              effectively is an important and powerful tool. If you need more
              proof, it’s shown that companies that master design principles
              generate 32% higher revenue growth than their average peers.
            </AccordionBody>
          </Accordion>
        </div>
      </WebLayout>
    </>
  );
};

export default Index;

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
