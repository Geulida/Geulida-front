import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResultPage.module.scss';

import Modal from 'components/common/Modal';
import KakaoShareBtn from 'components/result/KakaoShareBtn/KakaoShareBtn';
import GallerySaveBtn from 'components/result/GallerySaveBtn';
import ImageSaveBtn from 'components/result/ImageSaveBtn';

interface data {
  color: string;
  hexcode: string;
  style: string;
  summary: string;
  url: string;
}

function ResultPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [storedData, setStoredData] = useState<data>({
    color: '',
    hexcode: '',
    style: '',
    summary: '',
    url: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
      setStoredData((prevData) => ({
        ...prevData,
        color: getAnswerData.color,
        hexcode: getAnswerData.hexcode,
        style: getAnswerData.style,
        summary: getAnswerData.summary,
        url: getAnswerData.url,
      }));
    } catch (err) {
      console.error('세션 스토리지가 비어있거나 유효한 값이 아닙니다.');
      handleModalShow();
    }
  }, []);
  console.log(storedData);
  function handleModalShow() {
    setShowModal((prev) => !prev);
  }

  return (
    <div className={styles.resultPage}>
      {showModal && (
        <Modal
          modalType='navigate'
          modalHandler={handleModalShow}
          modalMessage='먼저 컬러와 화풍을 선택해주세요.'
          navigateHandler={() => {
            navigate('/color-pick');
          }}
        />
      )}
      <div className={styles.resultPageContainer}>
        <section className={styles.resultContents}>
          <div className={styles.imageWrapper}>
            <img src={storedData.url} alt='result' />
          </div>
          <div className={styles.resultContentsText}>{storedData.summary}</div>
        </section>
        <section className={styles.resultBtnContainer}>
          <ImageSaveBtn imageUrl={storedData.url} />
          <GallerySaveBtn storedData={storedData} />
          <KakaoShareBtn imageUrl={storedData.url} description={storedData.summary} />
        </section>
      </div>
    </div>
  );
}

export default ResultPage;
