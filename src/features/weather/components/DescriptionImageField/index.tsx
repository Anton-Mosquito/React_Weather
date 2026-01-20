import { useStore } from '@/hooks';
import styles from './DescriptionImageField.module.scss';
import type { ForecastItem } from '@/types';

const ImageField = () => {
  const { dataPosition } = useStore();
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

export default ImageField;
