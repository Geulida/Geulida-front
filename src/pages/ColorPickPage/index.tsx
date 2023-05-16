import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChromePicker, ColorResult, RGBColor } from 'react-color';
import styles from './colorPickPage.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import Layout from '../../components/common/Layout';

function ColorPickPage() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [colorPickerHex, setColorPickerHex] = useState<string>('#ffffff');
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

  const handleNext = () => {
    const answerData = {
      pickedColorHex: colorPickerHex,
    };

    sessionStorage.setItem('answerData', JSON.stringify(answerData));
    navigate('/painter-pick');
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
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

          <div className={styles.question1}>Q1. 원하는 컬러를 선택해주세요</div>
        </div>

        <button className={styles.nextButton} onClick={handleNext}>
          <FaArrowRight className={styles.arrowRight} />
        </button>
      </div>
    </Layout>
  );
}

export default ColorPickPage;
