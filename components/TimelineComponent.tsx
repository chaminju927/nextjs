"use client";

import { voidFnType } from "@/types/common";
import moment from "moment";
import { useState, useEffect, useCallback, useMemo } from "react";

const now = moment();
const today = now;
const endTime = moment(today).endOf("day");

function TimelineComponent() {
  const time = moment(today).startOf("day");
  const [renderTime, setRenderTime] = useState<JSX.Element[]>([]);
  useEffect(() => {
    drawTime();
  }, []);

  // 시간대 출력 (30분 단위)
  const drawTime: voidFnType = () => {
    var timeLineRow = [];
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
      setRenderTime(timeLineRow);
    }
  };
  return <div>{renderTime}</div>;
}
export default TimelineComponent;
