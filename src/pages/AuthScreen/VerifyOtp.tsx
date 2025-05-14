import { useState } from "react";
import SignUP from "../../assets/auth/SignUP.svg";
import BackArrow from "../../assets/shared/backArrow.svg";
import OTPInput from "../../components/shared/OTPInput";
import Button from "../../components/shared/Button";

const VerifyCode = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    console.log("OTP Submitted:", otp);
    };

  return (
    <div className="w-full max-w-[768px] relative ">
      <div>
        <img
          src={SignUP}
          className="w-[280px] h-[376px] absolute top-[-40px] right-0"
          alt="SignUp Illustration"
        />
        <img
          src={BackArrow}
          className="w-[40px] h-[40px] absolute top-[60px] left-[16px]"
          alt="Back"
        />
      </div>

<div className="mx-[24px]">


      <div className="pt-[116px]  max-w-[278px] w-full space-y-[8px]">
        <h1 className="text-[#111827] font-normal text-[24px] leading-[135%]">
          認証コード
        </h1>
        <p className="text-[#9CA3AF] font-normal text-[16px] leading-[150%]">
          Please enter the code we just sent to email example@gmail.com
        </p>
      </div>

      <div className="w-full mx-auto mt-[41px] ">
        <OTPInput value={otp} onChange={setOtp} />
        <Button
          className="mt-[31px]  "
          disabled={otp.length !== 5}
          onClick={handleSubmit}
        >
          認証
        </Button>
      </div>
      </div>
    </div>
  );
};

export default VerifyCode;
