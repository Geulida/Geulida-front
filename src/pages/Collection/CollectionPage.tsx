import { useState, useEffect } from 'react';
import Headline from 'components/common/Headline';
import styles from './CollectionPage.module.scss';
import dummy from 'assets/dummyCollection.json';
import CollectionItem from './CollectionItem';
import { userCollection } from 'components/common/Fetcher/Fetcher';

function CollectionPage() {
  const [collectionData, setCollectionData] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const loadCollection = async () => {
    try {
      const data: any = await userCollection(page);
      setCollectionData((prevData) => [...prevData, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadCollection();
    }
  };

  useEffect(() => {
    loadCollection();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Headline title='Collection' />
      <div className={styles.main}>
        {collectionData.map((data) => (
          <CollectionItem key={data._id} data={data} />
        ))}
      </div>
      <div className={styles.scrollContainer}>
        <button onClick={scrollToTop} type='button'>
          TOP
        </button>
      </div>
    </div>
  );
}

export default CollectionPage;
