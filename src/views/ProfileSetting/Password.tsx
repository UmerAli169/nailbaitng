import { Formik } from "formik";
import InputField from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import lockIcon from "../../assets/auth/password.svg";

const Password = () => {
  return (
    <div className="w-full max-w-[768px] relative mx-auto">
      <div className="w-full mt-[20px]">
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors: { [key: string]: string } = {};

            if (!values.oldPassword) {
              errors.oldPassword = "現在のパスワードを入力してください";
            }
            if (!values.newPassword) {
              errors.newPassword = "新しいパスワードを入力してください";
            } else if (values.newPassword.length < 6) {
              errors.newPassword = "6文字以上のパスワードを入力してください";
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = "新しいパスワードを再入力してください";
            } else if (values.confirmPassword !== values.newPassword) {
              errors.confirmPassword = "パスワードが一致しません";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log("Password Change Submitted:", values);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-[16px] mx-[26px]">
              <InputField
                name="oldPassword"
                type="password"
                label="現在のパスワード"
                placeholder="現在のパスワードを入力"
                icon={lockIcon}
                filledIcon={lockIcon}
              />

              <InputField
                name="newPassword"
                type="password"
                label="新しいパスワード"
                placeholder="新しいパスワードを入力"
                icon={lockIcon}
                filledIcon={lockIcon}
              />

              <InputField
                name="confirmPassword"
                type="password"
                label="新しいパスワード（確認）"
                placeholder="もう一度新しいパスワードを入力"
                icon={lockIcon}
                filledIcon={lockIcon}
              />

              <div className="w-full pt-[24px] flex justify-end">
                <Button type="submit" className="max-w-[140px] w-full">
                  保存する
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Password;
