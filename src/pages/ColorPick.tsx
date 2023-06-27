import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChromePicker, ColorResult } from 'react-color';
import { GetColorName } from 'hex-color-to-color-name';

import Modal from 'components/common/Modal';

import styles from './ColorPick.module.scss';
import { ReactComponent as RightArrow } from 'assets/RightArrow.svg';

function ColorPick() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [colorPickerHex, setColorPickerHex] = useState<string>('');
  const [namedColor, setNamedColor] = useState<string>('');

  const navigate = useNavigate();
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const handleChangeColorPicker = (color: ColorResult) => {
    setColorPickerHex(color.hex);
    const standardName = GetColorName(color.hex);
    setNamedColor(standardName);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target === colorPickerRef.current && !isShown) {
      setIsShown(false);
    }
  };

  const handleModalShow = () => {
    setShowModal((prev) => !prev);
  };

  const handleNext = () => {
    const answerData = {
      color: namedColor,
      hexcode: colorPickerHex,
    };

    sessionStorage.setItem('answerData', JSON.stringify(answerData));
    if (!namedColor) {
      handleModalShow();
      return;
    }
    navigate('/painter-pick');
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showModal && <Modal modalType='confirm' modalHandler={handleModalShow} modalMessage='원하는 컬러를 선택해주세요' />}
      <div className={styles.left}></div>
      <div className={styles.colorPickerWrapper} ref={colorPickerRef}>
        {isShown && <ChromePicker className={styles.colorPicker} onChange={handleChangeColorPicker} color={colorPickerHex} />}
        <div
          className={styles.colorPickerCircle}
          style={{
            backgroundColor: `${colorPickerHex}`,
          }}
          onClick={() => setIsShown((prev) => !prev)}
        >
          Click Me!
        </div>

        <div className={styles.question1}>
          Q1. 원하는<span style={{ color: `${colorPickerHex}` }}>컬러</span>를 선택해주세요
        </div>
      </div>

      <button type='button' className={styles.nextButton} onClick={handleNext}>
        <RightArrow className={styles.arrowRight} />
      </button>
    </div>
  );
}

export default ColorPick;
