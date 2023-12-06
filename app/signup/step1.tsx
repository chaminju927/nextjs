"use client";

import InputBox from "@/components/inputBox/InputBox";
import styles from "./signup.module.scss";
import {
  RefObject,
  forwardRef,
  useState,
  ForwardedRef,
  useImperativeHandle,
  useRef,
} from "react";

interface Step1Ref {
  inputRef: RefObject<HTMLInputElement>;
}
const Step1 = forwardRef(({}, ref: ForwardedRef<Step1Ref>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [test4, setTest4] = useState<string>("");
  const [test3, setTest3] = useState<string>("");
  const [test2, setTest2] = useState<string>("");
  const [test1, setTest1] = useState<string>("");

  useImperativeHandle(
    ref,
    () => ({
      inputRef,
    }),
    [inputRef]
  );
  return (
    <div>
      <form className={styles.form}>
        <InputBox
          type="text"
          name="company"
          placeholder="회사명을 입력해주세요"
          label="회사명*"
          maxLength={20}
          ref={inputRef} // ref={(el) => {
          //   //eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //   //@ts-expect-error
          //   inputRef!.current[0] = el;
          //   //setTest4(e.target.value);
          // }}
          inputStyle={{ marginRight: "10%", width: 320, fontSize: 12 }}
        />
        <InputBox
          type="text"
          name="companyNo"
          value={test3}
          placeholder="000-00-000000"
          label="사업자번호*"
          maxLength={20}
          onChangeHandler={(e) => {
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            inputRef1!.current[1] = e.target.value;
            setTest3(e.target.value);
          }}
          inputStyle={{ marginRight: "10%", width: 200, fontSize: 12 }}
        />
        {/* <Button label="조회" /> */}
        <InputBox
          type="text"
          name="domain"
          value={test2}
          placeholder="영문 소문자/숫자/- 만 사용하여 입력해주세요."
          label="도메인명*"
          maxLength={20}
          onChangeHandler={(e) => {
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            inputRef1!.current[2] = e.target.value;
            setTest2(e.target.value);
          }}
          inputStyle={{
            marginRight: "10%",
            width: 320,
            height: 20,
            fontSize: 12,
          }}
        />
        {/* <Button /> */}
        <InputBox
          type="text"
          name="partner"
          value={test1}
          placeholder="파트너사명으로 검색해주세요. (최소 2글자 이상 입력)"
          label="담당 파트너사"
          maxLength={20}
          minLength={2}
          onChangeHandler={(e) => {
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            inputRef1!.current[3] = e.target.value;
            setTest1(e.target.value);
          }}
          inputStyle={{ marginRight: "10%", width: 320, fontSize: 12 }}
        />
      </form>
    </div>
  );
});

export default Step1;
