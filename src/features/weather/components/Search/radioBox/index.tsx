import { IRadio } from '@/types';
import { RadioItem } from './radioItems';
import styles from './styles.module.scss';
import type { RadioBoxProps } from '@features/weather/components/CurrentWeather/types';

export const RadioBox = ({ info, change }: RadioBoxProps) => {
  return (
    <p className={styles.choise}>
      {info.map((item: IRadio) => (
        <RadioItem key={item.id} onChange={change} {...item} />
      ))}
    </p>
  );
};
