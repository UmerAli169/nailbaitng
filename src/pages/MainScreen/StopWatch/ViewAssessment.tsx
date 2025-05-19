import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import Cylinder from "../../../assets/main/assesment/cylinder.svg";
import Button from "../../../components/shared/Button";

function ViewAssessment() {
  const [activeTab, setActiveTab] = useState<"view" | "comparison">("view");
  const [selectedImages, setSelectedImages] = useState<{
    [key: number]: string | null;
  }>({ 1: null, 2: null });
  const [comparisonResult, setComparisonResult] = useState<string | null>(null);

  // Sample assessment data
  const assessments = [
    {
      date: "Today",
      bfrb: 2,
      exercise: 2,
      isToday: true,
      imageUrl: "url1.jpg",
    },
    { date: "Yesterday", bfrb: 2, exercise: 2, imageUrl: "url2.jpg" },
    { date: "13-01-2025", bfrb: 2, exercise: 2, imageUrl: "url3.jpg" },
    { date: "12-01-2025", bfrb: 2, exercise: 2, imageUrl: "url4.jpg" },
    { date: "11-01-2025", bfrb: null, exercise: null, imageUrl: null },
  ];

  const handleImageSelect = (slot: number) => {
    // In a real app, you would open an image picker here
    // For demo, we'll just cycle through available images
    const availableImages = assessments
      .filter((a) => a.imageUrl)
      .map((a) => a.imageUrl);
    if (availableImages.length > 0) {
      const currentIndex = availableImages.indexOf(selectedImages[slot]);
      const nextIndex = (currentIndex + 1) % availableImages.length;
      setSelectedImages({
        ...selectedImages,
        [slot]: availableImages[nextIndex],
      });
    }
  };

  const handleCompare = () => {
    if (selectedImages[1] && selectedImages[2]) {
      // In a real app, you would perform actual comparison logic here
      setComparisonResult(
        `Comparing ${selectedImages[1]} and ${selectedImages[2]}`
      );
    } else {
      setComparisonResult("Please select two images to compare");
    }
  };
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

      {/* Assessment List */}

      <div className="mx-auto w-full max-w-[768px] mx-[26px]">
        {activeTab === "view" ? (
          <div className="p-4">
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
                      src="/public/assignment.jpg"
                      className="w-[69px] h-[69px] object-cover rounded-[10px]"
                      alt="Assessment"
                    />
                  </div>

                  <div className="flex-grow   ">
                    <div className="mb-2">
                      <span className="text-[14px] font-medium text-gray-700 w-full ">
                        BFRB:
                      </span>
                      <span className="ml-[38px] text-[14px] font-semibold bg-[#199A8E]  text-[#FFFFFF] px-[35px] py-[5px] rounded-full">
                        2/5
                      </span>
                    </div>
                    <div>
                      <span className="text-[14px] font-medium text-gray-700 w-[100px]">
                        Exercise:
                      </span>
                      <span className="ml-[22px] text-[14px] font-semibold bg-[#199A8E]  text-[#FFFFFF] px-[35px] py-[5px] rounded-full">
                        2/3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4">
            {/* <h2 className="text-[16px] font-medium text-[#111827] mb-4">
              Comparison View
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {[1, 2].map((slot) => (
                <div
                  key={slot}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex items-center justify-center"
                  onClick={() => handleImageSelect(slot)}
                >
                  {selectedImages[slot] ? (
                    <img
                      src={selectedImages[slot]}
                      alt={`Selected ${slot}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">Select Image {slot}</span>
                  )}
                </div>
              ))}
            </div>

            <button
              className={`w-full py-2 rounded-lg font-medium ${
                selectedImages[1] && selectedImages[2]
                  ? "bg-teal-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
              onClick={handleCompare}
              disabled={!selectedImages[1] || !selectedImages[2]}
            >
              Compare Selected
            </button>

            <div className="mt-6 p-4 bg-[#F3F3F3] rounded-lg">
              <h3 className="text-[14px] font-medium text-[#111827] mb-2">
                Comparison Results
              </h3>
              {comparisonResult ? (
                <p className="text-[12px] text-gray-500">{comparisonResult}</p>
              ) : (
                <p className="text-[12px] text-gray-500">
                  {selectedImages[1] && selectedImages[2]
                    ? "Click 'Compare Selected' to view results"
                    : "Select two images to compare"}
                </p>
              )}
            </div> */}
          </div>
        )}
      </div>

      {/* <div className="p-4 border-t border-gray-200">
        <h3 className="text-[14px] font-medium text-[#111827] mb-2">
          Views Assessment
        </h3>
        <div className="text-center text-gray-500">
          <span className="text-[14px]">13/</span>
          <span className="text-[14px]">10/1</span>
          <span className="text-[14px]">7/1/2</span>
          <span className="text-[14px]">4/1/2</span>
        </div>
      </div> */}
    </div>
  );
}

export default ViewAssessment;
