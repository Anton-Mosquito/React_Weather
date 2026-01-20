import {} from /* useContext */ 'react';
import useAppContext from '@/context';
import styles from './styles.module.scss';
import type { ForecastItem } from '@/types';

export const ImageField: React.FC = () => {
  const { dataPosition } = useAppContext();
  const current = dataPosition?.current as ForecastItem | undefined;
  const icon: string | undefined = current?.weather?.[0]?.icon;
  const text: string | undefined = current?.weather?.[0]?.main;
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{text}</p>
      <img
        className={styles.image}
        src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''}
        alt="icon"
      />
    </div>
  );
};
