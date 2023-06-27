import React from 'react';
import styles from './chatPage.module.scss';

interface Props {
  count: number;
  maxCount: number;
}

function ProgressBar({ count, maxCount }: Props) {
  // 진행bar 동적으로 width 설정
  const progressBarWidth = `${(count / maxCount) * 600}px`;

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