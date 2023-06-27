import { useState } from 'react';
import { saveIntoCollection } from '../../../api/fetcher';

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

  const handleSaveBtnClick = async () => {
    console.log('클릭');
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
      <div className={styles.gallerySaveBtn} onClick={handleSaveBtnClick}>
        <PhotoPlus />
        <p className={styles.gallerySaveBtnTxt}>갤러리 저장</p>
      </div>
    </div>
  );
}

export default GallerySaveBtn;
