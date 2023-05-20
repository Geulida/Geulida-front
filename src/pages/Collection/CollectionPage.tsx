import { useState } from 'react';
import Headline from 'components/common/Headline';
import styles from './CollectionPage.module.scss';
import dummy from 'assets/dummyCollection.json';
import CollectionItem from './CollectionItem';

function CollectionPage() {
  return (
    <div className={styles.container}>
      <Headline title='Collection' />
      <div className={styles.main}>
        {dummy.map((data) => (
          <CollectionItem key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
