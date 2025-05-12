// src/views/shared/Button.tsx
import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', disabled, children, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full  py-[10px] px-[100px] text-[#FFFFFF] font-normal text-[16px] rounded-[8px] transition-colors ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#199A8E] hover:bg-teal-600'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
