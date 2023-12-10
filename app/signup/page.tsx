"use client";

import { useRef, useState, RefObject, useCallback, useEffect } from "react";
import Button from "@/components/button/button";
import styles from "./signup.module.scss";
import Step1 from "./step1";
//import Step2, { Step2InputHandle } from "./step2";
//import Checkbox from '@/components/checkBox/checkBox';

const Signup = () => {
  // Step 1 컴포넌트 핸들러
  const refStep1 = useRef<any>(null);
  //const refStep2 = useRef<Step2InputHandle>(null);
  const [step, setStep] = useState<number>(1);

  const [checkState, setCheckState] = useState<boolean>(false);

  const moveNext = () => {
    // Step1 함수 호출해서 입력값 가져오기
    console.log(refStep1.current?.getData());
    if (step + 1 <= 3) {
      // 유효성 검사 후 클릭 가능
      setStep(step + 1);
    }
  };

  const movePrev = () => {
    if (step - 1 >= 1) {
      setStep(step - 1);
    }
  };
  const submit = () => {
    //유효성검사 및 체크박스 체크여부 확인후 submit
    const data1 = refStep1.current?.getData();
    //const data2 = refStep2.current?.getData();
    //console.log(data1, data2);
  };

  const checkItemHandler = (checked: boolean) => {
    checked ? setCheckState(true) : setCheckState(false);
    console.log(checked);
  };
   // 정규식 모음 객체
  //  const inputRegexs = {
  //   // 아이디 : 문자로 시작하여, 영문자, 숫자, 하이픈(-), 언더바(_)를 사용하여 3~20자 이내
  //   idRegex: /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/,
  //   // 비밀번호 : 최소 8자 이상, 최소한 하나의 대문자, 하나의 소문자, 하나의 숫자, 하나의 특수문자를 포함, 공백 허용하지 않음
  //   pwRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
  //   // 닉네임 : 영어 대/소문자, 숫자, 한글 자모음 조합, 2~10자 이내
  //   nicknameRegex: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/,
  // };

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
          <Step1 ref={refStep1} validation={true} />

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
          {/*  <Step2 ref={refStep2} validation={true} />
         <div className={styles.nav_check_area}>
            <Checkbox
              name="chk_agree_all"
              label="전체동의"
              value="0"
              iconType="CHECK_BOX"
              isChecked={checkState}
              checkItemHandler={checkItemHandler}
            />
            <Checkbox
              name="chk_agree_all"
              label="[필수] 서비스 이용약관 동의"
              value="1"
              iconType="CHECK_BOX"
              isChecked={checkState}
            />
            <Checkbox
              name="chk_agree_all"
              label="[필수] 개인정보 수집 및 이용 동의"
              value="2"
              iconType="CHECK_BOX"
              isChecked={checkState}
            />
            <Checkbox
              name="chk_agree_all"
              label="[필수] 만 14세 이상입니다."
              value="3"
              iconType="CHECK_BOX"
              isChecked={checkState}
            />
            <Checkbox
              name="chk_agree_all"
              label="[선택] 마케팅 정보 수신 동의"
              value="4"
              iconType="CHECK_BOX"
              isChecked={checkState}
            /> 
          </div>*/}
          <div className={styles.nav_button_area}>
            <Button
              label="가입하기"
              customStyle={{
                width: 150,
                height: 42,
                backgroundColor: "#1e334c",
                color: "#fff",
                marginLeft: 80,
                marginTop: 20,
              }}
              onClick={submit}
            />
            <Button
              label="이전"
              customStyle={{
                width: 150,
                height: 42,
                backgroundColor: "#1e334c",
                color: "#fff",

                marginTop: 20,
              }}
              onClick={movePrev}
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
