import React from 'react';
import styles from './chatPage.module.scss';
import { PulseLoader } from 'react-spinners';

function Loading() {

  return (
    <div className={styles.loadingContainer}>
      <PulseLoader className={styles.spinner} />
      <p className={styles.loadingText}>
        그리다 AI가<br/>
        당신을 위한 그림🎨을 그리고 있어요<br/>
        잠시만 기다려주세요!
      </p>
    </div>
  )
}

export default Loading;