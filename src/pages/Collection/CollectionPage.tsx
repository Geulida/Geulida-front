import Headline from 'components/common/Headline';
import styles from './CollectionPage.module.scss';

function CollectionPage() {
  return (
    <div className={styles.container}>
      <Headline title='Collection'></Headline>
      <div className={styles.main}></div>
    </div>
  );
}

export default CollectionPage;
