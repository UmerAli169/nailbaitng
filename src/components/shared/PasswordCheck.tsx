import { Check, X } from "lucide-react";
import TicK from "../../assets/auth/passwordTick.svg";
import Cross from "../../assets/auth/passwordCross.svg";
import { IonIcon } from "@ionic/react";

interface Props {
  password: string;
}

const PasswordChecklist = ({ password }: Props) => {
  const checks = [
    {
      label: "8文字以上で入力してください。",
      valid: password.length >= 8,
    },
    {
      label: "少なくとも1つの数字（1〜9）を含めてください。",
      valid: /\d/.test(password),
    },
    {
      label: "小文字か大文字を少なくとも1文字含めてください。",
      valid: /[a-zA-Z]/.test(password),
    },
  ];

  const allValid = checks.every((c) => c.valid);

  if (allValid) return null;

  return (
    <div className="   bg-[#ffffff] rounded-xl p-[10px] space-y-[8px] shadow-[0_4px_6px_0_#D3FFF2]">
      {checks.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-[11px] text-[14px] font-normal leading-[140%]"
        >
          {item.valid ? (
            <IonIcon src={TicK} className=" w-[16px] h-[16px]" />
          ) : (
            <IonIcon src={Cross} className=" w-[16px] h-[16px]" />
          )}
          <span
            className={`${item.valid ? "text-green-600" : "text-gray-600"}`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PasswordChecklist;
