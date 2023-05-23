import React, { useEffect } from 'react';
import { saveIntoCollection } from '../../common/Fetcher/Fetcher';

import { ReactComponent as PhotoPlus } from 'assets/PhotoPlus.svg';
import styles from './gallerySaveBtn.module.scss';

function GallerySaveBtn() {
  // 실제 API 요청 데이터
  // const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
  // const { color, style, summary, result } = getAnswerData;

  // API 요청 mock data
  const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
  const { color, style } = getAnswerData;
  const summary = 'summary';
  const result = 'https://cdn.veritas-a.com/news/photo/old/2/admin_1198640645.jpg';

  // 임의로 토큰 쿠키에 욱여넣음
  // 토큰을 쿠키에 저장합니다.
  function setToken(tokenValue: string) {
    document.cookie = `token=${tokenValue}; path=/`;
  }

  // 쿠키에 저장한 토큰 값을 반환합니다.
  function getToken(): string | null {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=');
      return key === 'token' ? value : null;
    }
    return null;
  }
  useEffect(() => {
    setToken(`${process.env.REACT_APP_TOKEN}`);
    console.log(getToken());
  }, []);

  const handleSaveBtnClick = async () => {
    try {
      const response = await saveIntoCollection(color, style, summary, result);
      alert(response);
      console.log(response);
    } catch (err) {
      console.log('갤러리에 저장 실패: ', err);
    }
  };

  return (
    <div>
      <div className={styles.gallerySaveBtn}>
        <PhotoPlus onClick={handleSaveBtnClick} />
      </div>
    </div>
  );
}

export default GallerySaveBtn;
