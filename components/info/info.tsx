'use client';

import styles from './info.module.scss';
import { useRef, useState, RefObject, useCallback, useEffect } from 'react';

type textProps = {
  id: number;
  content: string;
}[];

type InfoProps = {
  title: string;
  text: textProps;
};

const Info = (infoText: InfoProps) => {
  //   useEffect(() => {
  //     console.log(infoText.text);
  //   }, []);

  return (
    <>
      {/* <p className={styles.title}>{infoText.title}</p> */}
      {infoText.text.map((el, index) => {
        return (
          <p className={styles.text} key={index}>
            {el.content}
          </p>
        );
      })}
    </>
  );
};
export default Info;
