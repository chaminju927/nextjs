'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/inputBox/InputBox';
import styles from './signup.module.scss';
import SelectBox from '@/components/selectBox/selectBox';

const select1 = ['직무1', '직무2', '직무3'];

const select2 = ['직책1', '직책2', '직책3'];

export default function Step2() {
  return (
    <div>
      <form className={styles.form}>
        <InputBox
          type="text"
          name="domain"
          value=""
          placeholder="회사명을 입력해주세요"
          label="담당자 이름*"
          maxLength={20}
          inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
        />
        <InputBox
          type="text"
          name="domain"
          value=""
          placeholder="000-00-000000"
          label="아이디(사번)*"
          maxLength={20}
          inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
        />
        <InputBox
          type="text"
          name="domain"
          value=""
          placeholder="영문 소문자/숫자/- 만 사용하여 입력해주세요."
          label="이메일*"
          maxLength={20}
          inputStyle={{ marginRight: '10%', width: 320, height: 20, fontSize: 12 }}
        />
        {/* <Button /> */}
        <SelectBox value={select1} size={130} placeholder="직무 선택" label="직무/직책" />
        <SelectBox value={select2} size={130} placeholder="직책 선택" />
        {/* <InputBox
          type="text"
          name="domain"
          value=""
          placeholder="파트너사명으로 검색해주세요. (최소 2글자 이상 입력)"
          label="직무/직책"
          maxLength={20}
          minLength={2}
          inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
        /> */}
   
        <InputBox
          type="text"
          name="domain"
          value=""
          placeholder="파트너사명으로 검색해주세요. (최소 2글자 이상 입력)"
          label="전화번호"
          maxLength={20}
          minLength={2}
          inputStyle={{ marginRight: '10%', width: 320, fontSize: 12 }}
        />
      </form>
    </div>
  );
}
