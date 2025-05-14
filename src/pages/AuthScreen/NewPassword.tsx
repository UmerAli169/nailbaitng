import { IonIcon } from "@ionic/react";
import { Formik } from "formik";
import { useState } from "react";
import OTPInput from "../../components/shared/OTPInput";
import InputField from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import SignUP from "../../assets/auth/SignUP.svg";
import BackArrow from "../../assets/shared/backArrow.svg";
import password from "../../assets/auth/password.svg";
import { Check, Eye, EyeOff, X } from "lucide-react";
import CheckIcon from "../../assets/shared/checkIcon.svg";
import passwordlFilled from "../../assets/auth/filledPassword.svg";
import TicK from "../../assets/auth/passwordTick11.svg";
import Cross from "../../assets/auth/passwordCross.svg";
function NewPassword() {
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const validatePassword = (value: string) => {
    let error = "";
    if (!value) {
      error = "必須項目です";
    } else if (value.length < 8) {
      error = "8文字以上必要です";
    } else if (!/\d/.test(value)) {
      error = "数字を1つ以上含めてください";
    } else if (!/[a-zA-Z]/.test(value)) {
      error = "文字を1つ以上含めてください";
    }
    return error;
  };

  return (
    <div className="w-full max-w-[768px] relative min-h-screen">
      <IonIcon
        src={SignUP}
        className="min-w-[280px] min-h-[376px] absolute top-[-40px] right-0"
      />
      <IonIcon
        src={BackArrow}
        className="min-w-[40px] min-h-[40px] absolute top-[60px] left-[16px]"
      />

      <div className="pt-[124px] px-[24px] w-full">
        <div className="max-w-[327px] w-full space-y-[8px] mb-[24px]">
          <h1 className="text-[#111827] font-normal text-[24px] leading-[135%]">
            パスワードを新しく
          </h1>
          <p className="text-[#9CA3AF] font-normal text-[16px] leading-[150%]">
            安全で覚えやすい新しいパスワードを作成してください。
          </p>
        </div>

        <div className="mb-[24px]">
          <OTPInput value={otp} onChange={setOtp} />
        </div>

        <Formik
          initialValues={{ newPassword: "", confirmPassword: "" }}
          validate={(values) => {
            const errors: Record<string, string> = {};

            const passwordError = validatePassword(values.newPassword);
            if (passwordError) errors.newPassword = passwordError;

            if (values.newPassword !== values.confirmPassword) {
              errors.confirmPassword = "パスワードが一致しません";
            }

            return errors;
          }}
          onSubmit={(values: any) => {
            console.log("Password reset submitted:", {
              otp,
              newPassword: values.newPassword,
            });
          }}
        >
          {({
            handleSubmit,
            values,
            errors,
            touched,
            handleChange,
            isValid,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-[16px]  w-full ">
              <div className="relative w-full  ">
                <InputField
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  label="新しいパスワード"
                  placeholder="新しいパスワード"
                  icon={password}
                  filledIcon={passwordlFilled}
                  onChange={(e) => {
                    handleChange(e);
                    setHasStartedTyping(e.target.value.length > 0);
                  }}
                  value={values.newPassword}
                  error={touched.newPassword && errors.newPassword}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[12px] top-2/3  transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <Eye className="w-[20px] h-[18px] text-[#9CA3AF]" />
                  ) : (
                    <EyeOff className="w-[20px] h-[18px] text-[#9CA3AF]" />
                  )}
                </button>
              </div>

              <div className="relative ">
                <InputField
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  label="パスワード確認"
                  placeholder="パスワードを再入力"
                  icon={password}
                  filledIcon={passwordlFilled}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[12px] top-2/3  transform -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <Eye className="w-[20px] h-[18px] text-[#9CA3AF]" />
                  ) : (
                    <EyeOff className="w-[20px] h-[18px] text-[#9CA3AF]" />
                  )}
                </button>
              </div>

              <div className="mt-2 space-y-1 max-w-[327px]">
                <div
                  className={`flex items-center ${
                    values.newPassword.length >= 8
                      ? "text-[#147B72]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  {values.newPassword.length >= 8 ? (
                    <IonIcon src={TicK} className=" w-[16px] h-[16px]" />
                  ) : (
                    <IonIcon src={Cross} className=" w-[16px] h-[16px]" />
                  )}
                  <span className=" ml-[8px] text-[14px] font-normal leading-[140%]">
                    8文字以上で入力してください
                  </span>
                </div>
                <div
                  className={`flex items-center ${
                    /\d/.test(values.newPassword)
                      ? "text-[#147B72]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  {/\d/.test(values.newPassword) ? (
                    <IonIcon src={TicK} className=" w-[16px] h-[16px]" />
                  ) : (
                    <IonIcon src={Cross} className=" w-[16px] h-[16px]" />
                  )}
                  <span className="ml-[8px] text-[14px] font-normal leading-[140%]">
                    少なくとも1つの数字を含めてください
                  </span>
                </div>
                <div
                  className={`flex items-center ${
                    /[a-zA-Z]/.test(values.newPassword)
                      ? "text-[#147B72]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  {/[a-zA-Z]/.test(values.newPassword) ? (
                    <IonIcon src={TicK} className=" w-[16px] h-[16px]" />
                  ) : (
                    <IonIcon src={Cross} className=" w-[16px] h-[16px]" />
                  )}
                  <span className=" ml-[8px] text-[14px] font-normal leading-[140%]">
                    少なくとも1つの文字を含めてください
                  </span>
                </div>
              </div>

              <div className="mt-[24px]">
                {/* <Button
                  type="submit"
                  disabled={!otp || !isValid || otp.length < 5}
                  className="w-full"
                >
                  パスワードを更新
                </Button> */}
                <a href="/feedback">    パスワードを更新</a>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewPassword;
