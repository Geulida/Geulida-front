import React from 'react';
import styles from './chatPage.module.scss';
import { PulseLoader } from 'react-spinners';

function Loading() {

  return (
    <div className={styles.loadingContainer}>
      <PulseLoader className={styles.spinner} />
      <p className={styles.loadingText}>그리다 AI가 이미지를 만들고 있어요</p>
    </div>
  )
}

export default Loading;