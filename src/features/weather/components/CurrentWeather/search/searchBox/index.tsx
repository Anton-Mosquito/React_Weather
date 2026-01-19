import sprite from '@/assets/sprite.svg';
import { ChangeEvent } from 'react';
import styles from './styles.module.scss';
import type { SearchBoxProps } from '@features/weather/components/CurrentWeather/types';

export const SearchBox = ({ valueOfField, changeValue }: SearchBoxProps) => {
  return (
    <p className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter the city name..."
        onChange={(event: ChangeEvent) =>
          changeValue((event.target as HTMLInputElement).value)
        }
        value={valueOfField}
      />
      <button className={styles.button} type="submit">
        <svg className={styles.icon}>
          <use href={sprite + '#search'}></use>
        </svg>
      </button>
    </p>
  );
};
