import type { FC } from 'react';
import styles from './styles.module.scss';

export const Header: FC = () => {
  return (
    <h1 className={styles.header} data-text="Current Weather">
      Current Weather
    </h1>
  );
};
