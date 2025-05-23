import { IonIcon } from "@ionic/react";
import SignUP from "../../assets/auth/SignUP.svg";
import BackArrow from "../../assets/shared/backArrow.svg";
import Feedback from "../../assets/shared/feedback.svg";
import Button from "../../components/shared/Button";

function SignUp() {
  return (
    <div className="w-full max-w-[768px] relative min-h-screen mx-auto" >
      <IonIcon
        src={SignUP}
        className="min-w-[280px] min-h-[376px] absolute top-[-40px] right-0"
      />
      <IonIcon
        src={BackArrow}
        className="min-w-[40px] min-h-[40px] absolute top-[60px] left-[16px]"
      />

      <div className="pt-[160px] px-[24px] w-full flex flex-col items-center">
        <div className="w-full  flex flex-col items-center space-y-[20px]">
          <IonIcon src={Feedback} className="w-[124px] h-[124px] mb-[20px]" />

          <div className="w-full space-y-[8px] text-center">
            <h1 className="text-[#111827] font-normal text-[24px] leading-[135%]">
              アカウントが作成されました
            </h1>
            <p className="text-[#9CA3AF] font-normal text-[16px] leading-[150%] mx-[8px]">
              アカウントが正常に作成されました。メールアドレスとパスワードで再度ログインできます。
            </p>
          </div>
                    
          <Button className="w-full mt-[16px]">
            ログイン
          </Button>

          <a href="/signin"> パスワードを更新</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
