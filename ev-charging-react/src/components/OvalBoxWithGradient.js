import React from 'react';
import "./ov.css";

function OvalBoxWithGradient() {
  return (
    <svg
      width="150vh"
      height="70vh"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define linear gradient */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="80%">
          <stop offset="0%" stopColor="#87ceeb" />
          <stop offset="50%" stopColor="#96d0bd" />
          <stop offset="50%" stopColor="#7bd596" />
          <stop offset="100%" stopColor="#53c46b" />
        </linearGradient>
      </defs>
      
      {/* Single ellipse with gradient fill */}
      <ellipse cx="410" cy="300" rx="172" ry="190" fill="url(#gradient)" />
      <g transform="translate(242, 169)">
        <svg
          width="42%"
          height="40%"
          id="svg"
          fill="#53c46b"
          viewBox="0 190 1120 350"
          xmlns="https://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,500 C 0,500 0,250 0,250 C 53.5,275.4589743589744 107,300.9179487179487 202,290 C 297,279.0820512820513 433.5,231.7871794871795 519,219 C 604.5,206.2128205128205 638.9999999999999,227.93333333333334 710,242 C 781.0000000000001,256.06666666666666 888.5,262.4794871794872 968,272 C 1047.5,281.5205128205128 1099,294.14871794871794 1173,291 C 1247,287.85128205128206 1343.5,268.925641025641 1440,250 C 1440,250 1440,500 1440,500 Z"
            stroke="none"
            stroke-width="10"
            fill="#7bd596"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </g>
    </svg>
  );
}

export default OvalBoxWithGradient;
