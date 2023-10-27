"use client";

import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ModalTableComponent from "../../components/ModalTableComponent";
import DateInputComponent from "../../components/DateInputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import TextAreaComponent from "../../components/TextAreaComponent";
import SelectBoxComponent from "../../components/SelectBoxComponent";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";
import { dataType, applyDataType } from "../../types/common";
import { postData } from "@/api/axiosInstance";

function ModalComponent(): JSX.Element {
  const [selectedData, setSelectedData] = useState<dataType>(); //결재자 선택
  const [selectedData2, setSelectedData2] = useState<dataType>(); //참조자 선택
  const [applyData, setApplyData] = useState<applyDataType>({
    workType: "",
    startDate: "",
    endDate: "",
    reason: "",
    confirm: false,
    workerNo: 0,
    part: "",
    name: "",
    position: "",
  }); //post요청시 보내는 데이터

  useEffect(() => {
    console.log(applyData);
  }, [applyData]);

  const selectValue = [
    { val: 1, name: "[국내]시스템패치" },
    { val: 2, name: "[국내]영업활동" },
    { val: 3, name: "[국내]외부일정" },
    { val: 4, name: "[국내]정기점검" },
  ];

  // axios.post 요청
  const closeModal: (e: React.MouseEvent) => void = () => {
    window.close();
    postData({
      workType: applyData.workType,
      startDate: applyData.startDate,
      endDate: applyData.endDate,
      reason: applyData.reason,
      confirm: applyData.confirm,
      workerNo: applyData.workerNo,
      part: applyData.part,
      name: applyData.name,
      position: applyData.position,
    });
  };
  // 결재자 선택 콜백
  const sendData = (data: dataType) => {
    setSelectedData(data);
    setApplyData({
      ...applyData,
      workerNo: data.workerNo,
      name: data.name,
      part: data.part,
      position: data.position,
    });
  };
  //참조자 선택 콜백
  const sendData2 = (data: dataType) => {
    setSelectedData2(data);
  };

  // 출장명 선택
  const getType = (value: string) => {
    console.log(value);
    setApplyData({ ...applyData, workType: value });
  };

  //신청시 날짜 선택
  const applyDateFunction1 = (inputDate: string) => {
    console.log();
    setApplyData({ ...applyData, startDate: inputDate });
  };
  const applyDateFunction2 = (inputDate: string) => {
    console.log();
    setApplyData({ ...applyData, endDate: inputDate });
  };

  // 사유 입력
  const applyReason = (inputText: string) => {
    console.log(inputText);
    setApplyData({ ...applyData, reason: inputText });
  };

  return (
    <div className="popBackground">
      <form name="frm">
        <div className="popWrap">
          <h4 className="popTit">출장 신청 정보</h4>
        </div>
        <section>
          <div id="tableContainer">
            <div className="item1 item-top">
              <p>출장명</p>
            </div>
            <div className="item item-top">
              <SelectBoxComponent
                selectValue={selectValue}
                getTypeFunction={getType}
              />
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">
              <p>신청일</p>
            </div>
            <div className="item dateContainer">
              <div className="dateControl">
                <div className="dateContainer">
                  <DateInputComponent applyStartDate={applyDateFunction1} />
                </div>
                ~
                <div className="dateContainer">
                  <DateInputComponent applyEndDate={applyDateFunction2} />
                </div>
                <div className="checkAllday dateContainer">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          size="small"
                          sx={{
                            "&.Mui-checked": {
                              color: "#00c0aa",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: 13 }}>종일 일정</Typography>
                      }
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">
              <p className="infoTag">신청 사유</p>
            </div>
            <div className="item">
              <TextAreaComponent
                content="신청사유를 입력하세요"
                getReason={applyReason}
              />
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">
              <p>결재자 목록</p>
            </div>
            <div className="item">
              <ModalTableComponent
                selectedType="결재자"
                propFunction={sendData}
              />
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">
              <p>결재자 선택</p>
            </div>
            <div className="item">
              <TextAreaComponent
                content="결재자를 선택해주세요."
                selectedData={selectedData}
                getReason={function (inputText: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
          {/* <div id="tableContainer" className="listBox">
            <div className="item1">
              <p>참조자 목록</p>
            </div>
            <div className="item">
              <ModalTableComponent
                selectedType="참조자"
                propFunction={sendData2}
              />
            </div>
          </div> */}
          {/* <div id="tableContainer">
            <div className="item1">
              <p>참조자 선택</p>
            </div>
            <div className="item">
              <div className="selectBox">
                <TextAreaComponent
                  content="추가된 데이터가 없습니다."
                  selectedData={selectedData2}
                />
              </div>
            </div>
          </div> */}
        </section>

        <div className="popBtnWrap" onClick={closeModal}>
          <ButtonComponent
            btnName="신청"
            icon={<CheckIcon sx={{ width: 20, marginRight: 0 }} />}
          />
        </div>
      </form>
    </div>
  );
}
export default ModalComponent;
