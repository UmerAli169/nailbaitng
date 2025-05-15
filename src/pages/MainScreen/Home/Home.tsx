import { IonIcon } from "@ionic/react";
import React from "react";
import star from "../../../assets/main/home/start.svg";
import notification from "../../../assets/main/home/notivication.svg";
import logout from "../../../assets/main/home/logout.svg";
import BackImg from "../../../assets/main/home/backImg.svg";

function Home() {
  return (
    <div className="bg-[#199A8E] w-full relative max-w-[768px] mx-auto overflow-hidden">
      <IonIcon 
        src={BackImg} 
        name="star" 
        className="w-[98px] h-[145px] absolute top-0 left-0 z-0" 
      />
      
      <div className="relative z-10">
        <div className="flex justify-between w-full py-[14px] pl-[24px]">
          <div>
            <div className="font-normal leading-[130%] text-[#FFFFFF] text-[18px]">
              こんにちは、さん 👋
            </div>
            <div className="font-normal leading-[160%] text-[#FFFFFF] text-[12px]">
              Welcome back to Nail app!
            </div>
          </div>
          <div className="pr-[26px] gap-[20px] flex justify-center">
            <IonIcon
              src={notification}
              name="star"
              className="w-[25px] h-[25px]"
            />
            <IonIcon
              src={logout}
              name="star"
              className="w-[25px] h-[25px]"
            />
          </div>
        </div>
        <div className="text-start pl-[24px] pb-[25px] text-[#FFFFFF] flex flex-col">
          <div className="font-normal leading-[160%] text-[#FFFFFF] text-[24px]">
            You are doing great{" "}
            <IonIcon src={star} name="star" className="w-[21px] h-[16px]" />
          </div>
          <div>
            <span className="leading-[20%] text-[#FFFFFF] bg-[#126E66] text-[14px] px-[5px] py-[3px] rounded-[15px] max-w-[91px] w-full">
              1,567 Points
            </span>{" "}
            <span>今月</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;