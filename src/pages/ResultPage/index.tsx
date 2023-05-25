import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './resultPage.module.scss';

import Modal from 'components/common/Modal';
import KakaoShareBtn from '../../components/result/KakaoShareBtn';
import GallerySaveBtn from '../../components/result/GallerySaveBtn';
import ImageSaveBtn from '../../components/result/ImageSaveBtn';

// 갤러리 저장버튼을 누르면 api이미지 저장
// result page에서 session에 저장되어있는 객체를 불러와야함
/**
 * ! 구현 시나리오
 * 1. result page가 렌더링될 때 session에 저장되어 있는 객체를 한번만 불러온다.
 * 2. 갤러리 저장 버튼을 누르면 api/collection (POST) 요청을 보낸다.
 * 3. 갤러리 저장 버튼이 컴포넌트로 구현되어있으니, 여기서 api 부착하고 button 클릭 이벤트 props로 gellerysavebtn에 전달한다.
 *
 */
// const storedData = sessionStorage.getItem('answerData');
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

  const summary = 'summary';
  const url = 'https://cdn.veritas-a.com/news/photo/old/2/admin_1198640645.jpg';

  useEffect(() => {
    try {
      const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
      setStoredData({ ...storedData, color: getAnswerData.color, hexcode: getAnswerData.hexcode, style: getAnswerData.style, summary: summary, url: url });
    } catch (err) {
      console.error('Json에 유효한 값이 들어오지 않음');
      handleModalShow();
    }
  }, []);

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
            <img src='https://cdn.veritas-a.com/news/photo/old/2/admin_1198640645.jpg' />
          </div>
          <div className={styles.resultContentsText}>결과 한 줄</div>
        </section>
        <section className={styles.resultBtnContainer}>
          <ImageSaveBtn />
          <GallerySaveBtn storedData={storedData} />
          <KakaoShareBtn />
        </section>
      </div>
    </div>
  );
}

export default ResultPage;
