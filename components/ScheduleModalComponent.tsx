"use client";

import { scheduleInputType, voidFnType } from "@/types/common";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState, useCallback } from "react";
import DateInputComponent from "../../moffice-front/src/components/DateInputComponent";

// modal style
const style = {
  position: "absolute",
  color: "white",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 300,
  bgcolor: "transparent",
  //border: "1px solid #e5e5e5",
  boxShadow: 0,
  p: 0,
};
const storage = window.localStorage;

function ScheduleModalComponent({
  isOpen,
  closeModal,
  propsKey,
}: {
  isOpen: any;
  closeModal: voidFnType;
  propsKey: string;
}) {
  const [input, setInput] = useState<scheduleInputType>();

  const titleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleContent = e.target.value;
    setInput({
      ...input,
      title: titleContent,
    });
  };
  const nameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      name: e.currentTarget.value,
    });
  };
  const contentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      content: e.currentTarget.value,
    });
  };
  const cancel = () => {
    closeModal();
  };
  //확인 버튼 (데이터 입력)
  const submitBtn = (e: React.MouseEvent) => {
    setInput({
      ...input,
      date: propsKey,
    });
    storage.setItem(`${propsKey}`, JSON.stringify(input));
    console.log(storage.getItem(`${propsKey}`));
    closeModal();
  };
  const renderTitle = () => {
    return (
      <div className="inputTitle">
        <input
          id="inputTitleId"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={titleInput}
        />
      </div>
    );
  };
  const renderName = () => {
    return (
      <div className="inputName">
        <input
          id="inputNameId"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={nameInput}
        />
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div className="inputContent">
        <input
          type="text"
          placeholder="일정에 대한 설명을 입력해주세요"
          onChange={contentInput}
        />
      </div>
    );
  };
  const renderBtn = () => {
    return (
      <div className="buttonContainer">
        <button className="submitBtn" onClick={submitBtn}>
          확인
        </button>
        <button onClick={cancel}>취소</button>
      </div>
    );
  };

  return (
    <div>
      <Modal open={isOpen} onClose={closeModal} sx={style}>
        <div className="modalBox">
          {renderTitle()}
          {renderName()}
          {renderContent()}
          {renderBtn()}
        </div>
      </Modal>
    </div>
  );
}
export default ScheduleModalComponent;
