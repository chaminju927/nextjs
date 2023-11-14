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

export type dayType = () => string;

//functiontype
export type voidFnType = () => void;
export type JSXArrType = () => JSX.Element[];
export type JSXType = () => JSX.Element;

// Weekcomponent title
export type weekTitleType = {
  className: string;
  date?: moment.Moment;
  day: string;
};
