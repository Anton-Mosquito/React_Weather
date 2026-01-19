import type { FormEventHandler } from 'react';
import { useCallback, useContext, useState } from 'react';
import { SearchBox } from './searchBox';
import { RadioBox } from './radioBox';

import { Context } from '@/context';
import { AppContext } from '@/types';

import styles from './styles.module.scss';

export const SearchForm = () => {
  const { updateData, updateWeatherCards } = useContext<AppContext>(Context);
  const [value, setValue] = useState<string>('');

  const [radioValue, setRadioValue] = useState([
    { id: 1, forLabel: 'Hourly', forId: 'Hourly', text: 'Hourly', check: true },
    {
      id: 2,
      forLabel: 'Nearby',
      forId: 'Nearby',
      text: 'Nearby',
      check: false,
    },
  ]);

  const submitHandler: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      if (value.trim()) {
        updateData(value);
        setValue(' ');
      }
    },
    [updateData, value]
  );

  const change = useCallback(
    (id: number, flag: string) => {
      setRadioValue(
        radioValue.map((radio) => {
          if (radio.id === id) radio.check = !radio.check;
          else radio.check = !radio.check;
          return radio;
        })
      );
      updateWeatherCards(flag);
    },
    [radioValue, updateWeatherCards]
  );

  return (
    <form className={styles.search} onSubmit={submitHandler}>
      <SearchBox valueOfField={value} changeValue={setValue} />
      <RadioBox info={radioValue} change={change} />
    </form>
  );
};
