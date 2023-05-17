import styles from './Headline.module.scss';

function Headline(props: { title: string }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
}

export default Headline;
