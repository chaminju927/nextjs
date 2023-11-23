"use client";

import {
  useCallback,
  useMemo,
  useState,
  useEffect,
  SetStateAction,
} from "react";
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
  const [flexBox, setFlexBox] = useState<any[]>([]);
  const scheduleRow: JSX.Element[] = [];

  // 1주일 제목 출력
  const drawWeek: React.Dispatch<React.SetStateAction<string>> = () => {
    var weekTitle: weekTitleType[] = [];
    for (let i = 0; i < 7; i++) {
      weekTitle.push({
        className: i === 0 ? "weekendSun" : i === 6 ? "weekendSat" : "weekdays",
        date: moment(today).startOf("week").add(i, "days"),
        day: dayConverter(moment(today).startOf("week").add(i, "days").day()),
      });
    }
    setWeekRow(weekTitle);
  };

  //주간 종일 일정 박스
  const drawAllDaySchedules = () => {
    const scheduleBoxes = [];
    for (let i = 0; i < 7; i++) {
      scheduleBoxes.push({
        className: "allDayFlexBox",
        id: i,
      });
    }
    setFlexBox(scheduleBoxes);
  };
  //타임라인 기본 틀 생성
  const timeSchedule = () => {
    for (
      let i = 0;
      i < 24;
      i++ // let time = startTime; // time.isSameOrBefore(endTime) ; // time.add(30, "minutes")
    ) {
      scheduleRow.push(
        <div className="time_schedule" key={i}>
          {/* {time.format("HH:mm") === schedule.start ? ( */}
          <div className="before30m">
            <div className="schedule1">
              {/* {schedule.start}: {schedule.detail} */}
            </div>
          </div>
          <div className="after30m">
            <div></div>
          </div>
        </div>
      );
    }
    return scheduleRow;
  };

  return (
    <div className="weekComponentBox">
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
        <div className="allDay">종일</div>
        <div className="allDayBox">
          {flexBox.map((data) => (
            <div key={data.i} className={data.className}>
              <span></span>
            </div>
          ))}
        </div>
      </div>
      <div className="calendarContainer">
        <div className="timeLine">
          <TimelineComponent />
        </div>
        <div className="schedule_container">{timeSchedule()}</div>
      </div>
    </div>
  );
}
export default WeekComponent;
