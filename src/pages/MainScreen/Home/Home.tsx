import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import star from "../../../assets/main/home/start.svg";
import notification from "../../../assets/main/home/notivication.svg";
import logout from "../../../assets/main/home/logout.svg";
import BackImg from "../../../assets/main/home/backImg.svg";
import { useHistory } from "react-router";
import CalendarGraph from "../../../utils/cylinder"; // Import your CalendarGraph component
import SingleComponent from "../../../components/home/SingleComponent";
import VideoComponent from "../../../components/home/VideoComponent";
interface Assessment {
  points?: number;
  star?: number;
}

function Home() {
  const history = useHistory();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const availableHeight = window.innerHeight - 300;

  // Mock assessment data - replace with your actual data
  const [assessmentData, setAssessmentData] = useState<Assessment[][]>([
    [{ points: 12, star: 2 }, {}, {}, {}, { points: 15, star: 3 }, {}, {}],
    [{ points: 10, star: 2 }, { points: 5, star: 2 }, {}, {}, {}, {}, {}],
    [{ points: 10, star: 2 }, {}, {}, { points: 5, star: 3 }, {}, {}, {}],
    [{ points: 13, star: 1 }, { points: 7, star: 2 }, {}, {}],
  ]);
  const chapterData = {
    chapterTitle: "第6章 id=5-28p=(&(ELBRA)WBOO, EOWA)",
    styles: [
      {
        id: 1,
        title: "ニュースタイトル Lorem Ipsum is simply dummy text of ...",
        content: "YYYY年MM月DD日",
      },
      {
        id: 2,
        title: "ニュースタイトル Lorem Ipsum is simply dummy text of ...",
        content: "YYYY年MM月DD日",
      },
      {
        id: 3,
        title: "ニュースタイトル Lorem Ipsum is simply dummy text of ...",
        content: "YYYY年MM月DD日",
      },
    ],
    videos: [
      {
        id: 1,
        title: "ビデオタイトル1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        isJapanese: true,
      },
      {
        id: 2,
        title: "Video Title 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        isJapanese: false,
      },
      {
        id: 3,
        title: "ビデオタイトル3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        isJapanese: true,
      },
    ],
  };
  const handlePreviousMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };
  return (
    <>
      <div className="bg-[#199A8E] w-full relative max-w-[768px] mx-auto overflow-hidden  ">
        <IonIcon
          src={BackImg}
          name="star"
          className="w-[98px] h-[145px] absolute top-0 left-0 z-0"
        />

        <div className="relative z-10">
          <div className="flex justify-between w-full py-[14px] pl-[24px]">
            <div>
              <div className="font-normal leading-[130%] text-[#FFFFFF] text-[18px]">
                こんにちは、佐藤 洋子さん 👋
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
              <IonIcon src={logout} name="star" className="w-[25px] h-[25px]" />
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
      <div
        className="mt-[16px] px-6 pt-5 rounded-t-3xl max-w-[768px]   mx-auto overflow-y-auto"
        style={{ height: `${availableHeight}px` }}
      >
        <div>
          <div className="flex items-center justify-between mb-[10px]">
            <div className="text-[16px] text-teal-600 font-normal">{`${year}年${month}月`}</div>
            <div className="flex gap-2 items-center">
              <button onClick={handlePreviousMonth}>
                <LeftArrowIcon />
              </button>
              <button onClick={handleNextMonth}>
                <RightArrowIcon />
              </button>
            </div>
          </div>
          <CalendarGraph
            year={year}
            month={month}
            assessmentData={assessmentData}
          />{" "}
        </div>

        <div className="flex justify-between items-center  mt-[5px]">
          <span className="text-sm font-medium text-[#181A20]">お知らせ</span>
          <span
            onClick={() => history.push(`/news`)}
            className="text-sm text-[#3B82F6] cursor-pointer"
          >
            すべて表示
          </span>
        </div>

        <div className="border  mt-[12px] bg-[#FFFFFF] border-[#E0E0E0]  py-[15px] px-[13px] rounded-[5px]">
          {chapterData.styles.map((style: any, index: number) => (
            <SingleComponent
              key={index}
              title={style.title}
              content={style.content}
            />
          ))}
        </div>
        <div className="mt-[20px] ">
          <h1>エクササイズビデオ</h1>
        </div>
        <div>
          {chapterData.videos.map((video) => (
            <VideoComponent
              title="My Sample Video"
              description="This is a demo of the video player."
              videoUrl="https://youtu.be/DpMkfmzRL_k?si=XxkWbLaC8njYj4ME"
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
const LeftArrowIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1739_4594)">
        <path
          d="M15.5556 0.000976562L4.44444 0.000976562C1.98889 0.000976562 0 1.98986 0 4.44542L0 15.5565C0 18.0121 1.98889 20.001 4.44444 20.001L15.5556 20.001C18.0111 20.001 20 18.0121 20 15.5565L20 4.44542C20 1.98986 18.0111 0.000976562 15.5556 0.000976562Z"
          fill="#454545"
        />
        <rect
          width="1.11111"
          height="6.66667"
          rx="0.555556"
          transform="matrix(0.596253 0.802797 0.802797 -0.596253 6.66797 9.94434)"
          fill="white"
        />
        <rect
          width="1.11111"
          height="6.66667"
          rx="0.555556"
          transform="matrix(0.619806 -0.784755 -0.784755 -0.619806 11.8984 14.4443)"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1739_4594">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="matrix(1 0 0 -1 0 20)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const RightArrowIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1739_4590)">
        <path
          d="M4.44444 0.000976562L15.5556 0.000976562C18.0111 0.000976562 20 1.98986 20 4.44542L20 15.5565C20 18.0121 18.0111 20.001 15.5556 20.001L4.44444 20.001C1.98889 20.001 0 18.0121 0 15.5565L0 4.44542C0 1.98986 1.98889 0.000976562 4.44444 0.000976562Z"
          fill="#454545"
        />
        <rect
          x="13.332"
          y="9.94434"
          width="1.11111"
          height="6.66667"
          rx="0.555556"
          transform="rotate(126.602 13.332 9.94434)"
          fill="white"
        />
        <rect
          x="8.10156"
          y="14.4443"
          width="1.11111"
          height="6.66667"
          rx="0.555556"
          transform="rotate(-128.302 8.10156 14.4443)"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1739_4590">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="matrix(-1 0 0 -1 20 20)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
