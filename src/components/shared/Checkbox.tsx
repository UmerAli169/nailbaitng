import React from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: React.ReactNode;
};

const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
  return (
    <label className="flex items-start space-x-[8px] cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[20px] h-[20px] accent-[#199A8E]"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
