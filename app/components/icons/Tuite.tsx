import * as React from "react";
import type { SVGProps } from "react";
const SvgTuite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    className="tuite_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#4FD14F"
      d="M778.41 96h141.142L611.2 448.427 973.952 928H689.92L467.456 637.141 212.906 928H71.68l329.813-376.96L53.504 96h291.243l201.088 265.856zm-49.535 747.52h78.208L302.25 176.043h-83.926z"
    />
  </svg>
);
export default SvgTuite;
