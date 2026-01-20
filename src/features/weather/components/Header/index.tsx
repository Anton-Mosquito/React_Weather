import styles from './Header.module.scss';

export const Header = () => {
  return (
    <h1 className={styles.header} data-text="Current Weather">
      Current Weather
    </h1>
  );
};
