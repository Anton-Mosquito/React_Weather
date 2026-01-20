import ForecastListItem from '@features/weather/components/ForecastListItem';
import { Loader } from '@/components/ui';
import ErrorPage from '@/components/layouts';
import { useStore } from '@/hooks';
import type { Weather } from '@/types';
import styles from './ForecastList.module.scss';

const ForecastList = () => {
  const { dataCity, loadingCards, trueInfo } = useStore();
  console.log("🚀 ~ ForecastList ~ dataCity:", dataCity);
  debugger;
  const quantityOfCards: Weather[] = dataCity ? dataCity?.list?.slice(0, 9) : [];

  return (
    <div className={styles.listMain}>
      {loadingCards ? (
        <Loader />
      ) : trueInfo ? (
        quantityOfCards.map((item: Weather, index: number) => (
          <ForecastListItem key={index} data={item} />
        ))
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default ForecastList;
