'use client';

import Button from '@/components/button/button';
import InputBox from '@/components/inputBox/InputBox';
import styles from './signup.module.scss';

export default function Step3() {
  return (
    <div>
            <form className={styles.form}>
              <InputBox type="text" name="domain" value="" placeholder="" label="회사명" maxLength={20} />
           
            </form>
          </div>
  );
}