import { ForecastHeader } from './forecastHeader';
import { ForecastList } from './forecastList';
import styles from './styles.module.scss';

export const HourlyForecast = () => {
  return (
    <div className={styles.cards}>
      <ForecastHeader />
      <ForecastList />
    </div>
  );
};
