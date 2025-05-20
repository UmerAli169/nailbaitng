import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import Cylinder from "../../../assets/main/assesment/cylinder.svg";
import View from "../../../views/Assessment/View";
import Comparison from "../../../views/Assessment/Compare";
function ViewAssessment() {
  const [activeTab, setActiveTab] = useState<"view" | "comparison">("view");

  return (
    <div className="mx-auto w-full max-w-[768px]">
      <h1 className="text-center my-[20px] text-[#111827] leading-[140%] text-[20px] font-normal">
        評価入力
      </h1>

      <div className="  flex justify-between mx-[26px]  ">
        <div className="space-x-[10px] ">
          <button
            className={`flex-1 px-[10px] rounded-[3px]  text-[13px] font-normal leading-[24px] ${
              activeTab === "view"
                ? "bg-[#199A8E] text-[#FFFFFF] "
                : "bg-[#D3FFF2]"
            }`}
            onClick={() => setActiveTab("view")}
          >
            View Assessments
          </button>
          <button
            className={`flex-1 px-[10px] rounded-[3px]  text-[13px] font-normal leading-[24px] ${
              activeTab === "comparison"
                ? "bg-[#199A8E] text-[#FFFFFF] "
                : "bg-[#D3FFF2]"
            }`}
            onClick={() => setActiveTab("comparison")}
          >
            Comparison
          </button>
        </div>
        <div className=" my-auto">
          <IonIcon src={Cylinder} />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[768px] mx-[26px]">
        {activeTab === "view" ? (
          <View/>
        ) : (
          <div className="py-[15px]">
            <Comparison/>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewAssessment;
