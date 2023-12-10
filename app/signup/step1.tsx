"use client";

import InputBox from "@/components/inputBox/InputBox";
import styles from "./signup.module.scss";
import { useState, useRef, useEffect, RefObject } from "react";

const Step1 = () => {
  const companyRef = useRef<HTMLInputElement>(null);
  const businessNoRef = useRef<HTMLInputElement>(null);
  const domainRef = useRef<HTMLInputElement>(null);
  const partnerRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className={styles.form} id="form">
        <InputBox
          type="text"
          name="company"
          placeholder="회사명을 입력해주세요"
          label="회사명*"
          maxLength={20}
          ref={companyRef}
          inputStyle={{ marginRight: "10%", width: 320, fontSize: 12 }}
        />

        <InputBox
          type="text"
          name="businessNo"
          placeholder="000-00-000000"
          label="사업자번호*"
          maxLength={20}
          ref={businessNoRef}
          inputStyle={{ marginRight: "10%", width: 200, fontSize: 12 }}
        />
        {/* <Button label="조회" /> */}
        <InputBox
          type="text"
          name="domain"
          placeholder="영문 소문자/숫자/- 만 사용하여 입력해주세요."
          label="도메인명*"
          maxLength={20}
          ref={domainRef}
          inputStyle={{
            marginRight: "10%",
            width: 320,
            height: 20,
            fontSize: 12,
          }}
        />

        <InputBox
          type="text"
          name="partner"
          placeholder="파트너사명으로 검색해주세요. (최소 2글자 이상 입력)"
          label="담당 파트너사"
          maxLength={20}
          minLength={2}
          ref={partnerRef}
          inputStyle={{ marginRight: "10%", width: 320, fontSize: 12 }}
        />
      </form>
    </div>
  );
};

export default Step1;
//
