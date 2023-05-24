import styles from './resultPage.module.scss';

import KakaoShareBtn from '../../components/result/KakaoShareBtn';
import GallerySaveBtn from '../../components/result/GallerySaveBtn';
import ImageSaveBtn from '../../components/result/ImageSaveBtn';

// 갤러리 저장버튼을 누르면 api이미지 저장
// result page에서 session에 저장되어있는 객체를 불러와야함
/**
 * ! 구현 시나리오
 * 1. result page가 렌더링될 때 session에 저장되어 있는 객체를 한번만 불러온다.
 * 2. 갤러리 저장 버튼을 누르면 api/collection (POST) 요청을 보낸다.
 * 3. 갤러리 저장 버튼이 컴포넌트로 구현되어있으니, 여기서 api 부착하고 button 클릭 이벤트 props로 gellerysavebtn에 전달한다.
 *
 */

function ResultPage() {
  return (
    <div className={styles.resultPage}>
      <div className={styles.resultPageContainer}>
        <section className={styles.resultContents}>
          <div className={styles.imageWrapper}>
            <img src='https://cdn.veritas-a.com/news/photo/old/2/admin_1198640645.jpg' />
          </div>
          <div className={styles.resultContentsText}>결과 한 줄</div>
        </section>
        <section className={styles.resultBtnContainer}>
          <ImageSaveBtn />
          <GallerySaveBtn />
          <KakaoShareBtn />
        </section>
      </div>
    </div>
  );
}

export default ResultPage;
