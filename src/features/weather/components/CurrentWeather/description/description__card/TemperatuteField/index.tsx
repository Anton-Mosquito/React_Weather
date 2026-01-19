import { useContext } from 'react';
import { Context } from '@/context';
import { AppContext } from '@/types';
import styles from './styles.module.scss';

export const TemperatuteField: React.FC = () => {
  const { dataPosition } = useContext<AppContext>(Context);
  const temp: number | undefined = dataPosition?.main?.temp;
  return <p className={styles.temperature}>{temp?.toFixed(1)}&#8451;</p>;
};
