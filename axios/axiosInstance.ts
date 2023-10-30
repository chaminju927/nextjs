import Axios, { AxiosPromise, AxiosResponse } from "axios";
import { applyDataType } from "@/types/common";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:8080/worktrip",
});

// main component
export const searchData: <T>( // T = applyDataType[]
  startDate: string,
  endDate: string //위에서 정한 제네릭은 async문 안에서는 적용이 안되므로 파라미터 앞에서 재정의 해줘야 함
) => Promise<T> = async <T>(startDate: string, endDate: string) => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get<T>("/list", {
      params: {
        startDate: startDate,
        endDate: endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error as T;
  }
};

// maintable component
export const deleteData: (deleteNo: number) => Promise<string> = async (
  deleteNo: number
) => {
  try {
    const response: AxiosResponse<string> = await axiosInstance.delete(
      `/${deleteNo}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// modal component
export const postData: ({
  workType,
  startDate,
  endDate,
  reason,
  confirm,
  workerNo,
  part,
  name,
  position,
}: applyDataType) => Promise<string> = async ({
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
    return "error";
  }
};
