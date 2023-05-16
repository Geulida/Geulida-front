import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Layout from '../../components/common/Layout';
import styles from './painterPickPage.module.scss';

interface Props {
  painterName: string;
}

function PainterPickPage({ painterName }: Props) {
  const navigate = useNavigate();
  const PainterPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * ! 세션에 객체 저장시
     * 1. sessionStorage.setItem('answerData', JSON.stringify(answerData)); 로 저장
     * 2. const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || ''); 로 파싱해서 가져옴
     * 3. 스프레드 연산자로 뒤에 이어서 씀
     */
    const answerData = sessionStorage.getItem('answerData');
    const answerData2 = answerData || '';
    console.log(answerData2);
  }, []);

  const handleNext = () => {
    const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
    const answerData = { ...getAnswerData, pickedPainter: painterName };
    sessionStorage.setItem('answerData', JSON.stringify(answerData));
    /**
     * ! 임시 네비게이트 : 챗 페이지 생성되면 바꿔야함
     */
    navigate('/result');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <button className={styles.prevButton} onClick={() => navigate(-1)}>
          <FaArrowLeft className={styles.arrowLeft} />
        </button>
        <div className={styles.painterPickerWrapper} ref={PainterPickerRef}>
          <div
            className={styles.painterPickerCircle}
            style={{
              backgroundImage: `url(/image/test.jpeg)`,
            }}
          />

          <div className={styles.question2}>Q2. 원하는 화풍을 선택해주세요</div>
          <p className={styles.notification}>※ 다음으로 넘어가면 대화가 시작됩니다.</p>
        </div>

        <button className={styles.nextButton} onClick={handleNext}>
          <FaArrowRight className={styles.arrowRight} />
        </button>
      </div>
    </Layout>
  );
}

export default PainterPickPage;
