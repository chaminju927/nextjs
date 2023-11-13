import { useEffect, useState } from "react";
import moment from "moment";

const current = moment();
function DayComponent({
  dayConverter,
}: {
  dayConverter: () => string;
}): JSX.Element {
  const today = current;

  useEffect(() => {
    console.log(current);
    // console.log(moment.format("HH:mm"));
  }, [current]);

  const startTime = moment(today).startOf("day");
  const endTime = moment(today).endOf("day");
  const time = startTime;

  const allDayRow: any[] = [];
  const scheduleRow: any[] = [];

  // 종일 일정
  const allDaySchedule = () => {
    allDayRow.push(<div className="item">[차민주] 오후 반차</div>);
    allDayRow.push(<div className="item">[차민주] 연차 휴가</div>);
    return allDayRow;
  };
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
              {schedule.start} {schedule.detail}
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
  // 시간대 출력 (30분 단위)
  const drawTime = () => {
    const timeLineRow = [];
    for (
      // let time = startTime.clone();
      time;
      time.isSameOrBefore(endTime);
      time.add(30, "minutes")
    ) {
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
    <div>
      <div className="day_calendar_title">
        <div className="day_blank"></div>
        <div className="day_title">
          <span className="day_current">
            {current.format("DD").startsWith("0")
              ? current.format("D")
              : current.format("DD")}{" "}
          </span>
          <span>{dayConverter()}</span>
        </div>
      </div>
      <div className="day_calendar1">
        <div className="allDay">종일</div>
        <div className="container1">
          <div className="items">{allDaySchedule()}</div>
        </div>
      </div>
      <div className="day_calendar2">
        <div className="timeLine">{drawTime()}</div>
        <div className="schedule_container">
          <div>{timeSchedule()}</div>
        </div>
      </div>
    </div>
  );
}
export default DayComponent;
