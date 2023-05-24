import React, { useState, useEffect } from 'react';
import styles from './imageSaveBtn.module.scss';

import { ReactComponent as Download } from 'assets/Download.svg';

// sessionStorage에서 imageUrl가져와야함
// result 페이지에서 session에서 받아서 props로 전달
function ImageSaveBtn() {
  const [imageUrl, setImageUrl] = useState<string>('https://cdn.veritas-a.com/news/photo/old/2/admin_1198640645.jpg');
  // const imageUrl = 'https://cdn.veritas-a.com/news/photo/old/2/admin_1198640645.jpg';

  // useEffect(() => {
  // 이미지 URL을 sessionStorage에서 가져와야 함
  //   const storedImageUrl = JSON.parse(sessionStorage.getItem('answerData') || '');
  //   const { summary:description, result:imageUrl } = getAnswerData;
  //   setImageUrl(imageUrl);
  // }, []);

  // API 요청 mock data

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // 이미지 형식에 따라 MIME 타입과 확장자를 결정
      const mimeType = response.headers.get('content-type');
      const extension = mimeType ? mimeType.split('/')[1] : 'jpg';

      // Blob 객체를 URL로 변환
      const url = URL.createObjectURL(blob);

      // 다운로드 링크 생성
      const link = document.createElement('a');
      link.href = url;
      link.download = `Geulida.${extension}`;

      // 다운로드 링크를 클릭하여 다운로드
      link.click();

      // 사용이 완료된 URL 객체 해제
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('이미지 다운로드에 실패하였습니다.', error);
    }
  };

  return (
    <div>
      <div className={styles.saveBtn}>
        <Download onClick={handleDownload} />
      </div>
    </div>
  );
}

export default ImageSaveBtn;
