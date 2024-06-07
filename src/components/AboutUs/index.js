import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WebLayout from "../WebLayout";
import Heading from "../Heading";

const Index = () => {
  return (
    <>
      <WebLayout>
        <Heading
          title={"More Info"}
          titleData={
            <div className="flex flex-col items-start justify-start gap-4  w-[568px] p-0 relative overflow-visible box-border antialiased">
              <div className="flex flex-col justify-start shrink-0 relative whitespace-pre-wrap w-full break-words box-border antialiased">
                <p className="text-left text-white font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border">
                  I approach each project with meticulous attention to detail,
                  striving to exceed expectations and deliver results that align
                  with both the client's objectives and the latest industry
                  standards.
                </p>
              </div>
              <div className="flex flex-col justify-start shrink-0 relative whitespace-pre-wrap w-full break-words box-border antialiased">
                <p className="text-left text-white font-normal text-[18px] leading-[28.8px] m-0 p-0 box-border">
                  As I continue to evolve professionally, I remain committed to
                  refining my craft and embracing new challenges. I am driven by
                  a relentless pursuit of excellence and a desire to create
                  meaningful impact through my work. Let's collaborate to bring
                  your vision to life and shape the future of the web together.
                </p>
              </div>
            </div>
          }
        >
         
        </Heading>
      </WebLayout>
    </>
  );
};

export default Index;
