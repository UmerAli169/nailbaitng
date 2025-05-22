import React, { useState, useEffect, useRef } from "react";

const TimeoutTimer = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(3);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [initialSeconds, setInitialSeconds] = useState(0);

  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsTimeUp(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, secondsLeft]);

  const handleStart = () => {
    if (selectedMinutes > 0) {
      const totalSeconds = selectedMinutes * 60;
      setSecondsLeft(totalSeconds);
      setInitialSeconds(totalSeconds);
      setIsRunning(true);
      setIsTimeUp(false);
    }
  };

  const handleCancel = () => {
    setIsRunning(false);
    setSecondsLeft(0);
    setSelectedMinutes(3);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleGoBack = () => {
    setIsTimeUp(false);
    setIsRunning(false);
    setSecondsLeft(0);
    setSelectedMinutes(3);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const circumference = 2 * Math.PI * 90;
  const progress = initialSeconds > 0 ? secondsLeft / initialSeconds : 0;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-[26px]  bg-gray-100 font-inter text-gray-800">
      <h1 className="text-center mt-[16px] text-[#111827] leading-[140%] text-[20px] font-normal">
        タイマーで時間を決めてエクササイズしましょう
      </h1>

      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md  ">
        {!isRunning && !isTimeUp && (
          <>
            <div>
              <h2 className="text-[16px] font-normal text-[#101010] mb-[24px] p-[20px]  border-b">
                Set Your Timer
              </h2>
              <div className="flex flex-col items-center  text-[28px] font-normal leading-[100%] mb-[100px] ">
                {[5, 4, 3, 2, 1].map((min) => (
                  <div
                    key={min}
                    className={` p-[13px] cursor-pointer transition-all duration-200
                              ${
                                selectedMinutes === min
                                  ? "text-[#101010] border-[#199A8E] border rounded-[12px] "
                                  : "text-gray-300"
                              }`}
                    onClick={() => setSelectedMinutes(min)}
                  >
                    {min.toString().padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleStart}
              className="w-full max-w-[322px] bg-[#199A8E] text-white text-[12px] font-normal py-[16px] rounded-[12px] shadow-md
                         hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Start
            </button>
          </>
        )}

        {isRunning && (
          <>
            <div className="relative w-[300px] h-[300px] flex items-center justify-center mb-[175px]">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="8"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 linear"
                />
              </svg>
              <div className="absolute text-[36px] font-normal text-[#101010]">
                {formatTime(secondsLeft)}
              </div>
            </div>
            <button
              onClick={handleCancel}
              className="w-full max-w-[322px] bg-[#D3FFF2] text-white text-[12px] font-normal py-[16px] rounded-[12px] shadow-md
                         hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Cancel
            </button>
          </>
        )}

        {isTimeUp && (
          <>
            <h2 className="text-[20px] font-normal text-[#111827]    ">
              TIME'S UP!
            </h2>
            <p className="text-[16px] font-normal text-[#111827] mb-[80px] ">
              Great Job! Ready To Do It Again?
            </p>
            <div className="relative w-[250px] h-[250px] flex items-center justify-center mb-[55px]">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="8"
                />
              </svg>
              <div className="absolute text-[30px] font-normal text-[#101010]">
                00:00
              </div>
            </div>
            <button
              onClick={handleGoBack}
              className="w-full max-w-[322px] bg-[#199A8E] text-white text-[12px] font-normal py-[16px] rounded-[12px] shadow-md
                         hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Go Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TimeoutTimer;
