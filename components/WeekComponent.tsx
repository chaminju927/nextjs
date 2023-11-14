"use client";

import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { weekTitleType, voidFnType } from "@/types/common";

function WeekComponent({
  dayConverter,
  today,
  drawTime,
}: {
  dayConverter: string;
  today: moment.Moment;
  drawTime: any;
}): JSX.Element {
  const [weekRow, setWeekRow] = useState<any[]>([]);
  // 타임라인
  const [timeLine, setTimeLine] = useState<any[]>(drawTime);
  //const [weekTitle, setWeekTitle] = useState<weekTitleType[]>([]);
  // 1주일 제목 출력
  const drawWeek: voidFnType = useCallback(() => {
    var weekTitle: weekTitleType[] = [];
    for (let i = 0; i < 7; i++) {
      i === 0
        ? weekTitle.push({
            //push 대신 setstate사용하기
            className: " ",

            day: "",
          })
        : weekTitle.push({
            className:
              i === 1 ? "weekendSun" : i === 7 ? "weekendSat" : "weeekdays",
            date: moment(today).startOf("week").add(i, "days"),
            day: dayConverter,
          });
    }
    // setWeekRow({ ...weekTitle });
    setWeekRow(weekTitle);
  }, [dayConverter, today]);

  useEffect(() => {
    drawWeek();
  }, [drawWeek]);
  return (
    <div className="contentCalendar">
      <div className="weekContainer">
        <div className="weekContents">
          <span>
            {/* {weekRow.weekTitle.map((data) => {
              <div className={data.weekRow.weekTitle.className}>
                {data.weekTitle.content}
              </div>;
            })} */}
            {today.format("DD").startsWith("0")
              ? today.format("D")
              : today.format("DD")}
          </span>
          <span id="dayTitle">{dayConverter}</span>
        </div>
      </div>
      <div className="calendarContainer">
        <div className="timeZone">{timeLine}</div>
        <div className="weekSchedule"></div>
      </div>
    </div>
  );
}
export default WeekComponent;
