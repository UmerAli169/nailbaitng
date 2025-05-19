import React from "react";

interface CircleCheckboxProps {
  value: number;
  checked: boolean;
  onChange: (value: number) => void;
}

const CircleCheckbox: React.FC<CircleCheckboxProps> = ({ value, checked, onChange }) => {
  return (
    <div className="flex flex-col items-center mb-[12px]">
      <span className="mb-[3px]">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value)}
        className="w-[14px] h-[14px] rounded-full border-2 border-[#199A8E] flex items-center justify-center"
      >
        {checked && (
          <div className="w-[6px] h-[6px] rounded-full bg-[#199A8E]" />
        )}
      </button>
    </div>
  );
};

export default CircleCheckbox;
