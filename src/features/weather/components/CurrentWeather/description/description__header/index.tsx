import { /* useContext */ } from 'react';
import useAppContext from '@/context';
import styles from './styles.module.scss';
import type { ForecastItem } from '@/types';

export const DescriptionHeader: React.FC = () => {
  const { dataPosition } = useAppContext();
  const current = dataPosition?.current as ForecastItem | undefined;
  const date: number | undefined = current?.dt;
  return (
    <div className={styles.header}>
      <p>{dataPosition?.city?.name}</p>
      <p>
        {date ? new Date(date * 1000).toLocaleDateString() : new Date().toLocaleDateString()}
      </p>
    </div>
  );
};
