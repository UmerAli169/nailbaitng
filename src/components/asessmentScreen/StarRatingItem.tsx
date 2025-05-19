// import React from "react";
// import StarIcon from "./StarIcon";

// interface StarRatingButtonProps {
//   value: number;
//   selectedValue: number;
//   onSelect: (value: number) => void;
//   className?: string;
// }

// const StarRatingButton: React.FC<StarRatingButtonProps> = ({
//   value,
//   selectedValue,
//   onSelect,
//   className = ""
// }) => {
//   const isSelected = selectedValue === value;
//   return (
//     <button
//       onClick={() => onSelect(value)}
//       className={`
//         flex items-center justify-center gap-1
//         border-[#A0A0A0]
//         rounded-none
//         text-sm transition-all
//         ${className}
//         ${isSelected ?
//           "bg-[#199A8E] text-white font-normal text-[14px]"
//           : "bg-[#F3F3F3]"
//         }
//       `}
//     >
//       <span>{value}</span>
//       <div className="flex">
//         {value === 0 ? (
//           <StarIcon filled={false} />
//         ) : (
//           Array(value)
//             .fill(0)
//             .map((_, index) => <StarIcon key={index} filled />)
//         )}
//       </div>
//     </button>
//   );
// };

// export default StarRatingButton;
import React from "react";
import StarIcon from "./StarIcon";

interface StarRatingButtonProps {
  value: number;
  selectedValue: number;
  onSelect: (value: number) => void;
  className?: string;
}

const StarRatingButton: React.FC<StarRatingButtonProps> = ({
  value,
  selectedValue,
  onSelect,
  className = "",
}) => {
  const isSelected = selectedValue === value;

  return (
    <button
      onClick={() => onSelect(value)}
      className={`
        flex items-center justify-center gap-1
        border-[#A0A0A0]
        rounded-none
        text-sm transition-all
        ${className}
        ${isSelected
          ? "bg-[#199A8E] text-white font-normal text-[14px]"
          : "bg-[#F3F3F3]"
        }
      `}
    >
      <span>{value}</span>
      <div className="flex">
        {value === 0 ? (
          <StarIcon filled={false} />
        ) : (
          Array(value)
            .fill(0)
            .map((_, idx) => <StarIcon key={idx} filled />)
        )}
      </div>
    </button>
  );
};

export default StarRatingButton;
