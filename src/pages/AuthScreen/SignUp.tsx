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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  return (
    <div className="w-full max-w-[768px] relative  ">
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

      <div className="mt-[116px] ml-[24px] max-w-[278px] w-full space-y-[8px]">
        <h1 className="text-[#111827] font-normal text-[24px] leading-[135%]">
          会員登録
        </h1>
        <p className="text-[#9CA3AF] font-normal text-[16px] leading-[150%]">
          アカウントを作成して、すべてのサービスを楽しもう！
        </p>
      </div>

      <div className="w-full  mt-[14px] ">
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
            const isPasswordStrong =
              values.password.length >= 8 &&
              /\d/.test(values.password) &&
              /[a-zA-Z]/.test(values.password);

            return (
              <form onSubmit={handleSubmit} className="space-y-[16px] mx-[24px]">
                <InputField
                  name="username"
                  label="ニックネーム"
                  placeholder="ニックネーム"
                  icon={account}
                  filledIcon={accountFilled}
                />

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
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <Eye className="w-[24px] h-[24px] text-[#9CA3AF]" />
                      ) : (
                        <EyeOff className="w-[24px] h-[24px] text-[#9CA3AF]" />
                      )}
                    </button>
                  }
                />

                {values.password.length > 0 && !isPasswordStrong && (
                  <div className="relative z-10">
                    <PasswordChecklist password={values.password} />
                  </div>
                )}

                <div className="flex items-center my-[16px] space-x-2">
                  <img
                    src={isPasswordStrong ? SuggestionIcon : CheckIcon}
                    className="w-[16px] h-[16px]"
                    alt="status"
                  />
                  <p className="text-[14px]  font-normal leading-[140%] text-[#9CA3AF]">
                    {isPasswordStrong
                      ? "いいね！とても強力なパスワードです！"
                      : "パスワードの提案"}
                  </p>
                </div>

                <Checkbox
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  label={
                    <div className="text-[14px] font-normal leading-[140%] text-[#9CA3AF]">
                      私は会社の{" "}
                      <a href="/" className="underline text-[#199A8E]">
                        利用規約
                      </a>{" "}
                      と{" "}
                      <a href="/" className="underline text-[#199A8E]">
                        プライバシーポリシー
                      </a>
                      に同意します。
                    </div>
                  }
                />
                <div className="space-y-[24px] mt-[24px]">
                  <Button
                    type="submit"
                    disabled={
                      !values.username ||
                      !values.email ||
                      !values.password ||
                      !isPasswordStrong ||
                      !agree
                    }
                  >
                    会員登録
                  </Button>

                  <div className="text-[14px] font-normal leading-[140%] text-[#9CA3AF] text-center">
                    アカウントをお持ちですか？{" "}
                    <a href="/" className="underline text-[#199A8E]">
                      ログイン
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

export default SignUp;
