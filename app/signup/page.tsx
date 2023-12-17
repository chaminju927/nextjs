"use client";

import { useRef, useState, RefObject, useCallback, useEffect } from "react";
//import Button from '@/components/button/button';
import styles from "./signup.module.scss";
import Step1, { Step1InputHandle } from "./step1";
import Step2, { Step2InputHandle } from "./step2";
import Checkbox from "@/components/checkBox/checkBox";
import CheckBoxGroup from "@/components/checkBox/checkBoxGroup";
//import Completed from '@/components/completed/completed';
//import CheckImg from "../../../public/images/img_check.png";
import Info from "@/components/info/info";
import Image from "next/image";
//import horLogo from "../../../public/images/logo_hor.png";
import StepNav from "./stepNav";

const labels = [
  {
    id: 0,
    value: "all",
    label: "전체 동의",
    iconType: "CHECK_BOX",
    name: "chk_all",
  },
  {
    id: 1,
    value: "must1",
    label: "서비스 이용약관 동의",
    iconType: "CHECK_BOX",
    name: "chk_service",
  },
  {
    id: 2,
    value: "must2",
    label: "개인정보 수집 및 이용 동의",
    iconType: "CHECK_BOX",
    name: "chk_private",
  },
  {
    id: 3,
    value: "must3",
    label: "만 14세 이상입니다.",
    iconType: "CHECK_BOX",
    name: "chk_age",
  },
  {
    id: 4,
    value: "select",
    label: "[선택] 마케팅 정보 수신 동의",
    iconType: "CHECK_BOX",
    name: "chk_marketing",
  },
];
// const signupComplete = {
//   title: 'Pine Work 회원가입 완료',
//   sub_title: 'JNESS 홍길동님 지금 바로 Free상품을 무료로 이용하실 수 있습니다!',
//   text: '압도적 시장점유율 1위 근로시간관리 솔루션 MOffice의 클라우드 서비스 Pine Work에서 다양하고 수준 높은 근로시간관리 서비스를 경험해보세요!',
//   btn_label: 'Pine Work 시작하기',
// };
const mailComplete = {
  title: "본인인증 메일 전송 완료",
  text: '입력하신 이메일로 본인인증 메일을 전송했습니다. 받은 메일에 "본인 인증"버튼을 클릭하시면 회원가입이 완료됩니다.',
  btn_label: "로그인 하기",
};
// const imgChecked = {
//   imgSrc: CheckImg,
//   width: 120,
//   height: 120,
// };

const infoProps1 = {
  text: [
    {
      id: 0,
      content:
        "회원가입 완료 즉시 하단에 입력하시는 회사정보로 Pine Work Free 상품을 무료로 이용하실 수 있습니다.",
    },
    {
      id: 1,
      content:
        "Free 상품은 최대 10인까지 조직원 추가가 가능하며, 추가 인원 등록이 필요하실 경우 추가 상품 가입 부탁드립니다.",
    },
  ],
};
const infoProps2 = {
  text: [
    {
      id: 0,
      content:
        "하단에 입력하시는 계정 정보로 Pine Work 최고관리자 권한에 로그인 하실 수 있습니다.",
    },
    {
      id: 1,
      content:
        "최고관리자는 상품 관리/변경 및 서비스 관리 등 Pine Work의 모든 메뉴를 관리하실 수 있습니다.",
    },
  ],
};
const infoProps3 = {
  title: "혹시 이메일을 받지 못하셨나요?",
  text: [
    {
      id: 0,
      content: "이메일 철자 확인 및 스팸, 프로모션 메일함을 확인해 주십시오.",
    },
    {
      id: 1,
      content: "여기를 눌러 본인인증 메일 재전송 후 다시 시도해 주십시오.",
    },
    {
      id: 2,
      content:
        "관련 문의사항은 고객센터 또는 02-2202-0700으로 연락해 주시기 바랍니다.",
    },
  ],
};

const Signup = (): JSX.Element => {
  // Step 1 컴포넌트 핸들러
  const refStep1 = useRef<Step1InputHandle>(null);
  const refStep2 = useRef<Step2InputHandle>(null);
  const [step, setStep] = useState<number>(1);
  const [checkValid, setCheckValid] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<string>();

  const moveNext = () => {
    const validData1 = refStep1.current?.getData();
    //유효성 검사 완료 후 페이지 이동
    // if (validData1?.comName !== '' && step + 1 <= 3) {
    //   setStep(step + 1);
    // }
  
  };

  //필수 선택 체크박스 유효성 검사
  const mustCheckHandler = (valid: boolean) => {
    console.log(valid);
    setCheckValid(valid);
  };

  const submit = () => {
    //유효성 검사 완료한 데이터
    const validData1 = refStep1.current?.getData();
    const validData2 = refStep2.current?.getData();
    //console.log(validData1, validData2);

    //완료화면에 보낼 이메일 props
    setValidEmail(validData2?.email);

    //필수 체크 확인
    checkValid && console.log("가입하기");

    // if (step + 1 <= 3) {
    //   setStep(step + 1);
    // }
  };

  return (
    <div className={styles.area}>
      <div className={styles.container}>
        {/* <div>
          <Image src={horLogo} alt="파인메신저" className={styles.logo} />
        </div> */}
        <div
          style={{ display: step === 1 || step === 2 ? "block" : "none" }}
          className={styles.header}
        >
          <h1 className={styles.signup_title}>회원가입</h1>
          <p className={styles.sub_title}>
            No .1 근로시간관리 솔루션 MOffice를 이제 클라우드 서비스 Pine Work로
            경험해보세요!
          </p>
        </div>

        <div
          className={styles.area_text}
          style={{ display: step === 1 || step === 2 ? "block" : "none" }}
        >
          <StepNav step={step} />
        </div>

        {/* {step === 1 ? (
          <div style={{ display: 'block' }}>
            <Info textPropsData={infoProps1} />
          </div>
        ) : step === 2 ? (
          <div style={{ display: 'block' }}>
            <Info textPropsData={infoProps2} />
          </div>
        ) : (
          <></>
        )} */}

        <div style={{ display: step === 1 ? "block" : "none" }}>
          <Step1 ref={refStep1} validation={false} />
          <div className={styles.nav_button_area}>
            {/* <Button label="다 음" size="big" fillStyle="fillin" colorStyle="green" onClick={moveNext} /> */}
            <button onClick={moveNext}>다음</button>
          </div>
        </div>

        <div style={{ display: step === 2 ? "block" : "none" }}>
          <Step2 ref={refStep2} validation={true} />
          {/* <div className={styles.nav_check_area}>
            <CheckBoxGroup labels={labels} validCheckHandler={mustCheckHandler} />
          </div>
          <div className={styles.nav_button_area}>
            <Button label="가입하기" size="big" fillStyle="fillin" colorStyle="green" onClick={submit} />
          </div> */}
        </div>

        {/* <div style={{ display: step === 3 ? 'block' : 'none' }}>
          <Completed mainText={mailComplete} emailRef={validEmail} img={imgChecked} />
          <div className={styles.info_area}>
            <Info textPropsData={infoProps3} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Signup;
