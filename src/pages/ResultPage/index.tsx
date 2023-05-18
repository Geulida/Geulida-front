import styles from './resultPage.module.scss';
import ResultPageBtn from 'components/result/ResultPageBtn';

function ResultPage() {
  return (
    <div className={styles.resultPageContainer}>
      <section className={styles.resultContents}>
        <div className={styles.imageWrapper}>
          <img src='/image/test.jpeg' />
        </div>
        <div className={styles.resultContentsText}></div>
      </section>
      <section className={styles.resultBtnContainer}>
        <ResultPageBtn />
      </section>
    </div>
  );
}

export default ResultPage;
