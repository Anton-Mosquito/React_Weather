import useAppContext from '@/context';
import styles from './styles.module.scss';
import type { RadioItemProps } from '@features/weather/components/CurrentWeather/types';

export const RadioItem = ({
  forLabel,
  forId,
  text,
  id,
  check,
  onChange,
}: RadioItemProps) => {
  const { trueInfo } = useAppContext();
  return (
    <label htmlFor={forLabel} className={styles.wrapper}>
      <input
        type="radio"
        className={styles.input}
        name="choiseCard"
        id={forId}
        value={text}
        checked={check}
        onChange={onChange.bind(null, id, text)}
        disabled={!trueInfo}
      />
      <span className={styles.text}>{text}</span>
    </label>
  );
};
