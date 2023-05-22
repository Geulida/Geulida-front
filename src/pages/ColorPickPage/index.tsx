import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from 'components/common/Modal';
import { ChromePicker, ColorResult, RGBColor } from 'react-color';

import styles from './colorPickPage.module.scss';
import { ReactComponent as RightArrow } from 'assets/RightArrow.svg';

function ColorPickPage() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [colorPickerHex, setColorPickerHex] = useState<string>('');
  const [colorPickerRGB, setColorPickerRGB] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  });
  const navigate = useNavigate();
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const { r, g, b, a } = colorPickerRGB;

  const handleChangeColorPicker = (color: ColorResult) => {
    setColorPickerRGB({ ...colorPickerRGB, ...(color.rgb as RGBColor) });
    setColorPickerHex(color.hex);
    console.log(colorPickerRGB);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target === colorPickerRef.current && !isShown) {
      setIsShown(false);
    }
  };

  // 모달 핸들 함수
  const handleModalShow = () => {
    setShowModal((prev) => !prev);
  };

  const handleNext = () => {
    const answerData = {
      color: colorPickerHex,
    };

    sessionStorage.setItem('answerData', JSON.stringify(answerData));
    if (!colorPickerHex) {
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
      {showModal && <Modal modalType='color' modalHandler={handleModalShow} modalMessage='원하는 컬러를 선택해주세요' />}
      <div className={styles.left}></div>
      <div className={styles.colorPickerWrapper} ref={colorPickerRef}>
        {isShown && <ChromePicker className={styles.colorPicker} onChange={handleChangeColorPicker} color={colorPickerHex} />}
        <div
          className={styles.colorPickerCircle}
          style={{
            backgroundColor: `rgba(${r},${g},${b},${a})`,
          }}
          onClick={() => setIsShown((prev) => !prev)}
        >
          Click Me!
        </div>

        <div className={styles.question1}>
          Q1. 원하는 <span style={{ color: colorPickerHex }}>컬러</span>를 선택해주세요
        </div>
      </div>

      <button className={styles.nextButton} onClick={handleNext}>
        <RightArrow className={styles.arrowRight} />
      </button>
    </div>
  );
}

export default ColorPickPage;
