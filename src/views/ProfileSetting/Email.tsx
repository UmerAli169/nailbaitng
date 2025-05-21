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
            <form
              onSubmit={handleSubmit}
              className="space-y-[16px] mx-[26px] "
            >
              <InputField
                name="email"
                type="email"
                label="メールアドレス"
                placeholder="メールアドレスを入力"
                icon={accountFilled}
                filledIcon={accountFilled}
              />

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

        {emailSubmitted && (
          <div className="w-full mx-auto mt-[41px]">
            <OTPInput value={otp} onChange={setOtp} />
            <Button
              className="mt-[31px]"
              disabled={otp.length !== 5}
              onClick={handleOTPSubmit}
            >
              認証
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;
