// src/views/shared/InputField.tsx
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  icon: LucideIcon;
  iconRight?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = 'text',
  placeholder,
  label,
  icon: Icon,
  iconRight,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-black font-medium">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {iconRight && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">{iconRight}</div>
        )}
      </div>
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm" />
    </div>
  );
};

export default InputField;
