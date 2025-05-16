
import React from "react";

interface SingleComponentProps {
  title: string;
  content: string;
}

const SingleComponent: React.FC<SingleComponentProps> = ({ title, content }) => {
  return (
    <div className="flex  flex-col px-[10px] border-b last:border-b-0 first:mt-0 last:mb-0 ">
      <h1 className="text-[14px] font-normal text-[#181A20] leading-[100%] mt-[16px] ">
        {title}
      </h1>
      <p className="text-[14px] font-normal text-[#B1B1B1] leading-[20px] mt-[5px] mb-[16px] ">
        {content}
      </p>
    </div>
  );
};

export default SingleComponent;
