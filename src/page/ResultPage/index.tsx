import React from 'react';
import styles from './resultPage.module.scss';
import KakaoShareBtn from '../../component/result/KakaoShareBtn';

function ResultPage() {
  return (
    <>
      <div className={styles.text}>ResultPage입니다</div>
      <KakaoShareBtn />
    </>
  );
}

export default ResultPage;
