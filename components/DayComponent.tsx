// "use client";

// import { useEffect, useState } from "react";
// import moment from "moment";
// //import Grid from "@mui/material/Grid";
// function DayComponent({
//   currentMonth,
//   today,
// }: {
//   currentMonth: moment.Moment;
//   today: moment.Moment;
// }): JSX.Element {
//   useEffect(() => {
//     // console.log(today);
//     // console.log(moment.format("HH:mm"));
//   }, []);
//   const [getToday, setToday] = useState(today);
//   const startTime = getToday.startOf("day");
//   const endTime = getToday.endOf("day");
//   const time = startTime.clone();

//   // const allDayRow = [];
//   // const scheduleRow = [];
//   const [allDayRow, setAllDayRow] = useState<any>([]);
//   const [scheduleRow, setScheduleRow] = useState<any>([]);
//   // 종일 일정
//   const allDaySchedule = () => {
//     setAllDayRow({
//       className: "schedule_top",
//       span: "[차민주] 오후 반차",
//     });
//     setAllDayRow({
//       className: "schedule_top",
//       span: "[차민주] 연차 휴가",
//     });
//     // allDayRow.push(
//     //   <div className="schedule_top">
//     //     <span>[차민주] 오후 반차</span>
//     //   </div>
//     // );
//     return allDayRow;
//   };
//   //일정 데이터 예시
//   let scheduleEx = {
//     start: "08:00",
//     end: "10:00",
//     detail: "[한국후지필름BI] 현장 안정화 패치",
//   };
//   // 시간대별 일정
//   const timeSchedule = () => {
//     console.log(startTime.clone().add(30, "minutes"));

//     for (
//       // let time = startTime.clone();
//       time;
//       time.isSameOrBefore(endTime);
//       time.add(30, "minutes")
//     ) {
//       scheduleRow.push(
//         <div className="time_schedule">
//           {time.format("HH:mm") === scheduleEx.start ? (
//             <div className="schedule_container">
//               <span className="schedule1">{scheduleEx.detail}</span>
//             </div>
//           ) : (
//             <div className="middle-time">
//               <span></span>
//             </div>
//           )}
//         </div>
//       );
//     }
//     return scheduleRow;
//   };
//   // 시간대 출력 (30분 단위)
//   const drawTime = () => {
//     const timeLineRow = [];
//     for (
//       // let time = startTime.clone();
//       time;
//       time.isSameOrBefore(endTime);
//       time.add(30, "minutes")
//     ) {
//       time.format("mm") === "00" ? (
//         timeLineRow.push(
//           <div key={time.format("HH:mm")} className="timeBox">
//             <span>{time.format("HH:mm")}</span>
//           </div>
//         )
//       ) : (
//         <div key={time.format("HH:mm")} className="blankTime">
//           <span></span>
//         </div>
//       );
//     }
//     return timeLineRow;
//   };

//   return (
//     <div>
//       <div className="day_calendar_title">
//         <div className="day_blank"></div>
//         <div className="day_title">
//           <span className="day_today">
//             {today.format("DD").startsWith("0")
//               ? today.format("D")
//               : today.format("DD")}{" "}
//           </span>
//           {/* <span>{today.format("dddd")}</span> */}
//         </div>
//       </div>
//       <div className="day_calendar1">
//         <div className="allDay">
//           <span>종일</span>
//         </div>
//         <div className="container1">
//           <div className="item0">{allDaySchedule()}</div>
//         </div>
//       </div>
//       <div className="day_calendar2">
//         <div className="timeLine">{drawTime()}</div>
//         <div className="item3">
//           <div>{timeSchedule()}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default DayComponent;
