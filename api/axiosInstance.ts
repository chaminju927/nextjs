import Axios, { AxiosResponse } from "axios";
import { applyDataType } from "@/types/common";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:8080/worktrip",
});

// main component
export const searchData: any = async (startDate: string, endDate: string) => {
  try {
    const response: AxiosResponse = await axiosInstance.get("/list", {
      params: {
        startDate: startDate,
        endDate: endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// maintable component
export const deleteData: any = async (deleteNo: number) => {
  try {
    const response: AxiosResponse = await axiosInstance.delete(`/${deleteNo}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// modal component
export const postData: any = async ({
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
  try {
    const response: AxiosResponse = await axiosInstance.post("/", {
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
  } catch (error) {
    console.log(error);
  }
};
