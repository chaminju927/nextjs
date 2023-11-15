import { voidFnType } from "@/types/common";
import { useCallback, useState } from "react";

const selectType = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
};

function SelectDateComponent({ getDate }: { getDate: any }) {
  // const [calendarType, setCalendarType] = useState<string>(selectType.MONTH);

  const inputType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setCalendarType(e.target.value);
    getDate(e.target.value);
  };

  return (
    <div>
      <select id="select_term" onChange={inputType}>
        <option value={selectType.MONTH}>월간</option>
        <option value={selectType.WEEK}>주간</option>
        <option value={selectType.DAY}>일간</option>
      </select>
    </div>
  );
}
export default SelectDateComponent;
