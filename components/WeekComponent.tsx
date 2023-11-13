"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { weekTitleType } from "@/types/common";

const currentMoment = moment();
const current = currentMoment;

function WeekComponent({
  dayConverter,
}: {
  dayConverter: () => string;
}): JSX.Element {
  const startTime = moment(current).startOf("day");
  const endTime = moment(current).endOf("day");
  const time = startTime;

  const [weekRow, setWeekRow] = useState<weekTitleType[]>([]);
  useEffect(() => {
    drawTime();
    drawWeek();
  }, [current]);

  // 1주일 제목 출력
  const drawWeek = () => {
    var weekTitle: weekTitleType[] = [];
    for (let i = 0; i < 7; i++) {
      i === 0
        ? weekTitle.push({
            className: "",
            day: "",
          })
        : weekTitle.push({
            className:
              i === 1 ? "weekendSun" : i === 7 ? "weekendSat" : "weeekdays",
            date: moment(current).startOf("week").add(i, "days"),
            day: dayConverter(),
          });
    }
    setWeekRow({ ...weekTitle });
  };

  // 시간대 출력 (30분 단위)
  const drawTime = () => {
    const timeLineRow = [];
    for (time; time.isSameOrBefore(endTime); time.add(30, "minutes")) {
      time.format("mm") === "00" ? (
        timeLineRow.push(
          <div key={time.format("HH:mm")} className="timeBox">
            <span id="times">{time.format("HH:mm")}</span>
          </div>
        )
      ) : (
        <div key={time.format("HH:mm")} className="blankTime">
          <span></span>
        </div>
      );
    }
    return timeLineRow;
  };

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
            {current.format("DD").startsWith("0")
              ? current.format("D")
              : current.format("DD")}
          </span>
          <span id="dayTitle">{dayConverter()}</span>
        </div>
      </div>
      <div className="calendarContainer">
        <div className="timeZone">{drawTime()}</div>
        <div className="weekSchedule"></div>
      </div>
    </div>
  );
}
export default WeekComponent;
