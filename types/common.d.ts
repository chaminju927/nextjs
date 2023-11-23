import moment from "moment";

export interface dataType {
  workerNo: number;
  part: string;
  name: string;
  position: string;
}

export type applyType = {
  workType: string;
  startDate: string;
  endDate: string;
  enrollDate?: string;
  reason: string;
  confirm?: boolean;
  no?: number;
};

export type applyDataType = dataType & applyType;

//functiontype
export type dayType = (dayNo: number) => string;
export type voidFnType = () => void;
export type JSXArrType = () => JSX.Element[];
export type JSXType = () => JSX.Element;

export type weekTitleType = {
  className: string;
  date: moment.Moment;
  day: string;
};

export type calendarType = {
  key: string;
  className: string;
  day: string;
  isToday: boolean;
};

//schedule data type
export type scheduleType = {
  key: string;
  contents: string;
  date: string;
};

// 모달에서 입력받는 데이터 타입
export type scheduleInputType = {
  title?: string;
  name?: string;
  date?: string;
  content?: string;
};

// export type calendarType = {
//   week: number;
//   weekRow: {
//     key: string;
//     className: string;
//     day?: string;
//     isToday?: boolean;
//   };
// };
