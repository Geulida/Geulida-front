import React, { useState, useEffect } from 'react';
import styles from './chatPage.module.scss';
import Layout from '../../components/common/Layout';
import { ReactComponent as Send } from 'assets/Send.svg';

function ResultPage() {
  const [count, setCount] = useState<number>(0);
  const [userMsg, setUserMsg] = useState<string>();
  const [aiMsg, setAiMsg] = useState<string[]>();

  useEffect(() => {
    if (count < 10) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count]);

  // 진행bar 동적으로 width 설정
  const progressBarWidth = `${(count / 10) * 600}px`;

  // 메시지 입력 이벤트
  function handleChange() {
    
  }


  // 보내기 버튼 클릭 이벤트
  function handleClick() {
    
  }

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
          <div className={styles.message__container}>
            <div>{userMsg}</div>
          </div>

          <div className={styles.input__cotainer}>
            <input
              className={styles.input}
              placeholder='메시지를 입력하세요'
              onChange={(event) => {
                setUserMsg(event.target.value);
              }}
            />

            <button 
              className={styles.button} 
              onClick={(event) => handleClick()}
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResultPage;