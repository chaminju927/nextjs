"use client";

import {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
  RefObject,
} from "react";
import Image from "next/image";
import InputBox from "@/components/inputBox/InputBox";
import Button from "@/components/button/button";
import styles from "./signup.module.scss";
import Step1 from "./step1";
//import Step2 from "./step2";
import Step3 from "./step3";

interface Step1Ref {
  inputRef: RefObject<HTMLInputElement>;
}
const checkLabel = [
  { id: 0, name: "전체동의" },
  { id: 1, name: "[필수] 서비스 이용약관 동의" },
  { id: 2, name: "[필수] 개인정보 수집 및 이용 동의" },
  { id: 3, name: "[필수] 만 14세 이상입니다." },
  { id: 4, name: "[선택] 마케팅 정보 수신 동의" },
];

const Signup = () => {
  const [step, setStep] = useState<number>(1);
  // const inputRef = useRef<React.ForwardedRef<HTMLInputElement>[]>([]);

  // const moveNext = () => {
  //   //    inputRef.current.forEach((el) => console.log(el));
  //   //console.log(inputRef.current['company'].value);
  //   // if (step + 1 <= 3) {
  //   //   setStep(step + 1);
  //   // }

  //   //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   //@ts-expect-error
  //   console.log(inputRef!.current.value);
  // };
  const step1Ref = useRef<Step1Ref>(null);
  const moveNext = () => {
    const companyName = step1Ref.current?.inputRef.current?.value;
    console.log("Company Name:", companyName);
    // const values = inputRefs.current.map((ref) => ref.current?.value);
    // console.log(values);

    if (step + 1 <= 3) {
      setStep(step + 1);
    }
  };

  const movePrev = () => {
    if (step - 1 >= 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={styles.area}>
      <div className={styles.container}>
        <h1 className={styles.signup_title}>회원가입</h1>
        <span className={styles.sub_title}>
          No .1 근로시간관리 솔루션 MOffice를 이제 클라우드 서비스 Pine Work로
          경험해보세요!
        </span>
        <div className={styles.area_text}>
          <span className={styles.label}>{step} 단계</span>
        </div>
        <div style={{ display: step === 1 ? "block" : "none" }}>
          <Step1 ref={step1Ref} />
          {/* <Step1 ref={inputRef} /> */}
          <div className={styles.nav_button_area}>
            <Button
              label="다음"
              customStyle={{
                width: 320,
                height: 42,
                backgroundColor: "#1e334c",
                color: "#fff",
                marginLeft: 80,
                marginTop: 20,
              }}
              onClick={moveNext}
            />
          </div>
        </div>
        <div style={{ display: step === 1 ? "none" : "block" }}>
          {/* <Step2 /> */}
          {/* <div className={styles.nav_check_area}>
            <Checkbox label={checkLabel} iconType="CHECK_BOX" />
          </div> */}
          <div className={styles.nav_button_area}>
            <Button
              label="가입하기"
              customStyle={{
                width: 320,
                height: 42,
                backgroundColor: "#1e334c",
                color: "#fff",
                marginLeft: 80,
                marginTop: 20,
              }}
              onClick={moveNext}
            />
          </div>
        </div>
        {/* <div style={{ display: step === 3 ? 'block' : 'none' }}>
        <Step3 />
        <div className={styles.nav_button_area}>
          <Button
            label="이전"
            customStyle={{ width: 320, height: 42, backgroundColor: '#1e334c', color: '#fff' }}
            onClick={movePrev}
          />
          <Button
            label="가입하기"
            customStyle={{ width: 320, height: 42, backgroundColor: '#1e334c', color: '#fff' }}
          />
        </div>
      </div> */}
      </div>
    </div>
  );
};
export default Signup;
