import { dayType } from "@/types/common";
import { useEffect, useState, useCallback, useMemo } from "react";

function CalendarDayComponent({ dayConverter }: { dayConverter: dayType }) {
  const thDays: any = useMemo(() => {
    const stringDays = [];
    for (let i = 0; i < 7; i++) {
      const className = i === 0 ? "sun" : null;
      const convertedDay = dayConverter(i) + "요일";
      stringDays.push({ class: className, converted: convertedDay });
    }
    return stringDays;
  }, [dayConverter]);

  return (
    <>
      <thead>
        <tr>
          <th className="all">전체</th>
          {thDays.map((data: any, index: number) => {
            <th className={data.class} key={index}>
              {data.converted}
            </th>;
          })}
          <th className="sun">일요일</th>
          <th>월요일</th>
          <th>화요일</th>
          <th>수요일</th>
          <th>목요일</th>
          <th>금요일</th>
          <th>토요일</th>
        </tr>
      </thead>
    </>
  );
}
export default CalendarDayComponent;
