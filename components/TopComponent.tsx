"use client";

import moment from "moment";
import { useState, useEffect, useMemo, useCallback } from "react";
import MonthComponent from "./MonthComponent";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DayComponent from "./DayComponent";
import WeekComponent from "./WeekComponent";
import { JSXType, dayType, voidFnType } from "../types/common";

const now = moment();
const today = now;
const startTime = moment(today).startOf("day");
const endTime = moment(today).endOf("day");
const time = startTime;

const selectType = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
};
// 요일 변환
const dayConverter: dayType = () => {
  switch (now.day()) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      return "";
  }
};

// 시간대 출력 (30분 단위)
const drawTime: any = () => {
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

function TopComponent(): JSX.Element {
  const [current, setCurrent] = useState<moment.Moment>(now);
  const [currentString, setCurrentString] = useState<string>();
  const [calendarType, setCalendarType] = useState<string>(selectType.MONTH);

  const [dateNow, setDateNow] = useState<string>(now.format("YYYY.MM.DD"));
  const [dateAfter7, setDateAfter7] = useState<string>(
    moment(now).add(7, "days").format("YYYY.MM.DD")
  );
  const [timeline, setTimeline] = useState<any[]>(drawTime.timeLineRow);
  //title
  useEffect(() => {
    setCurrentString(current.format("YYYY.MM"));
  }, [current]);

  // 이전달 이동
  const prevMonth: voidFnType = () => {
    const prev = moment(current).subtract(1, "month");
    setCurrent(prev);
    setCurrentString(prev.format("YYYY.MM"));
  };
  // 다음달 이동
  const nextMonth: voidFnType = () => {
    const next = current;
    setCurrent(moment(next).add(1, "month"));
    setCurrentString(current.format("YYYY.MM"));
  };

  const selectMonthType: JSXType = () => {
    return (
      <div className="calendar_top">
        <IconButton onClick={prevMonth}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <span className="Month" id="dateTxt">
          {currentString}
        </span>
        <IconButton onClick={nextMonth}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    );
  };
  const selectWeekType: JSXType = () => {
    return (
      <div className="calendar_top">
        <span className="Month" id="dateTxt">
          {dateNow} - {dateAfter7}
        </span>
      </div>
    );
  };
  const selectDayType: JSXType = () => {
    return (
      <div className="calendar_top">
        <span className="Month" id="dateTxt">
          {dateNow}
        </span>
      </div>
    );
  };

  // const getDateFn = (calendarType: string) => {
  //   console.log(calendarType);
  //   setType(calendarType);
  // };

  const inputType = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCalendarType(e.target.value);
  }, []);

  const selectBox: JSX.Element = useMemo(() => {
    return (
      <div>
        <select id="select_term" onChange={inputType}>
          <option value={selectType.MONTH}>월간</option>
          <option value={selectType.WEEK}>주간</option>
          <option value={selectType.DAY}>일간</option>
        </select>
      </div>
    );
  }, [inputType]);

  if (calendarType === selectType.MONTH) {
    return (
      <div>
        {selectMonthType()}
        {selectBox}
        <MonthComponent current={current} />
      </div>
    );
  } else if (calendarType === selectType.WEEK) {
    return (
      <div>
        {selectWeekType()}
        {selectBox}
        <WeekComponent
          dayConverter={dayConverter}
          today={today}
          drawTime={drawTime}
        />
      </div>
    );
  } else {
    return (
      <div>
        {selectDayType()}
        {selectBox}
        <DayComponent
          dayConverter={dayConverter}
          drawTime={drawTime}
          today={today}
        />
      </div>
    );
  }
}

export default TopComponent;
