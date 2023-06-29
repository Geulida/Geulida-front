import { useEffect } from 'react';
import { shareKakao } from './shareKakao';
import { ReactComponent as KakaoIcon } from 'assets/Kakao.svg';

import styles from './kakaoShareBtn.module.scss';

const { Kakao } = window;

interface KakaoShareBtnProps {
  imageUrl: string;
  description: string;
}

function KakaoShareBtn({ imageUrl, description }: KakaoShareBtnProps) {
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
          <KakaoIcon className={styles.kakaoIcon} />
          <p>카카오톡 공유</p>
        </div>
      </button>
    </>
  );
}

export default KakaoShareBtn;
