import { IonIcon } from "@ionic/react";
import React from "react";
import arrow from "../assets/main/arrow.svg";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Assessment {
  points?: number;
  star?: number;
}

interface CalendarDay {
  date: string;
  day: string;
  weight: number;
  stars: number;
  hasAssessment: boolean;
  isCurrentMonth: boolean;
  isGrayed?: boolean;
  position: number;
  weekIndex?: number;
}

interface CalendarGraphProps {
  year: number;
  month: number;
  assessmentData?: Assessment[][];
}

const CalendarGraph: React.FC<CalendarGraphProps> = ({
  year,
  month,
  assessmentData = [],
}) => {
  const getDaysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();
  const getFirstDayOfMonth = (y: number, m: number) =>
    new Date(y, m - 1, 1).getDay();
  const getDayName = (dayIndex: number) =>
    ["日", "月", "火", "水", "木", "金", "土"][dayIndex];

  const generateCalendarData = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const calendarData: CalendarDay[] = [];

    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarData.push({
        date: (prevMonthDays - firstDayOfMonth + i + 1).toString(),
        day: getDayName(i),
        weight: 0,
        stars: 0,
        hasAssessment: false,
        isCurrentMonth: false,
        isGrayed: true,
        position: i,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayPosition = (firstDayOfMonth + day - 1) % 7;
      const weekIndex = Math.floor((firstDayOfMonth + day - 1) / 7);
      const assessment = assessmentData?.[weekIndex]?.[dayPosition];

      calendarData.push({
        date: day.toString(),
        day: getDayName(dayPosition),
        weight: assessment?.points || 0,
        stars: assessment?.star || 0,
        hasAssessment: !!assessment,
        isCurrentMonth: true,
        position: dayPosition,
        weekIndex,
      });
    }

    const remainingDays = 35 - calendarData.length;
    for (let day = 1; day <= remainingDays; day++) {
      const pos = calendarData.length % 7;
      calendarData.push({
        date: day.toString(),
        day: getDayName(pos),
        weight: 0,
        stars: 0,
        hasAssessment: false,
        isCurrentMonth: false,
        isGrayed: true,
        position: pos,
      });
    }

    return calendarData;
  };

  const calendarData = generateCalendarData();
  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < calendarData.length; i += 7) {
    weeks.push(calendarData.slice(i, i + 7));
  }

  const StarRating = ({ count }: { count: number }) => (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className={`text-[10px] w-[6px]  ${  
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow text-xs">
          <p>{data.date}日</p>
          <p>ポイント: {data.weight}</p>
          {data.stars > 0 && <p>評価: {"★".repeat(data.stars)}</p>}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full  pl-[25px] pb-[24px]">
      <div className="grid grid-cols-7 gap-1 mb-2 text-start   text-[14px] text-[#101010]">
        {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="relative">
        {weeks.slice(0, 5).map((week, weekIndex) => {
          const chartData = week.map((day, index) => ({
            ...day,
            xPos: index,
          }));

          return (
            <>
              <IonIcon
                src={arrow}
                name="star"
                className="w-[14px] h-[78px] absolute top-[0px] left-[-20px] z-0"
              />
              <div key={weekIndex} className="relative ">
                <div className="absolute inset-0   pointer-events-none z-0"></div>

                <div className="absolute top-0 left-0 w-full h-16 pointer-events-none">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData.filter(
                        (day) => day.isCurrentMonth && day.hasAssessment
                      )}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <XAxis dataKey="xPos" hide={true} />
                      <YAxis hide={true} domain={[0, "dataMax + 10"]} />
                      <Line
                        type="linear"
                        dataKey="weight"
                        stroke="#199A8E"
                        fill="#199A8E"
                        strokeWidth={2}
                        dot={{ r: 2  }}
                        activeDot={{ r: 6 }}
                        connectNulls={false}
                      />
                      <Tooltip content={<CustomTooltip />} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-7  relative   z-20">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`h-[80px]   flex flex-col items-start justify-start p-1  border   ${
                        day.isGrayed ? "text-gray-400" : "text-gray-800"
                      } ${day.hasAssessment ? " " : ""}`}
                    >
                      <span className="text-[12px]">{day.date}</span>
                      {day.hasAssessment && day.stars > 0 && (
                        <div className="mt-[30px] flex items-center ">
                          <span className="text-[12px]"> {day.stars}</span>
                          <StarRating count={day.stars} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGraph;
