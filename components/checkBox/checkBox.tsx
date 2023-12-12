'use client';

import React, { useState, useEffect, useCallback, forwardRef, useRef } from 'react';
import styles from './checkBox.module.scss';
import Icon from '../icon/icon';

type CheckboxProps = {
  name: string;
  label: string;
  value: string;
  iconType: string;
  isChecked: boolean;
  allCheckHandler?: any;
  mustCheckHandler?: (checked: boolean) => void;
  customStyle?: React.CSSProperties;
  onChangeHandler?: (value: boolean) => void;
};

const Checkbox = ({
  name,
  label,
  value,
  iconType,
  isChecked,
  allCheckHandler,
  mustCheckHandler,
}: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(isChecked);
  const [currentValue, setCurrentValue] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
  };

  const checkClick = () => {
    //전체 선택 클릭시 콜백
    if (value === 'all') {
      let checkValue: boolean;
      setChecked((prevState) => {
        checkValue = !prevState;
        return !prevState;
      });
      allCheckHandler(checkValue!);
    } else if (value === 'must' && mustCheckHandler) {
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

  useEffect(() => {
    //전체 선택 버튼 아닌경우
    if (value !== 'all') {
      setChecked(isChecked);
    } else {
      return;
    }
  }, [isChecked]);

  return (
    <div className={styles.wrap}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className={styles.checkBox}
        checked={checked}
        value={value}
        onChange={onChangeHandler}
      />
      <Icon iconType={iconType} iconState={checked} onClick={checkClick} />
      <label htmlFor={name} className={styles.label} id={label}>
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
