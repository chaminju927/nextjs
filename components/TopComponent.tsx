"use client";

import moment from "moment";
import { useState, useEffect } from "react";
import MonthComponent from "../../calendar/src/component/MonthComponent";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
//import WeekComponent from "./WeekComponent";
import DayComponent from "../../calendar/src/component/DayComponent";

const selectType = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
};
const now = moment();
const today = moment();
const nowString = now.format("YYYY.MM");

function TopComponent(): JSX.Element {
  const [currentMonth, setCurrentMonth] = useState<moment.Moment>(now);
  const [calendarType, setCalendarType] = useState<string>(selectType.MONTH); //selectBox
  const [currentString, setCurrentString] = useState<string>(nowString);

  useEffect(() => {
    console.log(now);
    console.log(currentMonth);
  }, []);
  const prevMonth: () => void = () => {
    console.log(currentMonth);
    const prev = currentMonth.subtract(1, "month");
    const prevString = prev.format("YYYY.MM");
    console.log(prev);
    console.log(prevString);
    setCurrentString(prevString);
    setCurrentMonth(prev);
  };

  const nextMonth: () => void = () => {
    console.log(currentMonth);
    const next = currentMonth.add(1, "month");
    const nextString = next.format("YYYY.MM");
    console.log(nextString);
    setCurrentMonth(next);
    setCurrentString(nextString);
  };

  const inputType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //console.log(e.target.value);
    setCalendarType(e.target.value);
  };

  return (
    <div>
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
      <div>
        <select id="select_term" onChange={inputType}>
          <option value={selectType.MONTH}>월간</option>
          <option value={selectType.WEEK}>주간</option>
          <option value={selectType.DAY}>일간</option>
        </select>
      </div>
      <div className="calendar_box">
        {calendarType === selectType.MONTH ? (
          <MonthComponent currentMonth={currentMonth} today={today} />
        ) : (
          // ) : calendarType === selectType.WEEK ? (
          // <WeekComponent />
          <DayComponent currentMonth={currentMonth} today={today} />
        )}
      </div>
    </div>
  );
}

export default TopComponent;
