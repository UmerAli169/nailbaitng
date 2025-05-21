// src/pages/NewsDetail.tsx

import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { data } from "../../../dummydata/new/news.json";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();

  const newsItem = data.news.find((item) => item._id === id);

  if (!newsItem) {
    return (
      <div className="text-center text-gray-500 mt-10">
        News article not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white p-6">
     <div className="flex items-center mb-[12px]">
        <h1 className="text-[20px] leading-[140%] text-[#111827] font-normal  text-center flex-grow ">
          News
        </h1>
      </div>

      <div className="bg-[#F9F9F9] rounded-[20px] border border-[#D4D4D8] px-[20px] py-[18px]">
        <h2 className="text-[16px] leading-[28px] font-normal text-[#181A20] mb-[5px]">
          {newsItem.title}
        </h2>
        <p className="text-[#B1B1B1]  text-[14px] leading-[20px] font-normal  mb-[8px]">
          {new Date(newsItem.postedAt).toLocaleDateString()}
        </p>
        <div className="text-[#717171] text-[14px] leading-[24px] font-normal">
          <div dangerouslySetInnerHTML={{ __html: newsItem.body }} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
