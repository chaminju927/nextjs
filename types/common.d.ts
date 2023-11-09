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
