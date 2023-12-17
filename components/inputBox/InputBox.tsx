import React, { useState, forwardRef, useEffect, useImperativeHandle } from 'react';
import styles from './inputBox.module.scss';

type InputBoxProps = {
  value?: string;
  type: string;
  name: string;
  onChangeHandler?: (e: any) => void;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  label?: string;
  isImportant?: boolean;
  customStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  errorMessage?: string;
};
const InputBox = forwardRef(
  (
    {
      onChangeHandler,
      value,
      type,
      name,
      placeholder,
      minLength = 2,
      maxLength,
      label,
      isImportant,
      customStyle,
      inputStyle,
      errorMessage,
    }: InputBoxProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const [enterValue, setEnterValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = e.currentTarget.value;
      // if (currentValue.length <= minLength) {
      //   setLengthError(`최소 ${minLength} 자리 이상 입력 해 주세요`);
      // } else {
      //   setLengthError('');
      // }
      setEnterValue(currentValue);
    };

    useEffect(() => {
      console.log(errorMessage);
    }, []);

    return (
      <div className={styles.container} style={{ ...customStyle }}>
        <div className={styles.input_area}>
          {label && (
            <label htmlFor={name} className={styles.label}>
              {label}
              {isImportant && <span className={styles.required}>*</span>}
            </label>
          )}
          <input
            ref={ref}
            type={type}
            name={name}
            id={name}
            value={enterValue}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`${styles.inputbox}`}
            onChange={onChange}
            style={{ ...inputStyle }}
          />
        </div>

        <div className={styles.error_area}>
          <span className={styles.error_text}>{errorMessage}</span>
        </div>
      </div>
    );
  },
);

export default InputBox;
