"use client";

import React, { useEffect, useState } from "react";
//import { selectBoxDataType } from "./ModalComponent";

function SelectBoxComponent({
  selectValue,
  getTypeFunction,
}: {
  selectValue: {
    val: number;
    name: string;
  }[];
  getTypeFunction: (name: string) => void;
}) {
  useEffect(() => {
    //getTypeFunction();
  }, []);
  const inputType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    getTypeFunction(e.target.value);
  };

  return (
    <div>
      {/* <select id="selectView" onChange={inputType}>
        {selectValue.map((el) => {
          return <option value={el.name}>{el.name}</option>;
        })}
      </select> */}
    </div>
  );
}

export default SelectBoxComponent;
