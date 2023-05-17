const { Kakao } = window;

export const shareKakao = (description: string, imageUrl: string) => {
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
