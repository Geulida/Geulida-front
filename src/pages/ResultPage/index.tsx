import styles from './resultPage.module.scss';
import KakaoShareBtn from '../../components/result/KakaoShareBtn';

function ResultPage() {
  return (
    <div>
      <div className={styles.text}>ResultPage입니다!!!</div>
      <KakaoShareBtn />
    </div>
  );
}

export default ResultPage;
