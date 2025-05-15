import React from "react";
import { IonIcon } from "@ionic/react";
import Lines from "../../assets/shared/Onboarding/lines.svg";
import Dshape from "../../assets/shared/Onboarding/dShape.svg";

import a1 from "../../assets/shared/Onboarding/onboardingA/a.svg";
import b1 from "../../assets/shared/Onboarding/onboardingA/b.svg";
import c1 from "../../assets/shared/Onboarding/onboardingA/c.svg";
import star from "../../assets/shared/Onboarding/star.svg";
import sunshin from "../../assets/shared/Onboarding/sunshin.svg";

import Button from "../../components/shared/Button";

function OnBordinga() {
  return (
    <div className="mx-auto w-full max-w-[768px]">
      <div className="bg-[#1D968B] h-full w-screen rounded-b-[63px]  min-h-[621px]     relative">
        <IonIcon src={Lines} className="min-w-[188px] min-h-[198px] " />
        <IonIcon
          src={Dshape}
          className="min-w-[348px]   min-h-[293px] absolute right-0"
        />
        <IonIcon
          src={a1}
          className="] min-w-[138px] min-h-[138px] absolute top-[57px] left-[29px]"
        />
        <IonIcon
          src={star}
          className="max-w-[48] max-h-[48] min-w-[38px] min-h-[38px] absolute top-[117px] right-[21px]"
        />
        <IonIcon
          src={star}
          className="max-w-[48] max-h-[48] min-w-[38px] min-h-[38px] absolute top-[351px] left-[59px]"
        />
        <IonIcon
          src={b1}
          className="w-full max-w-[222px] max-h-[222px] h-full absolute top-[180px] right-[21px]"
        />
        <IonIcon
          src={c1}
          className="  max-w-[222px] max-h-[222px] w-full h-full absolute top-[371px] left-[21px]"
        />{" "}
        <IonIcon
          src={sunshin}
          className="h-[38px] w-[38px] absolute top-[441px] right-[51px]"
        />
      </div>
      <p className="text-[16px] font-normal text-[#636466] mt-[23px] px-[21px]    leading-[130%]">
        爪噛み、抜毛、皮膚むしり、唇を噛む等の癖がやめられず、困っている方へ
      </p>
      <div className=" mt-[59px] mb-[23px] mx-[21px]  mx-[23px]">
        <Button type="submit">次のページへ</Button>
      </div>
    </div>
  );
}

export default OnBordinga;
