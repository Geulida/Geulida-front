import React, { useState, useEffect } from 'react';
import styles from './chatPage.module.scss';
import Layout from '../../components/common/Layout';

function ResultPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 10) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count]);

  // 진행bar 동적으로 width 설정
  const progressBarWidth = `${(count / 10) * 600}px`;

  return (
    <Layout>
      <div className={styles.main__container}>
        <div className={styles.count__container}>
          <p className={styles.countText}>남은 대화 턴 수 ({count}/10)</p>
          <div className={styles.progressBar}>
            <div className={styles.countingBar} style={{ width: progressBarWidth }}></div>
          </div>
        </div>
        <div className={styles.chat__container}>
          채팅 화면입니다
        </div>
      </div>
    </Layout>
  );
}

export default ResultPage;