import { Spinner } from '@/components/ui/spinner';
import { useStore } from '@/hooks';
import { Description } from '@features/weather/components/Description';
import { Header } from '@features/weather/components/Header';
import { SearchForm } from '@features/weather/components/Search';
import styles from './CurrentWeather.module.scss';

export const CurrentWeather = () => {
  const { loadingMain, trueInfo } = useStore();
  return (
    <div className={styles.content}>
      <Header />
      <SearchForm />
      {loadingMain ? <Spinner /> : trueInfo ? <Description /> : ''}
    </div>
  );
};
