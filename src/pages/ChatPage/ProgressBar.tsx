import React, { useState, useEffect, useRef } from 'react';
import styles from './chatPage.module.scss';

interface Props {
  length: number;
  count: number;
  setCount: (length: number) => void;
  maxCount: number;
}

function ProgressBar({ length, count, setCount, maxCount }: Props) {
  // 진행bar 동적으로 width 설정
  const progressBarWidth = `${(count / maxCount) * 600}px`;

  // 진행도 설정
  useEffect(() => {
    if (count < maxCount) {
      setCount(length);
    } 
  }, [count, length]);

  return (
    <div className={styles.countContainer}>
      <p className={styles.countText}>남은 대화 턴 수 ({count}/{maxCount})</p>
      <div className={styles.progressBar}>
        <div className={styles.countingBar} style={{ width: progressBarWidth }}></div>
      </div>
    </div>
  )
}

export default ProgressBar;