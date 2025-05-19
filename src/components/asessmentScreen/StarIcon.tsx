import React from "react";

interface StarIconProps {
  filled?: boolean;
  size?: number;
}

const StarIcon: React.FC<StarIconProps> = ({ filled = false, size = 17 }) => {
  return (
    <svg
      width={size}
      height={size + 1}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.93262 6.52832L10.0449 6.87305L15.0449 6.87305L11.2939 9.59863L11 9.8125L11.1123 10.1582L12.5439 14.5664L8.79395 11.8418L8.5 11.6289L8.20605 11.8418L4.45508 14.5664L5.8877 10.1582L6 9.8125L5.70605 9.59863L1.95508 6.87305L6.95508 6.87305L7.06738 6.52832L8.5 2.11816L9.93262 6.52832Z"
        fill={filled ? "#FFD048" : "none"}
        stroke="#FFBE00"
      />
    </svg>
  );
};

export default StarIcon;
