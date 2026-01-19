import React from 'react';
import styles from './styles.module.scss';

interface Props {
  message?: string;
}

const Loader: React.FC<Props> = ({ message = 'Loading...' }) => {
  return (
    <div className={styles.root}>
      <div className={styles.dot} />
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Loader;
