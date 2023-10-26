import Axios, { AxiosResponse } from "axios";
import { applyDataType } from "@/types/common";

export const axios = Axios.create({
  baseURL: "http://localhost:8080/worktrip",
});

export const searchData = async (startDate: string, endDate: string) => {
  const response: AxiosResponse = await axios.get("/list", {
    params: {
      startDate: startDate,
      endDate: endDate,
    },
  });
  return response.data;
};

export const deleteData = async (deleteNo: number) => {
  const response: AxiosResponse = await axios.delete(`/${deleteNo}`);
  return response.data;
};

export const postData = async ({
  workType,
  startDate,
  endDate,
  reason,
  confirm,
  workerNo,
  part,
  name,
  position,
}: applyDataType) => {
  const response: AxiosResponse = await axios.post("/", {
    workType: workType,
    startDate: startDate,
    endDate: endDate,
    reason: reason,
    confirm: confirm,
    workerNo: workerNo,
    part: part,
    name: name,
    position: position,
  });
  return response.data;
};
