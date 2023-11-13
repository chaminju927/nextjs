import moment from "moment";
import { useState, useEffect } from "react";
import MonthComponent from "./MonthComponent";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DayComponent from "./DayComponent";
import WeekComponent from "./WeekComponent";

const selectType = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
};

const now = moment();
function TopComponent(): JSX.Element {
  const [current, setCurrent] = useState<moment.Moment>(now);
  const [currentString, setCurrentString] = useState<string>();
  const [calendarType, setCalendarType] = useState<string>(selectType.MONTH);

  // 요일 변환
  const dayConverter: any = () => {
    switch (current.day()) {
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
  useEffect(() => {
    setCurrentString(current.format("YYYY.MM"));
  }, [current]);

  const prevMonth: () => void = () => {
    const prev = current;
    setCurrent(moment(prev).subtract(1, "month"));
    setCurrentString(current.format("YYYY.MM"));
  };

  const nextMonth: () => void = () => {
    const next = current;
    setCurrent(moment(next).add(1, "month"));
    setCurrentString(current.format("YYYY.MM"));
  };

  const inputType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCalendarType(e.target.value);
  };

  return (
    <div>
      {calendarType === selectType.MONTH ? (
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
      ) : calendarType === selectType.WEEK ? (
        <div className="calendar_top">
          <span className="Month" id="dateTxt">
            {current.format("YYYY.MM.DD")} -{" "}
            {moment(current).add(7, "days").format("YYYY.MM.DD")}
          </span>
        </div>
      ) : (
        <div className="calendar_top">
          <span className="Month" id="dateTxt">
            {moment(current).format("YYYY.MM.DD")}
          </span>
        </div>
      )}
      <div>
        <select id="select_term" onChange={inputType}>
          <option value={selectType.MONTH}>월간</option>
          <option value={selectType.WEEK}>주간</option>
          <option value={selectType.DAY}>일간</option>
        </select>
      </div>
      <div className="calendar_box">
        {calendarType === selectType.MONTH ? (
          <MonthComponent current={current} />
        ) : calendarType === selectType.WEEK ? (
          <WeekComponent dayConverter={dayConverter} />
        ) : (
          <DayComponent dayConverter={dayConverter} />
        )}
      </div>
    </div>
  );
}

export default TopComponent;
