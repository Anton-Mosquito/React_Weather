import React, { useContext } from 'react';
import sprite from '@/assets/sprite.svg';
import { Context } from '@/context';
import { AppContext } from '@/types';
import styles from './styles.module.scss';

const ForecastHeader: React.FC = () => {
  const { typeRequset } = useContext<AppContext>(Context);
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
