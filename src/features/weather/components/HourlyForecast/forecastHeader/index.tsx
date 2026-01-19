import React from 'react';
import sprite from '@/assets/sprite.svg';
import useAppContext from '@/context';
import styles from './styles.module.scss';

const ForecastHeader: React.FC = () => {
  const { typeRequset } = useAppContext();
  return (
    <header className={styles.wrapper}>
      <h2 className={styles.header}>{typeRequset} forecast</h2>
      <div className={styles.box}>
        <svg className={styles.icon}>
          <use href={sprite + '#lady'} />
        </svg>
      </div>
    </header>
  );
};

export default ForecastHeader;
