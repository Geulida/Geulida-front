import { useEffect } from 'react';
import { shareKakao } from './shareKakao';

import styles from './kakaoShareBtn.module.scss';

const { Kakao } = window;

function KakaoShareBtn() {
  // 실제 API 요청 데이터
  // const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
  // const { summary:description, result:imageUrl } = getAnswerData;

  // API 요청 mock data
  const description = '렘브란트';
  const imageUrl = 'https://cdn.veritas-a.com/news/photo/old/2/admin_1198640645.jpg';

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    console.log(Kakao.isInitialized());
    console.log(Kakao);
  }, []);

  return (
    <>
      <button type='submit' onClick={() => shareKakao(description, imageUrl)}>
        <div className={styles.kakaoShareBtn}>
          <img className={styles.kakaoIcon} src='/image/kakao-logo.png' alt='kakao-share-icon' />
        </div>
      </button>
    </>
  );
}

export default KakaoShareBtn;
