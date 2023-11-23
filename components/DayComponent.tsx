"use client";

import { useState } from "react";
import moment from "moment";
import TimelineComponent from "./TimelineComponent";
import { dayType } from "@/types/common";

const now = moment();
const today = now;
const time = moment(today).startOf("day");
const endTime = moment(today).endOf("day");
function DayComponent({
  dayConverter,
}: {
  dayConverter: dayType;
}): JSX.Element {
  const scheduleRow: JSX.Element[] = [];
  const timeLineRow: JSX.Element[] = [];
  const dateFormat = today.format("DD").startsWith("0")
    ? today.format("D")
    : today.format("DD");

  const scheduleData =
    typeof window !== undefined
      ? window.localStorage.getItem(today.format("YY.MM.DD"))
      : "";

  const allDaySchedule = [{ className: "allDayItem", data: scheduleData }];

  //일정 데이터 예시
  let schedule = {
    start: "09:30",
    end: "11:00",
    detail: "[한국후지필름BI] 현장 안정화 패치",
  };
  //타임라인 기본 틀 생성
  const timeLineSchedule = () => {
    for (time; time.isSameOrBefore(endTime); time.add(30, "minutes")) {
      timeLineRow.push(
        <div className="time_schedule" id={`${time}`}>
          <div className="before30m">
            <div className="schedule1"></div>
          </div>
          <div className="after30m">
            <div></div>
          </div>
        </div>
      );
    }
    return timeLineRow;
  };

  // 시간대별 일정
  const timeSchedule = () => {
    for (time; time.isSameOrBefore(endTime); time.add(30, "minutes")) {
      if (schedule.start === time.format("HH:mm")) {
        scheduleRow.push(
          <div className="time_schedule" id={`${time}`}>
            <div className="before30m">
              <div className="schedule1">{schedule.start} -</div>
            </div>
          </div>
        );
      } else if (schedule.end === time.format("HH:mm")) {
        scheduleRow.push(
          <div className="time_schedule" id={`${time}`}>
            <div className="before30m">
              <div className="schedule1">
                {schedule.end}: {schedule.detail}
              </div>
            </div>
          </div>
        );
      } else {
        time.format("mm") === "00"
          ? scheduleRow.push(
              <div className="time_schedule" id={`${time}`}>
                <div className="before30m">
                  <div className="schedule1">{schedule.start} -</div>
                </div>
              </div>
            )
          : scheduleRow.push(
              <div className="after30m" id={`${time}`}>
                <div></div>
              </div>
            );
      }
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
          <div>{timeLineSchedule()}</div>
        </div>
      </div>
    </div>
  );
}
export default DayComponent;
