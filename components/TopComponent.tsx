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
import SelectDateComponent from "./SelectDateComponent";

const now = moment();
const today = now;
// 요일 변환
const dayConverter: dayType = (no: number) => {
  switch (no) {
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

function TopComponent(): JSX.Element {
  const [current, setCurrent] = useState<moment.Moment>(now);
  const [currentString, setCurrentString] = useState<string>();
  const [renderType, setRenderType] = useState<string>("month");

  const [dateNow, setDateNow] = useState<string>(now.format("YYYY.MM.DD"));
  const [firstDayOfWeek, setFirstDayOfWeek] = useState<string>(
    moment(now).startOf("week").format("YYYY.MM.DD")
  );
  const [dateAfter7, setDateAfter7] = useState<string>(
    moment(firstDayOfWeek).add(6, "days").format("MM.DD")
  );
  useEffect(() => {
    setCurrentString(current.format("YYYY.MM"));
  }, [current]);

  // 이전달 이동
  const prevMonth: voidFnType = () => {
    const prev = moment(current).subtract(1, "month");
    setCurrent(prev);
    setCurrentString(prev.format("YYYY.MM"));
    console.log(prev);
  };
  // 다음달 이동
  const nextMonth: voidFnType = () => {
    const next = moment(current).add(1, "month");
    setCurrent(next);
    setCurrentString(next.format("YYYY.MM"));
    console.log(next);
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
          {firstDayOfWeek} - {dateAfter7}
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

  const getDateFn = (value: string) => {
    setRenderType(value);
  };

  if (renderType === "month") {
    return (
      <div>
        {selectMonthType()}
        <SelectDateComponent getDate={getDateFn} />
        <MonthComponent current={current} />
      </div>
    );
  } else if (renderType === "week") {
    return (
      <div>
        {selectWeekType()}
        <SelectDateComponent getDate={getDateFn} />
        <WeekComponent dayConverter={dayConverter} />
      </div>
    );
  } else {
    return (
      <div>
        {selectDayType()}
        <SelectDateComponent getDate={getDateFn} />
        <DayComponent dayConverter={dayConverter} />
      </div>
    );
  }
}

export default TopComponent;
