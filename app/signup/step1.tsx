import InputBox from '@/components/inputBox/InputBox';
import styles from './signup.module.scss';
import { useState, forwardRef, useImperativeHandle, useRef, Fragment } from 'react';
import Button from '@/components/button/button';

export type Step1InputValueTypes = {
  comName: string;
  comNumber: string;
  domain: string;
  partner: string;
};

type Step1Props = {
  validation: boolean;
};

export type Step1InputHandle = {
  getData: () => Step1InputValueTypes;
};

const Step1 = forwardRef<Step1InputHandle, Step1Props>((props: Step1Props, ref): JSX.Element => {
  const refCompanyName = useRef<HTMLInputElement>(null);
  const refCompanyNumber = useRef<HTMLInputElement>(null);
  const refDomain = useRef<HTMLInputElement>(null);
  const refPartner = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState<Step1InputValueTypes>({
    comName: '',
    comNumber: '',
    domain: '',
    partner: '',
  });

  useImperativeHandle(ref, () => {
    return {
      getData() {
        if (validateForm()) {
          console.log('유효성 체크 완료');
          setErrorMessage({ comName: '', comNumber: '', domain: '', partner: '' });
          return {
            comName: refCompanyName.current?.value || '',
            comNumber: refCompanyNumber.current?.value || '',
            domain: refDomain.current?.value || '',
            partner: refPartner.current?.value || '',
          };
        } else {
          console.log('유효성 체크 실패');
          return {
            comName: '',
            comNumber: '',
            domain: '',
            partner: '',
          };
        }
      },
    };
  });

  const validateForm = () => {
    const domainRegex = /^[a-zA-Z0-9_-]{2,20}$/;
    if (!domainRegex.test(refDomain.current?.value!)) {
      setErrorMessage({ ...errorMessage, domain: '영문자/숫자/- 만 사용하여 입력해주세요.' });
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <InputBox
        ref={refCompanyName}
        type="text"
        name="company"
        placeholder="회사명을 입력해주세요"
        label="회사명*"
        maxLength={20}
        inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
        errors={errorMessage.comName}
      />
      <div className={styles.companyNo_area}>
        <InputBox
          ref={refCompanyNumber}
          type="text"
          name="companyNo"
          placeholder="000-00-000000"
          label="사업자번호*"
          maxLength={20}
          inputStyle={{ marginRight: '5%', width: 200, fontSize: 12 }}
          errors={errorMessage.comNumber}
        />
        <Button label="조회" customStyle={{ width: 60, height: 30, marginLeft: 0 }} />
      </div>
      <InputBox
        ref={refDomain}
        type="text"
        name="domain"
        placeholder="영문 소문자/숫자/- 만 사용하여 입력해주세요."
        label="도메인명*"
        maxLength={20}
        inputStyle={{ marginRight: '10%', width: 320, height: 20, fontSize: 12 }}
        errors={errorMessage.domain}
      />
      {/* <Button /> */}
      <InputBox
        ref={refPartner}
        type="text"
        name="partner"
        placeholder="파트너사명으로 검색해주세요. (최소 2글자 이상 입력)"
        label="담당 파트너사"
        maxLength={20}
        minLength={2}
        inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
        errors={errorMessage.partner}
      />
    </div>
  );
});
export default Step1;
