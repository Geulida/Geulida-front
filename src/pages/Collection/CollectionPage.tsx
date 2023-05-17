import { useState } from 'react';
import Headline from 'components/common/Headline';
import styles from './CollectionPage.module.scss';
import dummy from 'assets/dummyCollection.json';

function CollectionPage() {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const toggleItem = (itemId: string): void => {
    setExpandedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <div className={styles.container}>
      <Headline title='Collection' />
      <div className={styles.main}>
        {dummy.map((data) => (
          <div key={data._id} className={styles.picDiv} onClick={() => toggleItem(data._id)}>
            {expandedItemId === data._id ? (
              <div className={styles.picDescription}>{data.summary}</div>
            ) : (
              <div
                className={`${styles.pic}`}
                style={{
                  backgroundImage: `url(${data.result})`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
