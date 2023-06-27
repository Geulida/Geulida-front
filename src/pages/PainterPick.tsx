import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as RightArrow } from 'assets/RightArrow.svg';
import { ReactComponent as LeftArrow } from 'assets/LeftArrow.svg';

import Modal from 'components/common/Modal';
import CustomSelect from './PainterPickPage/CustomSelect';

import styles from './painterPick.module.scss';
import artists from 'assets/painterData.json';

function PainterPick() {
  const navigate = useNavigate();
  const PainterPickerRef = useRef<HTMLDivElement>(null);
  const [painterName, setPainterName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const answerData = sessionStorage.getItem('answerData');
    const answerData2 = answerData || '';
    console.log(answerData2);
  }, []);

  // 모달 핸들 함수
  const handleModalShow = () => {
    setShowModal((prev) => !prev);
  };

  const handleNext = () => {
    const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
    const answerData = { ...getAnswerData, style: painterName };
    sessionStorage.setItem('answerData', JSON.stringify(answerData));

    if (!painterName) {
      handleModalShow();
      return;
    }
    navigate('/chat');
  };

  const handleChange = (e: React.MouseEvent<HTMLLIElement>) => {
    const selectedPainter = e.currentTarget.textContent;
    getDataByName(selectedPainter || '');
  };

  const getDataByName = (selectedPainter: string) => {
    const pickOneArtist = artists.find((artist) => artist.name === selectedPainter);
    if (pickOneArtist) {
      setImageUrl(pickOneArtist.imageUrl);
      setPainterName(pickOneArtist.englishName);
    }
  };

  return (
    <div className={styles.container}>
      {showModal && <Modal modalType='confirm' modalHandler={handleModalShow} modalMessage='원하는 화풍을 선택해주세요' />}
      <button className={styles.prevButton} onClick={() => navigate(-1)}>
        <LeftArrow className={styles.arrowLeft} />
      </button>
      <div className={styles.painterPickerWrapper} ref={PainterPickerRef}>
        <div className={styles.painterPickerCircle} style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}} />
        <div className={styles.question2}>Q2. 원하는 화풍을 선택해주세요</div>
        <p className={styles.notification}>※ 다음으로 넘어가면 대화가 시작됩니다.</p>
        <CustomSelect value={painterName} onClick={handleChange} />
      </div>

      <button className={styles.nextButton} onClick={handleNext}>
        <RightArrow className={styles.arrowRight} />
      </button>
    </div>
  );
}

export default PainterPick;
