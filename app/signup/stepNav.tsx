'use client';

import { useRef, useState, RefObject, useCallback, useEffect } from 'react';
import styles from './stepNav.module.scss';

type StepProps = {
  step: number;
  onClickHandler?: () => void;
};

const StepNav = ({ step }: StepProps) => {

  return (
    <div className={styles.container}>
      <div className={step === 1 ? styles.circle_clicked : styles.circle}>
        <p className={styles.num}>1</p>
        <p className={styles.text}>회사 정보</p>
      </div>
      <div className={styles.line}></div>
      <div className={step === 2 ? styles.circle_clicked : styles.circle}>
        <p className={styles.num}>2</p>
        <p className={styles.text}>계정 정보</p>
      </div>
      <div className={styles.line}></div>
      <div className={step === 3 ? styles.circle_clicked : styles.circle}>
        <p className={styles.num}>3</p>
        <p className={styles.text}>가입 완료</p>
      </div>
    </div>
  );
};
export default StepNav;
