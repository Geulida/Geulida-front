import { useEffect } from 'react';
import { shareKakao } from './shareKakao';

const { Kakao } = window;

function KakaoShareBtn() {
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    console.log(Kakao.isInitialized());
    console.log(Kakao);
  }, []);

  return (
    <>
      <button type='submit' className='kakao-share-button' onClick={shareKakao}>
        <div>
          <img src='/image/kakao-logo.png' alt='kakao-share-icon' />
        </div>
      </button>
    </>
  );
}

export default KakaoShareBtn;
