"use client";

import { useEffect, useState } from "react";
import moment from "moment";

function DayComponent({
  dayConverter,
  drawTime,
  today,
}: {
  dayConverter: string;
  drawTime: any;
  today: moment.Moment;
}): JSX.Element {
  const scheduleRow: any[] = [];

  const [timeLine, setTimeLine] = useState<any[]>(drawTime);
  const allDayRow: any[] = [];
  const allDaySchedule = () => {
    allDayRow.push(<div className="allDayItem">[차민주] 오후 반차</div>);
    allDayRow.push(<div className="allDayItem">[차민주] 연차 휴가</div>);
    return allDayRow;
  };

  // 종일 일정 데이터 예시
  // const allDaySchedule = [
  //   // { className: "item", data: "[차민주] 오후 반차" },
  //   { no: 1, className: "item", data: "[차민주] 연차 휴가" },
  //   { no: 2, className: "item", data: "[차민주] 오후 반차" },
  // ];

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
        <div className="time_schedule">
          {/* {time.format("HH:mm") === schedule.start ? ( */}
          <div className="before30m">
            <div className="schedule1">
              {schedule.start}-{schedule.end}: {schedule.detail}
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
      <div className="day_calendar_title">
        <div className="day_blank"></div>
        <div className="day_title">
          <span className="day_current">
            {today.format("DD").startsWith("0")
              ? today.format("D")
              : today.format("DD")}
          </span>
          <span id="today">{dayConverter}</span>
        </div>
      </div>
      <div className="day_calendar1">
        <div className="allDay">종일</div>
        <div className="container1">
          <div className="items">{allDaySchedule()}</div>
          {/* {allDaySchedule.map((index) => {
            <div className="items" key={index.no}>
              <div className={index.className}>{index.data}</div>
            </div>;
          })} */}
        </div>
      </div>
      <div className="day_calendar2">
        <div className="timeLine">{timeLine}</div>
        <div className="schedule_container">
          <div>{timeSchedule()}</div>
        </div>
      </div>
    </div>
  );
}
export default DayComponent;
