import React from "react";
import { IonIcon } from "@ionic/react";
import Lines from "../../assets/shared/Onboarding/lines.svg";
import Dshape from "../../assets/shared/Onboarding/dShape.svg";

import a1 from "../../assets/shared/Onboarding/onboardingD/a.svg";

import star from "../../assets/shared/Onboarding/star.svg";
import sunshin from "../../assets/shared/Onboarding/sunshin.svg";

import Button from "../../components/shared/Button";

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
          className="w-[307px] h-[277px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <p className="text-[16px] font-normal text-[#636466] mt-[23px] px-[27px] leading-[130%] ">
        症状の改善度を点数で記録し可視化できます
      </p>
      <div className=" mt-[55px] mb-[14px] mx-[17px]">
        <Button type="submit">アプリを開始する</Button>
      </div>
    </div>
  );
}

export default OnBordinga;
