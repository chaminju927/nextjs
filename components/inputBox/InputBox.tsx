import React, {
  useState,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from "react";
import styles from "./inputBox.module.scss";

type InputBoxProps = {
  type: string;
  name: string;
  value?: string;
  onChangeHandler?: (e: any) => void;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  label: string;
  customStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
};
const InputBox = forwardRef(
  (
    {
      onChangeHandler,
      value,
      type,
      name,
      placeholder,
      minLength = 1,
      maxLength,
      label,
      customStyle,
      inputStyle,
    }: InputBoxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [enterValue, setEnterValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = e.currentTarget.value;
      if (currentValue.length <= minLength) {
        setErrorMessage(`최소 ${minLength} 자리 이상 입력 해 주세요`);
      } else {
        setErrorMessage("");
      }
      setEnterValue(currentValue);
    };

    return (
      <div className={styles.container} style={{ ...customStyle }}>
        <div className={styles.input_area}>
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
          <input
            ref={ref}
            type={type}
            name={name}
            id={name}
            value={value || enterValue}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`${styles.inputbox}`}
            onChange={onChange}
            //onBlur={}  //focus out시
            style={{ ...inputStyle }}
          />
        </div>
        {errorMessage && (
          <div className={styles.error_area}>
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    );
  }
);

export default InputBox;
