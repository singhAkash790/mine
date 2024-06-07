"use client";
import { useEffect, useRef, useState } from "react";
import LogoTriverse from "../../image/SVG/LogoTriverse";
import Cookies from "js-cookie";
// import "./index.css";

const Loader = () => {
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    const showLoader = Cookies.get("loaderHidden");

    if (!showLoader) {
      setIsSaved(false);
      const loaderTimeout = setTimeout(() => {
        Cookies.set("loaderHidden", true, { expires: 0 });
        setIsSaved(true);
      }, 3000);

      return () => clearTimeout(loaderTimeout);
    }
  }, []);

  return <>{isSaved ? null : <LogoTriverse />}</>;
};

export default Loader;
