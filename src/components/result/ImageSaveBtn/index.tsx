import React, { useState, useEffect } from 'react';
import styles from './imageSaveBtn.module.scss';

// sessionStorage에서 imageUrl가져와야함
function ImageSaveBtn() {
  // return (
  //   <div>
  //     <div className={styles.saveBtn}>
  //       <a
  //         href='https://mblogthumb-phinf.pstatic.net/MjAyMDA5MjhfMzMg/MDAxNjAxMzA1MDc3MzYy.N4852y666UInf-F-doir6Imv3DpeFHzbaIcVLJReXkEg.3etDrj9-iojyIsGVxCDS9bqFVbCi-emmkP4_SVooWzog.JPEG.jrkimceo/Dancers_(c.1878)_By_Edgar_Degas,_from_Paris_(1834.jpg?type=w800'
  //         download
  //       >
  //         <button>이미지 원본 다운로드</button>
  //       </a>
  //     </div>
  //   </div>
  // );
  const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  // 이미지 URL을 sessionStorage에서 가져와야 함
  //   const storedImageUrl = sessionStorage.getItem('imageUrl');
  //   setImageUrl(storedImageUrl);
  // }, []);

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'image.jpg';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
  };

  return (
    <div>
      <div className={styles.saveBtn}>
        <button onClick={handleDownload}>이미지 원본 다운로드</button>
      </div>
    </div>
  );
}

export default ImageSaveBtn;
