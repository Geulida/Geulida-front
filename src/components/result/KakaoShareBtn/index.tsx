import { useEffect } from 'react';
import { shareKakao } from './shareKakao';

const { Kakao } = window;

function KakaoShareBtn() {
  // props로 데이터 받아와서 shareKakao 함수에 넘겨줘야함
  const description = '여기에는 그 한 줄 요약 녀석이 들어갑니다.';
  const imageUrl = 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png';

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
        <div>
          <img src='/image/kakao-logo.png' alt='kakao-share-icon' />
        </div>
      </button>
    </>
  );
}

export default KakaoShareBtn;
