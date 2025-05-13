import { useState } from "react";
import { Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";

import SignUP from "../../assets/auth/SignUP.svg";
import BackArrow from "../../assets/shared/backArrow.svg";
import account from "../../assets/auth/account.svg";
import email from "../../assets/auth/email.svg";
import password from "../../assets/auth/password.svg";
import accountFilled from "../../assets/auth/accountFilled.svg";
import passwordFilled from "../../assets/auth/passwordFilled.svg";
import passwordlFilled from "../../assets/auth/filledPassword.svg";
import SuggestionIcon from "../../assets/shared/SuggestionIcon.svg";
import CheckIcon from "../../assets/shared/checkIcon.svg";

import InputField from "../../components/shared/Input";
import PasswordChecklist from "../../components/shared/PasswordCheck";
import Checkbox from "../../components/shared/Checkbox";
import Button from "../../components/shared/Button";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

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

      <div className="mt-[116px] ml-[24px] max-w-[278px] w-full space-y-[11px]">
        <h1 className="text-[#111827] font-normal text-[24px] leading-[135%]">
          おかえりなさい
        </h1>
        <p className="text-[#9CA3AF] font-normal text-[16px] leading-[150%]">
          アカウントにログインしてください
        </p>
      </div>

      <div className="w-full  mt-[32px] ">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validate={(values) => {
            const errors: { [key: string]: string } = {};
            if (!values.username) errors.username = "Required";
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            const lengthValid = values.password.length >= 8;
            const hasNumber = /\d/.test(values.password);
            const hasLetter = /[a-zA-Z]/.test(values.password);
            if (!lengthValid || !hasNumber || !hasLetter) {
              errors.password = "パスワード要件をすべて満たしてください。";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log("Register:", values);
          }}
        >
          {({ handleSubmit, setFieldValue, values }) => {
            return (
              <form
                onSubmit={handleSubmit}
                className="space-y-[16px] mx-[24px] "
              >
                <InputField
                  name="email"
                  type="email"
                  label="メール"
                  placeholder="メールアドレス"
                  icon={email}
                  filledIcon={passwordFilled}
                />

                <InputField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="パスワード"
                  placeholder="パスワード"
                  icon={password}
                  filledIcon={passwordlFilled}
                  onChange={(e) => {
                    setFieldValue("password", e.target.value);
                    if (!passwordTouched) setPasswordTouched(true);
                  }}
                  iconRight={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[12px] top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <Eye className="w-[24px] h-[24px] text-[#9CA3AF]" />
                      ) : (
                        <EyeOff className="w-[24px] h-[24px] text-[#9CA3AF]" />
                      )}
                    </button>
                  }
                />

                <div className="text-end">
                  <a
                    href="/forgot-password"
                    className="text-[14px] font-normal leading-[140%] text-[#199A8E] mt-[16px]"
                  >
                    パスワードをお忘れですか？
                  </a>
                </div>

                <div className="space-y-[24px] mt-[24px]">
                  <Button
                    type="submit"
                    disabled={!values.email || !values.password}
                  >
                    ログイン
                  </Button>

                  <div className="text-[14px] font-normal leading-[140%] text-[#9CA3AF] text-center">
                    アカウントをお持ちでないですか?
                    <a href="/signup" className="underline text-[#199A8E]">
                      会員登録
                    </a>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
