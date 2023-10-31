"use client";

import TableContainer from "@mui/material/TableContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import { applyDataType } from "../types/common";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SetStateAction, useEffect, Dispatch } from "react";
import Table from "@mui/material/Table";
import { deleteData } from "@/axios/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

function MainTableComponent({
  renderState,
  searchedData,
  noData,
  setNoData,
  setSearchedData,
}: {
  renderState: boolean;
  searchedData: applyDataType[];
  noData?: string;
  setNoData: Dispatch<SetStateAction<string>>;
  setSearchedData: Dispatch<SetStateAction<applyDataType[]>>;
}): JSX.Element {
  useEffect(() => {
    console.log(searchedData);
    console.log(renderState);
    console.log(noData);
  }, [searchedData, renderState, noData]);

  const [deleteNo, setDeleteNo] = useState<number>();

  const mutation = useMutation({
    mutationFn: deleteData,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const deleteReq = (no: number) => {
    setDeleteNo(no);
    // deleteData(no);
    mutation.mutate(no);
    if (searchedData.length === 1) {
      setNoData("해당 기간 내 신청 건이 없습니다.");
    } else {
      const reRender = searchedData.filter((el) => {
        return el.no !== deleteNo;
      });
      setSearchedData(reRender);
    }
  };

  return (
    <div>
      <div>
        <p>총 {searchedData.length}건</p>
      </div>
      <TableContainer>
        <Table className="table horizontal">
          <TableHead>
            <TableRow className="TableRow">
              <TableCell>유형</TableCell>
              <TableCell>시작일</TableCell>
              <TableCell>종료일</TableCell>
              <TableCell>사유</TableCell>
              <TableCell>등록일시</TableCell>
              <TableCell>결재</TableCell>
              <TableCell>결재자</TableCell>
              <TableCell>취소</TableCell>
            </TableRow>
          </TableHead>
          {renderState && searchedData && !noData ? (
            <TableBody>
              {searchedData.map((row) => (
                <TableRow key={row.no} className="TableRow">
                  <TableCell>{row.workType}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>{row.reason}</TableCell>
                  <TableCell>{row.enrollDate}</TableCell>
                  <TableCell>{row.confirm ? "O" : "X"}</TableCell>
                  <TableCell>
                    <span>
                      {row.workerNo} {row.part} {row.name} {row.position}
                    </span>
                  </TableCell>
                  <TableCell key={row.no}>
                    <DeleteIcon
                      sx={{ width: 16, marginRight: 0 }}
                      onClick={() => deleteReq(row.no!)}
                      id="deleteNo"
                      cursor="pointer"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={8} align="center">
                  {noData}
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
}
export default MainTableComponent;
