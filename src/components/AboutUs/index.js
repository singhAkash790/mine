import React, { useState, useEffect } from "react";
import WebLayout from "../WebLayout";
import Heading from "../Heading";

const Index = ({ Data }) => {
  const renderMoreInfo = () => {
    return Data.paragraphs.map((paragraph, index) => (
      <div
        key={index}
        className="flex flex-col justify-start shrink-0 relative whitespace-pre-wrap w-full break-words box-border antialiased"
      >
        <p className="text-left text-white font-normal leading-normal m-0 p-0 box-border">
          {paragraph}
        </p>
      </div>
    ));
  };

  return (
    <WebLayout>
      <Heading
        title={Data.title}
        titleData={
          <div className="flex flex-col items-start justify-start gap-4 xl:w-[80%] w-full p-0 relative overflow-visible box-border antialiased">
            {renderMoreInfo()}
          </div>
        }
      />
    </WebLayout>
  );
};

export default Index;
