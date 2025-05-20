
import React, { useState, FormEvent, ChangeEvent } from "react";
import CircleCheckbox from "../../../components/asessmentScreen/CircleCheckbox";
import StarRatingButton from "../../../components/asessmentScreen/StarRatingItem";
import ProgressImageUpload from "../../../components/asessmentScreen/ProgressImageUpload";

const MAX_CHARS = 150;

const Assignment: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [text, setText] = useState<string>("");

  const handleChangeCheckbox = (value: number) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_CHARS) {
      setText(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Checkboxes:", selectedValues);
    console.log("Star rating:", rating);
    console.log("Image preview URL:", previewUrl);
    console.log("Free text:", text);
    // TODO: call your API here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[768px] px-[20px] overflow-y-auto max-h-[90vh]"
    >
      <h1 className="text-center   text-[#111827] leading-[140%] text-[20px] font-normal">
        評価入力
      </h1>

      <div className="p-[10px] bg-[#F3F3F3]  w-full mx-auto mb-[20px]">
        <p className="mb-[12px] text-[14px] font-normal leading-[22px] text-[#111827]">
          What is the severity of today’s physically focused repetitive
          behaviors (skin plucking, nail biting, hair pulling, etc.)? Please
          rate 0–5.
        </p>
        <div
          className="relative h-6 rounded-full mb-[9px] overflow-hidden"
          style={{
            background: "linear-gradient(to right, #1D963F, #FF7100, #FF0000)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-between px-2 text-white text-[10px]">
            <span>Very Little</span>
            <span>Very Severe</span>
          </div>
        </div>
        <div className="flex justify-between">
          {[0, 1, 2, 3, 4, 5].map((v) => (
            <CircleCheckbox
              key={v}
              value={v}
              checked={selectedValues.includes(v)}
              onChange={handleChangeCheckbox}
            />
          ))}
        </div>
      </div>

      <div className="p-[10px] bg-[#F3F3F3]  w-full mx-auto mb-[20px]">
        <h2 className="mb-[9px] text-[14px] leading-[22px] text-[#111827]">
          Please rate your Today’s Exercise
        </h2>
        <div
          className="relative h-6 rounded-full mb-[12px] overflow-hidden"
          style={{
            background: "linear-gradient(to right, #FF0000, #FF7100, #1D963F)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] text-white font-medium">
            <span>Very Bad</span>
            <span>Good</span>
          </div>
        </div>
        <div className="grid grid-cols-4 border-[2px] border-[#A0A0A0] rounded-[4px] mb-[10px]">
          {[0, 1, 2, 3].map((val, i) => (
            <StarRatingButton
              key={val}
              value={val}
              selectedValue={rating}
              onSelect={setRating}
              className={`
                border-r border-[#A0A0A0]
                rounded-none
                ${i === 3 ? "border-r-0" : ""}
              `}
            />
          ))}
        </div>
      </div>

      <div className="p-[10px] bg-[#F3F3F3] w-full mx-auto mb-[20px]">
        <h2 className="mb-[9px] text-[14px] leading-[22px] text-[#111827]">
          Please upload the image of your Today’s Progress
        </h2>
        <ProgressImageUpload onPreviewChange={setPreviewUrl} />
      </div>
      <div className="mt-[10px]">
        <label
          htmlFor="progressText"
          className="block text-[14px] font-normal text-[#111827] mb-[5px]"
        >
          フリーテキスト（150文字以内）
        </label>
        <textarea
          id="progressText"
          value={text}
          onChange={handleTextChange}
          placeholder="本日の症状などの感想を任意で150文字以内でご記入ください。"
          maxLength={MAX_CHARS}
          rows={4}
          className="w-full border border-[#E5E7EB text-[#111827] rounded-[12px] p-[8px] focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="text-left text-[14px] text-[#111827] mt-[8px]">
          現在の文字数: {text.length}/{MAX_CHARS}
        </div>
      </div>
      <div className="text-center  w-full mt-[20px]">
        <button
          type="submit"
          className=" w-[334px] py-[10px] bg-teal-600 text-white rounded-md disabled:opacity-50"
          disabled={
            selectedValues.length === 0 &&
            rating === 0 &&
            !previewUrl &&
            text.trim() === ""
          }
        >
          Submit Assessment
        </button>
      </div>
    </form>
  );
};

export default Assignment;
