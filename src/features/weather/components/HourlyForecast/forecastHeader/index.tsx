import React from 'react';
import LadyIcon from '@/assets/icons/lady.svg?react';
import useAppContext from '@/context';
import styles from './styles.module.scss';

const ForecastHeader: React.FC = () => {
  const { typeRequset } = useAppContext();
  return (
    <header className={styles.wrapper}>
      <h2 className={styles.header}>{typeRequset} forecast</h2>
      <div className={styles.box}>
        <LadyIcon className={styles.icon} />
      </div>
    </header>
  );
};

export default ForecastHeader;
