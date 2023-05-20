import styles from './CollectionItemDescription.module.scss';
import ItemDelete from './ItemDelete';

interface CollectionItemProps {
  data: {
    _id: string;
    color: string;
    style: string;
    summary: string;
    url: string;
  };
}

function CollectionItemDescription({ data }: CollectionItemProps) {
  return (
    <div className={styles.picDescription} style={{ backgroundColor: `${data.color}` }}>
      <p>{data.color}</p>
      <p>{data.style}</p>
      <p className={styles.summary}>{data.summary}</p>
      <ItemDelete bg={`${data.color}`} />
    </div>
  );
}

export default CollectionItemDescription;
