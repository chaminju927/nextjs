'use client';

import { useRef, useState, RefObject, useCallback, useEffect } from 'react';
import Button from '@/components/button/button';
import styles from './signup.module.scss';
import Step1, { Step1InputHandle } from './step1';
import Step2, { Step2InputHandle } from './step2';
import Checkbox from '@/components/checkBox/checkBox';
import CheckBoxGroup from '@/components/checkBox/checkBoxGroup';
import Completed from '@/components/completed/completed';
import logo from '../../assets/image/bi_vertical.png';
import Info from '@/components/info/info';

type mustCheckBoxes = {
  0: boolean;
  1: boolean;
  2: boolean;
};
const labels = [
  { id: 0, value: 'all', label: '전체동의', iconType: 'CHECK_BOX', name: 'chk_agree_all' },
  { id: 1, value: 'must', label: '[필수] 서비스 이용약관 동의', iconType: 'CHECK_BOX', name: 'chk_service' },
  { id: 2, value: 'must', label: '[필수] 개인정보 수집 및 이용 동의', iconType: 'CHECK_BOX', name: 'chk_private' },
  { id: 3, value: 'must', label: '[필수] 만 14세 이상입니다.', iconType: 'CHECK_BOX', name: 'chk_age' },
  { id: 4, value: 'select', label: '[선택] 마케팅 정보 수신 동의', iconType: 'CHECK_BOX', name: 'chk_marketing' },
];
const signupComplete = {
  title: 'Pine Work 회원가입 완료',
  sub_title: 'JNESS 홍길동님 지금 바로 Free상품을 무료로 이용하실 수 있습니다!',
  text: '압도적 시장점유율 1위 근로시간관리 솔루션 MOffice의 클라우드 서비스 Pine Work에서 다양하고 수준 높은 근로시간관리 서비스를 경험해보세요!',
  btn_label: 'Pine Work 시작하기',
};
const imgComplete = {
  imgSrc: logo,
  width: 150,
  height: 100,
};

const infoProps = {
  title: ' dd',
  text: [
    {
      id: 0,
      content: '회원가입 완료 즉시 하단에 입력하시는 회사정보로 Pine Work Free 상품을 무료로 이용하실 수 있습니다.',
    },
    {
      id: 1,
      content:
        'Free 상품은 최대 10인까지 조직원 추가가 가능하며, 추가 인원 등록이 필요하실 경우 추가 상품 가입 부탁드립니다.',
    },
  ],
};

const Signup = (): JSX.Element => {
  // Step 1 컴포넌트 핸들러
  const refStep1 = useRef<Step1InputHandle>(null);
  const refStep2 = useRef<Step2InputHandle>(null);
  const [step, setStep] = useState<number>(1);
  const [checkState, setCheckState] = useState<boolean>(false);
  const [checkValid, setCheckValid] = useState<mustCheckBoxes>({ 0: false, 1: false, 2: false });

  const moveNext = () => {
    const validData1 = refStep1.current?.getData();
    //유효성 검사 완료 후 페이지 이동
    // if (validData1?.comName !== '' && step + 1 <= 3) {
    //   setStep(step + 1);
    // }
    if (step + 1 <= 3) {
      setStep(step + 1);
    }
  };
  // const movePrev = () => {
  //   if (step - 1 >= 1) {
  //     setStep(step - 1);
  //   }
  // };

  //필수 체크박스 선택
  const checkValidHandler = (checked: boolean) => {
    checked ? setCheckValid({ ...checkValid, 0: true }) : setCheckValid({ ...checkValid, 0: false });
  };
  const checkValidHandler2 = (checked: boolean) => {
    checked ? setCheckValid({ ...checkValid, 1: true }) : setCheckValid({ ...checkValid, 1: false });
  };
  const checkValidHandler3 = (checked: boolean) => {
    checked ? setCheckValid({ ...checkValid, 2: true }) : setCheckValid({ ...checkValid, 2: false });
  };

  const submit = () => {
    //유효성 검사 완료한 데이터
    const validData1 = refStep1.current?.getData();
    const validData2 = refStep2.current?.getData();
    console.log(validData1, validData2);

    // 필수 체크 확인 후 페이지 이동
    // if (validData2?.email !== '' && checkValid[0] && checkValid[1] && checkValid[2]) {
    //   console.log('submit');
    // }

    if (step + 1 <= 3) {
      setStep(step + 1);
    }
  };

  //전체선택 콜백
  const checkItemHandler = (checked: boolean) => {
    checked ? setCheckState(true) : setCheckState(false);
  };

  return (
    <div className={styles.area}>
      <div className={styles.container}>
        <div style={{ display: step === 1 || step === 2 ? 'block' : 'none' }} className={styles.header}>
          <h1 className={styles.signup_title}>회원가입</h1>
          <p className={styles.sub_title}>
            No .1 근로시간관리 솔루션 MOffice를 <br /> 이제 클라우드 서비스 Pine Work로 경험해보세요!
          </p>
        </div>
        {/* <div className={styles.area_text}>
          <span className={styles.label}>{step} 단계</span>
        </div> */}
        <div style={{ display: step === 1 || step === 2 ? 'block' : 'none' }} className={styles.infomation}>
          {/* <Info infoText={infoProps.text} /> */}
        </div>

        <div style={{ display: step === 1 ? 'block' : 'none' }}>
          <Step1 ref={refStep1} validation={true} />

          <div className={styles.nav_button_area}>
            <Button
              label="다음"
              customStyle={{
                width: 320,
                height: 42,
                backgroundColor: '#1e334c',
                color: '#fff',
                marginTop: 20,
              }}
              onClick={moveNext}
            />
          </div>
        </div>
        <div style={{ display: step === 2 ? 'block' : 'none' }}>
          <Step2 ref={refStep2} validation={true} />
          <div className={styles.nav_check_area}>
            <CheckBoxGroup
              labels={labels}
              isChecked={checkState}
              allCheckHandler={checkItemHandler}
              mustCheckHandler={checkValidHandler}
            />
            {/* 
            <Checkbox
              name="chk_agree_all"
              label="전체동의"
              value="all"
              iconType="CHECK_BOX"
              allCheckHandler={checkItemHandler}
              isChecked={checkState}
            />
            <Checkbox
              name="chk_agree_service"
              label="[필수] 서비스 이용약관 동의"
              value="must"
              iconType="CHECK_BOX"
              isChecked={checkState}
              mustCheckHandler={checkValidHandler1}
            />
            <Checkbox
              name="chk_agree_private"
              label="[필수] 개인정보 수집 및 이용 동의"
              value="must"
              iconType="CHECK_BOX"
              isChecked={checkState}
              mustCheckHandler={checkValidHandler2}
            />
            <Checkbox
              name="chk_agree_age"
              label="[필수] 만 14세 이상입니다."
              value="must"
              iconType="CHECK_BOX"
              isChecked={checkState}
              mustCheckHandler={checkValidHandler3}
            />
            <Checkbox
              name="chk_agree_marketing"
              label="[선택] 마케팅 정보 수신 동의"
              value="select"
              iconType="CHECK_BOX"
              isChecked={checkState}
            /> */}
          </div>
          <div className={styles.nav_button_area}>
            <Button
              label="가입하기"
              customStyle={{
                width: 320,
                height: 42,
                backgroundColor: '#1e334c',
                color: '#fff',
                marginTop: 20,
              }}
              onClick={submit}
            />
            {/* <Button
              label="이전"
              customStyle={{
                width: 150,
                height: 42,
                backgroundColor: '#1e334c',
                color: '#fff',
                marginTop: 20,
              }}
              onClick={movePrev}
            /> */}
          </div>
        </div>
        <div style={{ display: step === 3 ? 'block' : 'none' }}>
          <Completed mainText={signupComplete} loginData="" img={imgComplete} />
        </div>
      </div>
    </div>
  );
};
export default Signup;
