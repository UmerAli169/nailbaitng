import React from "react";
import YouTube from "react-youtube";

interface Props {
  title: string;
  description: string;
  videoUrl: string;
}

const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com.*(?:\?|&)v=)([^&]+)/);
  return match ? match[1] : null;
};

const VideoComponent: React.FC<Props> = ({ title, description, videoUrl }) => {
  const videoId = getYouTubeId(videoUrl);

  return (
    <div className=" py[16px]">
      {videoId ? (
        <div className=" pt-[15px]">
          <YouTube videoId={videoId} opts={{ width: "100%", height: "215" }} />
          <h3 className="text-[16px] font-normal text-[#101010] leading-[130%] mt-[10px]">
            {title}
          </h3>
          <p className="text-[12px] font-normal leading-[160%] text-[#101010] ">
            {description}
          </p>
        </div>
      ) : (
        <p className="text-red-500">Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default VideoComponent;
