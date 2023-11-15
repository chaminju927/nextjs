"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
import moment from "moment";
import { weekTitleType, voidFnType, dayType } from "@/types/common";
import TimelineComponent from "./TimelineComponent";

const now = moment();
const today = now;

function WeekComponent({
  dayConverter,
}: {
  dayConverter: dayType;
}): JSX.Element {
  const [weekRow, setWeekRow] = useState<weekTitleType[]>([]);

  // 1주일 제목 출력
  const drawWeek: voidFnType = () => {
    var weekTitle: weekTitleType[] = [];
    for (let i = 0; i < 7; i++) {
      weekTitle.push({
        className: i === 0 ? "weekdays" : i === 6 ? "weekendSat" : "weekdays",
        date: moment(today).startOf("week").add(i, "days"),
        day: dayConverter(moment(today).startOf("week").add(i, "days").day()),
      });
    }
    setWeekRow(weekTitle);
  };

  useEffect(() => {
    drawWeek();
    // console.log(dayConverter(0));
  }, []);
  return (
    <div className="contentCalendar">
      <div className="weekContainer">
        <div className="weekContents">
          {weekRow.map((data, index) => (
            <div key={index} className={data.className}>
              <span>
                {data.date.format("DD")} {data.day}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="allDayScheduleBox">
            <div className="allDayTitle">종일</div>
            <div className="allDaySchedules"></div>
      </div>
      <div className="calendarContainer">
        <div className="timeZone">
          <TimelineComponent />
        </div>
        <div className="weekSchedule"></div>
      </div>
    </div>
  );
}
export default WeekComponent;
