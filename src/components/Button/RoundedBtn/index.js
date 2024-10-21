import React, { useState } from "react";
import "./index.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ButtonComponent = ({ buttonClass, buttonText, Linkto }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
    <Link to={Linkto}>
      <button className={`   ${buttonClass} button button--calypso`}>
        <span> {buttonText}</span>
        <i>
          <GoArrowUpRight />
        </i>
      </button>
    </Link>
    </>
  );
};

export default ButtonComponent;
