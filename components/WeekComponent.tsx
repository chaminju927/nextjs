"use client";

import { useCallback, useMemo, useState } from "react";
import moment from "moment";
import { weekTitleType, voidFnType } from "@/types/common";

type dayType = (dayNumber: number) => string;
function WeekComponent({
  dayConverter,
  today,
  drawTime,
}: {
  dayConverter: dayType;
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
            day: dayConverter(
              moment(today).startOf("week").add(i, "days").day()
            ),
          });
    }
    // setWeekRow({ ...weekTitle });
    setWeekRow(weekTitle);
  }, [dayConverter, today]);

  return (
    <div className="contentCalendar">
      <div className="weekContainer">
        <div className="weekContents">
          <span>
            {weekRow.map((data, index) => (
              <div key={index} className={data.className}>
                {data.day}
              </div>
            ))}
            {/* {today.format("DD").startsWith("0")
              ? today.format("D")
              : today.format("DD")} */}
          </span>
          {/* <span id="dayTitle">{dayConverter()}</span> */}
        </div>
      </div>
      <div className="calendarContainer">
        <div className="timeZone">
          {timeLine}
          {/* {timeLine.map((timeElement, index) => (
            <div key={index}>{timeElement}</div>
          ))} */}
        </div>
        <div className="weekSchedule"></div>
      </div>
    </div>
  );
}
export default WeekComponent;
