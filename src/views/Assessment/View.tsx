import React from "react";
import start from "../../assets/main/assesment/star.svg";
import { IonIcon } from "@ionic/react";

function View() {
  const assessments = [
    {
      date: "Today",
      bfrb: 2,
      exercise: 2,
      isToday: true,
      imageUrl: "/assignment.jpg",
    },
    { date: "Yesterday", bfrb: 2, exercise: 2, imageUrl: "/assignment.jpg" },
    { date: "13-01-2025", bfrb: 2, exercise: 1, imageUrl: "/assignment.jpg" },
    { date: "12-01-2025", bfrb: 2, exercise: 3, imageUrl: "/assignment.jpg" },
    { date: "11-01-2025", bfrb: null, exercise: null, imageUrl: null },
  ];

  return (
    <div className="p-4 ">
      {assessments.map((assessment, index) => (
        <div
          key={index}
          className={`p-[20px] mb-[15px] bg-[#F3F3F3] text-[#000000] rounded-[5px] ${assessment.isToday}`}
        >
          <h3 className="text-[14px] font-medium text-[#101010] mb-[10px]">
            {assessment.date}
          </h3>

          <div className="flex items-start gap-[13px]">
            <div className="flex-shrink-0">
              <img
                src={
                  assessment.imageUrl ? assessment.imageUrl : "/assignment.jpg"
                }
                className="w-[69px] h-[69px] object-cover rounded-[10px]"
                alt="Assessment"
              />
            </div>

            <div className="flex-grow">
              <div className="mb-[14px] flex items-center gap-[6px]">
                <span className="text-[13px] font-normal text-[#000000] w-[52px]">
                  BFRB:
                </span>
                {assessment.bfrb !== null ? (
                  <span className="text-[12px] font-normal bg-[#199A8E] text-[#FFFFFF] px-[25px] py-[1px] rounded-[10px]  w-[91px]">
                    {assessment.bfrb}/5
                  </span>
                ) : (
                  <span className="text-[13px] font-normal text-[#000000] w-[52px]">
                    Not completed
                  </span>
                )}
              </div>

              <div className="flex items-center gap-[6px]">
                <span className="text-[13px] font-normal text-[#000000] w-[52px]">
                  Exercise:
                </span>
                {assessment.exercise !== null ? (
                  <span className="text-[12px] font-normal bg-[#199A8E] text-[#FFFFFF] px-[25px] py-[1px] rounded-[10px] flex items-center gap-2  w-[91px]">
                    {assessment.exercise}/3
                    <span className="flex">
                      {[...Array(assessment.exercise)].map((_, i) => (
                        <IonIcon
                          key={i}
                          src={start}
                          className="w-[10px] h-[10px]"
                        />
                      ))}
                    </span>
                  </span>
                ) : (
                  <span className="text-[14px] text-gray-400">
                    Not completed
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default View;
