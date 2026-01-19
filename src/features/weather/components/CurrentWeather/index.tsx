import { useContext } from 'react';
import { Description } from './description';
import { Header } from './header';
import { SearchForm } from './search';
import { Context } from '@/context';
import { AppContext } from '@/types';
import { Spinner } from '@/components/spinner';

import styles from './styles.module.scss';

export const CurrentWeather = () => {
  const { loadingMain, trueInfo } = useContext<AppContext>(Context);
  return (
    <div className={styles.content}>
      <Header />
      <SearchForm />
      {loadingMain ? <Spinner /> : trueInfo ? <Description /> : ''}
    </div>
  );
};
