import React from "react";
import "../../Button/Button.css";
import { Link } from "react-router-dom";
import Rightarrow from "../../SVG/Rightarrow";

const Index = ({ buttonText, buttonClass, pageLink, isSubmit, _disable }) => {
  return (
    <>
      {isSubmit ? (
        <button
          className={`${buttonClass} btn btn-sm animated-button thar-one`}
          disabled={_disable}
          type="submit"
        >
          {/* <Rightarrow /> */}
          {buttonText}
        </button>
      ) : (
        <Link
          to={pageLink}
          className={`${buttonClass} btn btn-sm animated-button thar-one`}
        >
          <Rightarrow />
          {buttonText}
        </Link>
      )}
    </>
  );
};

export default Index;
