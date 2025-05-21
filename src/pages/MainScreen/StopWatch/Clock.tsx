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

  const circumference = 2 * Math.PI * 90; // Circle radius is 90
  const progress = initialSeconds > 0 ? secondsLeft / initialSeconds : 0;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4 py-8 bg-gray-100 font-inter text-gray-800">
      <div className="w-full text-center mb-8">
        <h1 className="text-2xl font-semibold">Stopwatch</h1>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md">
        {!isRunning && !isTimeUp && (
          <>
            <h2 className="text-lg text-gray-600 mb-8">Set Your Timer</h2>
            <div className="flex flex-col items-center space-y-4 mb-12">
              {[5, 4, 3, 2, 1].map((min) => (
                <div
                  key={min}
                  className={`text-6xl font-mono cursor-pointer transition-all duration-200
                              ${
                                selectedMinutes === min
                                  ? "text-green-600 font-bold"
                                  : "text-gray-300"
                              }`}
                  onClick={() => setSelectedMinutes(min)}
                >
                  {min.toString().padStart(2, "0")}
                </div>
              ))}
            </div>
            <button
              onClick={handleStart}
              className="w-full max-w-xs bg-green-600 text-white text-lg font-semibold py-4 rounded-xl shadow-md
                         hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Start
            </button>
          </>
        )}

        {isRunning && (
          <>
            <div className="relative w-48 h-48 flex items-center justify-center mb-12">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="10"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="10"
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 linear"
                />
              </svg>
              <div className="absolute text-5xl font-mono text-gray-800">
                {formatTime(secondsLeft)}
              </div>
            </div>
            <button
              onClick={handleCancel}
              className="w-full max-w-xs bg-green-600 text-white text-lg font-semibold py-4 rounded-xl shadow-md
                         hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Cancel
            </button>
          </>
        )}

        {isTimeUp && (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              TIME'S UP!
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Great Job! Ready To Do It Again?
            </p>
            <div className="relative w-48 h-48 flex items-center justify-center mb-12">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="10"
                />
              </svg>
              <div className="absolute text-5xl font-mono text-gray-800">
                00:00
              </div>
            </div>
            <button
              onClick={handleGoBack}
              className="w-full max-w-xs bg-green-600 text-white text-lg font-semibold py-4 rounded-xl shadow-md
                         hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Go Back
            </button>
          </>
        )}
      </div>

      <div className="w-full max-w-md bg-white rounded-full shadow-lg p-3 flex justify-around items-center mt-8">
        <div className="flex flex-col items-center text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-timer"
          >
            <path d="M10 2h4" />
            <path d="M12 14v4" />
            <path d="M4.93 4.93l.71.71" />
            <path d="M19.07 4.93l-.71.71" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <span className="text-xs mt-1">Timer</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clipboard-list"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
          </svg>
          <span className="text-xs mt-1">List</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default TimeoutTimer;
