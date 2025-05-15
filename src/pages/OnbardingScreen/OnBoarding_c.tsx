import React from "react";
import { IonIcon } from "@ionic/react";
import Lines from "../../assets/shared/Onboarding/lines.svg";
import Dshape from "../../assets/shared/Onboarding/dShape.svg";

import a1 from "../../assets/shared/Onboarding/onboardingC/a.svg";

import star from "../../assets/shared/Onboarding/star.svg";
import Skip from "../../assets/shared/Onboarding/onboardingC/skip.svg";

function OnBordinga() {
  return (
    <div>
      <div className="bg-[#1D968B] h-full rounded-b-[63px]  max-w-[768px] min-h-[621px] mx-auto  relative">
        <IonIcon src={Lines} className="min-w-[188px] min-h-[198px] " />
        <IonIcon
          src={Dshape}
          className="min-w-[348px]   min-h-[293px] absolute right-0"
        />

        <IonIcon
          src={a1}
          className="w-[375px] h-[303px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <IonIcon
          src={star}
          className="max-w-[48] max-h-[48] min-w-[38px] min-h-[38px] absolute bottom-[87px] right-[21px]"
        />
      </div>

      <div className="flex items-center justify-between  mx-auto max-w-[768px] px-[27px] mt-[23px]  ">
        <p className="text-[16px] font-normal text-[#636466] leading-[130%]">
          アプリで、あなたの困りごとを軽減するエクササイズを学習できます
        </p>
        <div className="flex items-center justify-center">
          <IonIcon src={Skip} className="w-[50px] h-[75px] pl-[10px]" />
        </div>
      </div>
      <p className="text-gray-700 text-[12px] w-full text-center font-semibold underline mt-[20px]">
        スキップ
      </p>
    </div>
  );
}

export default OnBordinga;
