import React from "react";

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  disabled = false,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-[327px] py-[16px] rounded-[12px] text-white text-[16px] font-normal transition
        ${disabled ? "bg-[#D3FFF2] cursor-not-allowed" : "bg-[#199A8E] hover:opacity-90"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
