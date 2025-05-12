import React from "react";
import { IonContent, IonIcon } from "@ionic/react";
import Lines from "../../assets/shared/Onboarding/lines.svg";
import Dshape from "../../assets/shared/Onboarding/dShape.svg";
import a1 from "../../assets/shared/Onboarding/onboardingB/a.svg";
import b1 from "../../assets/shared/Onboarding/onboardingB/b.svg";
import c1 from "../../assets/shared/Onboarding/onboardingB/c.svg";
import d1 from "../../assets/shared/Onboarding/onboardingB/d.svg";
import e1 from "../../assets/shared/Onboarding/onboardingB/e.svg";
import star from "../../assets/shared/Onboarding/star.svg";
import sunshin from "../../assets/shared/Onboarding/sunshin.svg";
import Skip from "../../assets/shared/Onboarding/onboardingB/skip.svg";

function OnBordinga() {
  return (
    <div>
      <div className="bg-[#1D968B] h-full w-screen rounded-b-[63px]  min-h-[621px] max-w-[768px]  relative">
        <IonIcon src={Lines} className="min-w-[188px] min-h-[198px] " />
        <IonIcon
          src={Dshape}
          className="min-w-[348px]   min-h-[293px] absolute right-0"
        />
        <IonIcon
          src={a1}
          className=" min-w-[90px] min-h-[111px] absolute top-[90px] left-[41px]"
        />
        <IonIcon
          src={star}
          className="max-w-[48] max-h-[48] min-w-[38px] min-h-[38px] absolute top-[27px] right-[111px]"
        />
        <IonIcon
          src={sunshin}
          className="max-w-[48] max-h-[48] min-w-[38px] min-h-[38px] absolute top-[241px] left-[41px]"
        />
        <IonIcon
          src={b1}
          className="max-w-[238] max-h-[238] min-w-[138px] min-h-[138px] absolute top-[151px] right-[51px]"
        />
        <IonIcon
          src={c1}
          className=" min-w-[143px] min-h-[109px] absolute top-[321px] left-[21px]"
        />{" "}
        <IonIcon
          src={star}
          className="h-[38px] w-[38px] absolute top-[341px] right-[171px]"
        />
        <IonIcon
          src={d1}
          className=" min-w-[143px] min-h-[109px] absolute top-[381px] right-[21px]"
        />
        <IonIcon
          src={e1}
          className=" min-w-[119px] min-h-[115px] absolute top-[461px] left-[21px]"
        />
        <IonIcon
          src={sunshin}
          className="h-[38px] w-[38px] absolute bottom-[61px] right-[171px]"
        />
      </div>

      <div className="flex items-center justify-between px-[27px] mt-[23px]  ">
        <p className="text-[16px] font-normal text-[#636466] leading-[130%]">
          アプリで、あなたの困りごとを軽減するエクササイズを学習できます{" "}
        </p>
        <div className="flex items-center justify-center">
          <IonIcon src={Skip} className="w-[50px] h-[75px] pl-[10px] " />
        </div>
      </div>
      <p className="text-gray-700 text-[12px] w-full text-center font-semibold underline mt-[20px]">
スキップ      </p>
    </div>
  );
}

export default OnBordinga;
