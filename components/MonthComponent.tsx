"use client";

import { useEffect, useState, useCallback } from "react";
import moment from "moment";
import { JSXArrType, JSXType, scheduleType, voidFnType } from "@/types/common";
import ScheduleModalComponent from "./ScheduleModalComponent";

const storage = window.localStorage;

function MonthComponent({ current }: { current: moment.Moment }): JSX.Element {
  const [calendar, setCalendar] = useState<any[]>([]);
  // 이번달 첫 주의 시작 일자(일요일=0 부터 시작)
  const firstDayOfMonth = moment(current).startOf("month").startOf("week");
  // 이번달 첫 주
  const firstWeek = firstDayOfMonth.week();
  // 이번달 마지막 주의 마지막 일자
  const lastDayOfMonth = moment(current).endOf("month").endOf("week");
  // 이번달 마지막 주 (12월 마지막주가 1월로 넘어갈 경우 총 53주)
  const lastWeek = lastDayOfMonth.week() === 1 ? 53 : lastDayOfMonth.week();
  // modal로 보낼 클릭한 날짜
  const [propsKey, setPropsKey] = useState<string>("");
  //스케쥴 입력 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const drawTable: voidFnType = useCallback(() => {
    const newCalendar = [];
    for (let week = firstWeek; week <= lastWeek; week++) {
      const weekRow = [];
      for (let i = 0; i < 8; i++) {
        if (i !== 0) {
          var day = moment(firstDayOfMonth).add(
            (week - firstWeek) * 7 + i - 1,
            "days"
          );
          const isCurrentMonth = day.isSame(current, "month");
          const isToday = day.isSame(moment(), "day");
          weekRow.push({
            key: day.format("YY.MM.DD"),
            className: isCurrentMonth ? "current-month" : "other-month",
            day: day.format("DD").startsWith("0")
              ? day.format("D")
              : day.format("DD"),
            isToday: isToday,
          });
        } else {
          weekRow.push({ key: `empty-${week}}`, className: "current-month" });
        }
      }
      newCalendar.push({ week: week, weekRow: weekRow });
    }
    setCalendar(newCalendar);
  }, [current, firstDayOfMonth, firstWeek, lastWeek]);

  useEffect(() => {
    drawTable();
  }, [current, storage]);

  const closeModal: voidFnType = () => {
    setIsModalOpen(false);
  };

  // 날짜 클릭시 모달 오픈
  const makeSchedule = (e: React.MouseEvent) => {
    const keyName = e.currentTarget.id;
    setPropsKey(keyName);
    console.log(keyName);
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className="tbl_calendar">
        <table>
          <thead>
            <tr>
              <th className="all">전체</th>
              <th className="sun">일요일</th>
              <th>월요일</th>
              <th>화요일</th>
              <th>수요일</th>
              <th>목요일</th>
              <th>금요일</th>
              <th>토요일</th>
            </tr>
          </thead>
          <tbody id="FlexCalendar">
            {calendar.map((week: any) => (
              <tr key={week.week}>
                {week.weekRow.map((day: any) => (
                  <td
                    key={day.key}
                    id={day.key}
                    className={day.className}
                    onClick={makeSchedule}
                  >
                    <div
                      className={`${
                        day.key === "YYMMDD" ? "sunday" : "weekday"
                      }`}
                    >
                      <span className={day.isToday ? "today" : ""} id={day.id}>
                        {day.day}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <ScheduleModalComponent
            isOpen={isModalOpen}
            closeModal={closeModal}
            propsKey={propsKey}
          />
        </table>
      </div>
    </div>
  );
}

export default MonthComponent;
