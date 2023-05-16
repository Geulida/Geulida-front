const { Kakao } = window;

export const shareKakao = (description, imageUrl) => {
  description = '여기에는 그 한 줄 요약 녀석이 들어갑니다.';
  imageUrl =
    'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png';
  if (Kakao.isInitialized()) {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Geulida가 그린 오늘의 그림',
        description: description,
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: `${process.env.REACT_APP_LOCAL_URL}`,
          webUrl: `${process.env.REACT_APP_LOCAL_URL}`,
        },
      },
      buttons: [
        {
          title: '나만의 AI그림 만들러 가기',
          link: {
            mobileWebUrl: `${process.env.REACT_APP_LOCAL_URL}`,
            webUrl: `${process.env.REACT_APP_LOCAL_URL}`,
          },
        },
      ],
    });
  }
};
