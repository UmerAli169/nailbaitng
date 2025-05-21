import React from "react";
import { useHistory } from "react-router-dom";
import { data } from "../../../dummydata/new/news.json";

const NewsPage = () => {
  const history = useHistory();

  const newsList = data?.news || [];

  return (
    <div className="flex flex-col h-full bg-white mx-[26px] my-[20px]">
      <div className="flex items-center mb-[12px]">
        <h1 className="text-[20px] leading-[140%] text-[#111827] font-normal  text-center flex-grow ">
          News
        </h1>
      </div>

      <div className="overflow-y-auto ">
        {newsList.length > 0 ? (
          newsList.map((item: any) => (
            <div
              key={item._id}
              className="mx-[15px] my-[13px] "
              onClick={() => history.push(`/tabs/news/${item._id}`)}
            >
              <h3 className="text-[14px] leading-[150%] text-[#181A20] font-normal">
                {item.body.slice(0,80)}...
              </h3>
              <p className="text-[14px] font-normal text-[#B1B1B1] mt-[5px] mb-[4px]">
                {new Date(item.postedAt).toLocaleDateString()}
              </p>
              <hr className="my-[16px] border-[#C4C4C4]" />
            </div>
          ))
        ) : (
          <p className="text-center p-4">No news available</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
