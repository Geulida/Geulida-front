import React from 'react';
import styles from './resultPage.module.scss';
import KakaoShareBtn from '../../component/result/KakaoShareBtn';
import Layout from '../../component/common/Layout';

function ResultPage() {
  return (
    <Layout>
      <div className={styles.text}>ResultPage입니다</div>
      <KakaoShareBtn />
    </Layout>
  );
}

export default ResultPage;
