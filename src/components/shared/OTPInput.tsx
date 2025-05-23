import { useEffect, useRef, useState } from "react";

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (val: string) => void;
}

const OTPInput = ({
  length = 5,
  value,
  onChange,
}: OTPInputProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (val: string, index: number) => {
    const newValue = value.split("");
    newValue[index] = val;
    const joined = newValue.join("").slice(0, length);
    onChange(joined);

    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-fit space-y-[14px] mx-auto">
      <div className="flex gap-[14px]">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-[51px] h-[52px] text-[#147B72] text-[24px] leading-[135%] font-normal text-center border border-gray-300 rounded-[12px] outline-none focus:border-[#147B72]"
            value={value[i] || ""}
            onChange={(e) => handleChange(e.target.value.replace(/\D/, ""), i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>

      <p className="text-[#111827] text-[16px] font-normal leading-[150%] text-center">
        {secondsLeft > 0
          ? `00:${secondsLeft.toString().padStart(2, "0")}後にコードを再送信します`
          : "コードを再送信できます"}
      </p>
    </div>
  );
};

export default OTPInput;