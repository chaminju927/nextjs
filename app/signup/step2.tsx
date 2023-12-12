'use client';

import { useRef, useState, forwardRef, useCallback, useEffect, useImperativeHandle } from 'react';
import InputBox from '@/components/inputBox/InputBox';
import styles from './signup.module.scss';
import SelectBox from '@/components/selectBox/selectBox';

export type optionType = {
  label: '';
  value: string;
};
const posOptions = [
  { label: '직무1', value: 'POS0001' },
  { label: '직무2', value: 'POS0002' },
];

const titOptions = [
  { label: '직책1', value: 'TIT0001' },
  { label: '직책2', value: 'TIT0002' },
];
export type Step2InputValueTypes = {
  manager: string;
  workerNo: string;
  email: string;
  task: string;
  position: string;
  phone: string;
};
type Step2Props = {
  validation: boolean;
};
export type Step2InputHandle = {
  getData: () => Step2InputValueTypes;
};

const managerRegex = /^[가-힣]{2,8}$/;
const workerNoRegex = /^[0-9]{2,10}$/;
const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const phoneRegex = /^[0-9]{2,13}$/;

const Step2 = forwardRef<Step2InputHandle, Step2Props>((props: Step2Props, ref): JSX.Element => {
  const refManager = useRef<HTMLInputElement>(null);
  const refWorkerNo = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refTask = useRef<HTMLSelectElement>(null);
  const refPosition = useRef<HTMLSelectElement>(null);
  const refPhone = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState<Step2InputValueTypes>({
    manager: '',
    workerNo: '',
    email: '',
    task: '',
    position: '',
    phone: '',
  });

  useImperativeHandle(ref, () => {
    return {
      getData() {
        if (validateForm()) {
          console.log('유효성 체크 완료');
          setErrorMessage({ manager: '', workerNo: '', email: '', task: '', position: '', phone: '' });
          return {
            manager: refManager.current?.value || '',
            workerNo: refWorkerNo.current?.value || '',
            email: refEmail.current?.value || '',
            task: refTask.current?.value || '',
            position: refPosition.current?.value || '',
            phone: refPhone.current?.value || '',
          };
        } else {
          console.log('유효성 체크 실패');
          return {
            manager: '',
            workerNo: '',
            email: '',
            task: '',
            position: '',
            phone: '',
          };
        }
      },
    };
  });

  const validateForm = () => {
    if (!managerRegex.test(refManager.current?.value!)) {
      setErrorMessage({ ...errorMessage, manager: '한글만 사용하여 입력해주세요.' });
      return false;
    } else if (!workerNoRegex.test(refWorkerNo.current?.value!)) {
      setErrorMessage({ ...errorMessage, workerNo: '숫자만 사용하여 입력해주세요.' });
      return false;
    } else if (!emailRegex.test(refEmail.current?.value!)) {
      setErrorMessage({ ...errorMessage, email: '규칙에 맞는 이메일 주소를 입력해주세요.' });
      return false;
    } else if (!phoneRegex.test(refPhone.current?.value!)) {
      setErrorMessage({ ...errorMessage, phone: '규칙에 맞는 전화번호를 입력해주세요.' });
      return false;
    } else {
      return true;
    }
  };
  return (
    <div>
      <form className={styles.form}>
        <InputBox
          type="text"
          name="manager"
          placeholder="이름을 입력해주세요"
          label="담당자 이름*"
          maxLength={20}
          ref={refManager}
          inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
          errors={errorMessage.manager}
        />
        <InputBox
          type="text"
          name="workerNo"
          placeholder="아이디(사번)를 입력해주세요.(Pine Work와 공용으로 사용됩니다.)
          "
          label="아이디(사번)*"
          maxLength={20}
          ref={refWorkerNo}
          inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
          errors={errorMessage.workerNo}
        />
        <InputBox
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요.
          "
          label="이메일*"
          maxLength={20}
          ref={refEmail}
          inputStyle={{ marginRight: '10%', width: 320, height: 20, fontSize: 12 }}
          errors={errorMessage.email}
        />
        <div style={{ marginRight: '10%' }}>
          <label htmlFor="" className={styles.select_label}>
            직무/직책
          </label>
          <SelectBox options={posOptions} width={100} placeholder="직무 선택" ref={refTask} />
          <SelectBox options={titOptions} width={100} placeholder="직책 선택" ref={refPosition} />
        </div>

        <InputBox
          type="text"
          name="phone"
          placeholder="전화번호(-제외)를 입력해주세요.
          "
          label="전화번호"
          maxLength={20}
          minLength={2}
          ref={refPhone}
          inputStyle={{ marginRight: '10%', width: 320, fontSize: 12, marginTop: 10 }}
          errors={errorMessage.phone}
        />
      </form>
    </div>
  );
});

export default Step2;
