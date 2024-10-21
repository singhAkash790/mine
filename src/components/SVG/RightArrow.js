import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={512}
    height={512}
    x={0}
    y={0}
    viewBox="0 0 24 24"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    className=""
    {...props}
  >
    <g>
      <path
        d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z"
        opacity={1}
        data-original="#000000"
        className=""
      />
    </g>
  </svg>
);
export default SVGComponent;
