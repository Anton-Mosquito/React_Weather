import { /* useContext */ } from 'react';
import { Description } from './description';
import { Header } from './header';
import { SearchForm } from './search';
import useAppContext from '@/context';
import { Spinner } from '@/components/spinner';

import styles from './styles.module.scss';

export const CurrentWeather = () => {
  const { loadingMain, trueInfo } = useAppContext();
  return (
    <div className={styles.content}>
      <Header />
      <SearchForm />
      {loadingMain ? <Spinner /> : trueInfo ? <Description /> : ''}
    </div>
  );
};
