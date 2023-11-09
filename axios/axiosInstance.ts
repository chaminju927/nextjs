import Axios, { AxiosResponse } from "axios";
import { applyDataType } from "@/types/common";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:8080/worktrip",
});

// main component
export const searchData: (
  startDate: string,
  endDate: string
) => Promise<applyDataType[]> = async (startDate: string, endDate: string) => {
  const response: AxiosResponse<applyDataType[]> = await axiosInstance.get<
    applyDataType[]
  >("/list", {
    params: {
      startDate,
      endDate,
    },
  });
  return response.data;
};

// maintable component
export const deleteData: (deleteNo: number) => Promise<string> = async (
  deleteNo: number
) => {
  const response: AxiosResponse<string> = await axiosInstance.delete(
    `/${deleteNo}`
  );
  return response.data;
};

// modal component
export const postData: (arg: applyDataType) => Promise<string> = async (
  arg
) => {
  const response: AxiosResponse<string> = await axiosInstance.post("/", {
    workType: arg.workType,
    startDate: arg.startDate,
    endDate: arg.endDate,
    reason: arg.reason,
    confirm: arg.confirm,
    workerNo: arg.workerNo,
    part: arg.part,
    name: arg.name,
    position: arg.position,
  });
  return response.data;
};
