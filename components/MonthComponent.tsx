import { useEffect, useState, memo } from "react";
import moment from "moment";

const MonthComponent = function MonthComponent({
  current,
}: {
  current: moment.Moment;
}): JSX.Element {
  const [calendar, setCalendar] = useState<any[]>([]);
  const [newCurrent, setNewCurrent] = useState<moment.Moment>(current);
  // 이번달 첫 주의 시작 일자(일요일=0 부터 시작)
  const firstDayOfMonth =
    //current.clone().
    moment(newCurrent).startOf("month").startOf("week");
  // 이번달 첫 주
  const firstWeek = firstDayOfMonth.week();
  // 이번달 마지막 주의 마지막 일자
  const lastDayOfMonth = moment(newCurrent).endOf("month").endOf("week");
  // 이번달 마지막 주 (12월 마지막주가 1월로 넘어갈 경우 총 53주)
  const lastWeek = lastDayOfMonth.week() === 1 ? 53 : lastDayOfMonth.week();

  useEffect(() => {
    drawTable();
  }, [current]);

  const drawTable = () => {
    console.log(firstDayOfMonth);
    console.log(lastDayOfMonth);
    const newCalendar = [];
    for (let week = firstWeek; week <= lastWeek; week++) {
      const weekRow = [];
      for (let i = 0; i < 8; i++) {
        if (i !== 0) {
          var day = firstDayOfMonth.startOf("week").add(i - 1, "days");
          const isCurrentMonth = day.isSame(newCurrent, "month");
          const isToday = day.isSame(moment(), "day");
          weekRow.push({
            key: day.format("YYMMDD"),
            className: isCurrentMonth ? "current-month" : "other-month",
            day: day.format("DD").startsWith("0")
              ? day.format("D")
              : day.format("DD"),
            isToday: isToday,
          });
        } else {
          weekRow.push({ key: `empty-${week}`, className: "current-month" });
        }
      }
      newCalendar.push({ week: week, weekRow: weekRow });
    }
    setCalendar(newCalendar);
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
            {calendar.map((week) => (
              <tr key={week.week}>
                {week.weekRow.map((day: any) => (
                  <td key={day.key} className={day.className}>
                    <div
                      className={`${
                        day.key === "YYMMDD" ? "sunday" : "weekday"
                      }`}
                    >
                      <span className={day.isToday ? "today" : ""}>
                        {day.day}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthComponent;
