import { IonIcon } from "@ionic/react";
import SignUP from "../../assets/auth/SignUP.svg";
import BackArrow from "../../assets/shared/backArrow.svg";
import { Formik } from "formik";
import Button from "../../components/shared/Button";
import InputField from "../../components/shared/Input";
import email from "../../assets/auth/email.svg";
import passwordFilled from "../../assets/auth/passwordFilled.svg";

function ForgotPassword() {
  return (
    <div className="w-full max-w-[768px] relative min-h-screen ">
      <IonIcon
        src={SignUP}
        className="min-w-[280px] min-h-[376px] absolute top-[-40px] right-0"
      />
      <IonIcon
        src={BackArrow}
        className="min-w-[40px] min-h-[40px] absolute top-[60px] left-[16px]"
      />
      
      <div className="pt-[116px] px-[24px] w-full  mx-auto"> 
        <div className="max-w-[327px] w-full space-y-[8px] mb-[24px]">
          <h1 className="text-[#111827] font-normal text-[24px] leading-[135%]">
            パスワードをリセット
          </h1>
          <p className="text-[#9CA3AF] font-normal text-[16px] leading-[150%]">
            メールアドレスを入力してください。確認コードを送信します。
          </p>
        </div>

        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors: { [key: string]: string } = {};
            if (!values.email) {
              errors.email = "必須項目です";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "有効なメールアドレスを入力してください";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log("Reset password request:", values);
          }}
        >
          {({ handleSubmit, values, isValid }) => (
            <form onSubmit={handleSubmit} >
              <InputField
                name="email"
                type="email"
                label="メール"
                placeholder="メールアドレス"
                icon={email}
                filledIcon={passwordFilled}
              />

              <div className="mt-[416px]   mx-auto w-full ">
                <Button
                  type="submit"
                  disabled={!values.email || !isValid}
                  className="w-full"
                >
                  確認コードを送信
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ForgotPassword;