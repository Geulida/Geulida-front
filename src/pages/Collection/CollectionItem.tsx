import { useState } from 'react';
import styles from './CollectionItem.module.scss';
import CollectionItemDescription from './CollectionItemDescription';

interface CollectionItemProps {
  data: {
    _id: string;
    color: string;
    hexcode: string;
    style: string;
    summary: string;
    url: string;
  };
}

function CollectionItem({ data }: CollectionItemProps) {
  const [description, setDescription] = useState(false);

  const toggleItem = () => {
    setDescription((prevDescription) => !prevDescription);
  };

  return (
    <div className={styles.picDiv} onClick={toggleItem}>
      {description ? (
        <CollectionItemDescription data={data} />
      ) : (
        <div
          className={`${styles.pic}`}
          style={{
            backgroundImage: `url(${data.url})`,
          }}
        />
      )}
    </div>
  );
}

export default CollectionItem;
