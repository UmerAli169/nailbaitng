import React from "react";
import { Field, useFormikContext } from "formik";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  icon: string;
  filledIcon: string;
  iconRight?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  placeholder,
  label,
  icon,
  filledIcon,
  iconRight,
  onChange,
}) => {
  const { values, errors, touched } = useFormikContext<any>();

  const isFilled = values[name]?.length > 0;
  const hasError = touched[name] && errors[name];

  return (
    <div className="space-y-[8px]">
      <label htmlFor={name} className="block text-black font-medium">
        {label}
      </label>
      <div className="relative">
        <img
          src={isFilled ? filledIcon : icon}
          alt=""
          className="absolute left-[12px] top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] transition-all duration-300"
        />
        <Field name={name}>
          {({ field }: any) => (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}
              className={`w-full pl-12 pr-12 py-3 rounded-2xl bg-gray-50 border transition-all
                ${
                  hasError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:ring-teal-500"
                }
                focus:outline-none `}
            />
          )}
        </Field>
        {iconRight && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            {iconRight}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
