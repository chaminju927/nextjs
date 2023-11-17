"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import TimelineComponent from "./TimelineComponent";
import { dayType } from "@/types/common";

const now = moment();
const today = now;
function DayComponent({
  dayConverter,
}: {
  dayConverter: dayType;
}): JSX.Element {
  const storage = window.localStorage;
  const scheduleRow: JSX.Element[] = [];
  const dateFormat = today.format("DD").startsWith("0")
    ? today.format("D")
    : today.format("DD");

  // 종일 일정 데이터 예시
  // const allDaySchedule = [
  //   // { className: "item", data: "[차민주] 오후 반차" },
  //   { className: "allDayItem", data: "[차민주] 연차 휴가" },
  //   { className: "allDayItem", data: "[차민주] 오후 반차" },
  // ];
  const scheduleData =
    typeof window !== undefined
      ? storage.getItem(today.format("YY.MM.DD"))
      : null;
  
  const allDaySchedule = [{ className: "allDayItem", data: scheduleData }];

  //일정 데이터 예시
  let schedule = {
    start: "08:00",
    end: "10:00",
    detail: "[한국후지필름BI] 현장 안정화 패치",
  };
  // 시간대별 일정
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
              {schedule.start}: {schedule.detail}
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
    <div className="dayComponentBox">
      <div className="day_calendar_title">
        <div className="day_blank"></div>
        <div className="day_title">
          <span className="day_current">{dateFormat}</span>
          <span className="day_today">{dayConverter(today.day())}</span>
        </div>
      </div>
      <div className="day_calendar1">
        <div className="allDay">종일</div>
        <div className="container1">
          <div className="items">
            {allDaySchedule.map((item, index) => (
              <div className={item.className} key={index}>
                {item.data}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="day_calendar2">
        <div className="timeLine">
          <TimelineComponent />
        </div>
        <div className="schedule_container">
          <div>{timeSchedule()}</div>
        </div>
      </div>
    </div>
  );
}
export default DayComponent;
