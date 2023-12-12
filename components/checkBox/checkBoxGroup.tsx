'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './checkBox.module.scss';
import Icon from '../icon/icon';

export type checkType = {
  id: number;
  value: string;
  label: string;
  iconType: string;
  name: string;
}[];

type CheckGroupProps = {
  labels: checkType;
  isChecked: boolean;
  allCheckHandler?: (checked: boolean) => void;
  mustCheckHandler?: (checked: boolean) => void;
  customStyle?: React.CSSProperties;
  onChangeHandler?: (value: boolean) => void;
};

const CheckBoxGroup = ({ labels, isChecked, allCheckHandler, mustCheckHandler }: CheckGroupProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  useEffect(() => {
    console.log(labels);
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const checkClick = () => {
    //전체 선택 클릭시 콜백
    if (allCheckHandler) {
      let checkValue: boolean;
      setChecked((prevState) => {
        checkValue = !prevState;
        return !prevState;
      });
      allCheckHandler(checkValue!);
    } else if (mustCheckHandler) {
      //필수 선택
      let mustCheckValue: boolean;
      setChecked((prevState) => {
        mustCheckValue = !prevState;
        return !prevState;
      });
      mustCheckHandler(mustCheckValue!);
    } else {
      // 일반 선택
      setChecked((prevState) => !prevState);
    }
  };

  return (
    <>
      {labels.map((el) => {
        return (
          <div className={styles.wrap} key={el.id}>
            <input
              name={el.name}
              id={el.name}
              type="checkbox"
              className={styles.checkBox}
              value={el.value}
              onChange={onChangeHandler}
            />
            <Icon iconType={el.iconType} iconState={checked} onClick={checkClick}/>
            <label htmlFor={el.name} className={styles.label}>
              {el.label}
            </label>
          </div>
        );
      })}
    </>
  );
};
export default CheckBoxGroup;
