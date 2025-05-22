import { useState } from "react";
import { Formik } from "formik";
import InputField from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import OTPInput from "../../components/shared/OTPInput";
import accountFilled from "../../assets/auth/accountFilled.svg";

const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [otp, setOtp] = useState("");

  const handleEmailSubmit = (values: { email: string }) => {
    console.log("Email submitted:", values.email);
    setEmailSubmitted(true);
  };

  const handleOTPSubmit = () => {
    console.log("OTP Submitted:", otp);
  };

  return (
    <div className="w-full max-w-[768px] relative mx-auto">
      <div className="w-full mt-[20px]">
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors: { [key: string]: string } = {};
            if (!values.email) {
              errors.email = "メールアドレスを入力してください";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "有効なメールアドレスを入力してください";
            }
            return errors;
          }}
          onSubmit={handleEmailSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-[16px] mx-[26px] ">
              <InputField
                name="email"
                type="email"
                label="メールアドレス"
                placeholder="メールアドレスを入力"
                icon={accountFilled}  
                filledIcon={accountFilled}
              />
              {emailSubmitted && (
                <div className="w-full mx-auto mt-[41px]">
                  <div className="mb-[46px] mt-[20px] text-[#101010] ">
                    <h1 className="text-start  leading-[140%] text-[20px] font-normal">
                      Verify Code{" "}
                    </h1>
                    <p className="text-[16px] leading-[150%]">
                      Please enter the code we just sent to email
                      example@gmail.com
                    </p>
                  </div>
                  <OTPInput value={otp} onChange={setOtp} />
                  <p className="mt-[20px] text-[#101010] text-center text-[16px] ">Code not received yet <span className="underline"> Resend code</span></p>
                </div>
              )}
              <div className="w-full pt-[24px] flex justify-end">
                <button
                  type="submit"
                  className="max-w-[140px] w-full py-[9px] text-white bg-[#199A8E] rounded-[6px]"
                >
                  送信する
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Email;
