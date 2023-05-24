import React, { useState, useEffect } from 'react';
import { saveIntoCollection } from '../../common/Fetcher/Fetcher';

import { ReactComponent as PhotoPlus } from 'assets/PhotoPlus.svg';
import styles from './gallerySaveBtn.module.scss';

import Modal from 'components/common/Modal';

interface data {
  color: string;
  hexcode: string;
  style: string;
  summary: string;
  url: string;
}

interface GallerySaveBtnProps {
  storedData: data;
}

function GallerySaveBtn({ storedData }: GallerySaveBtnProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

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
      const response = await saveIntoCollection(storedData);
      handleModalShow();
      console.log(response);
    } catch (err) {
      console.log('갤러리에 저장 실패: ', err);
    }
  };

  function handleModalShow() {
    setShowModal((prev) => !prev);
  }

  return (
    <div>
      {showModal && <Modal modalType='confirm' modalHandler={handleModalShow} modalMessage='이미지가 갤러리에 저장되었습니다.' />}
      <div className={styles.gallerySaveBtn}>
        <PhotoPlus onClick={handleSaveBtnClick} />
      </div>
    </div>
  );
}

export default GallerySaveBtn;
