import styles from './loader.module.scss';

export const Loader = () => {
  const circleArray = new Array(5).fill(0);
  return (
    <div className={styles.wrapper}>
      {circleArray.map((_, index) => (
        <div key={index} className={styles.circle} />
      ))}
    </div>
  );
};
