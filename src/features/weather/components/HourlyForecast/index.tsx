import styles from './HourlyForecast.module.scss';
import ForecastHeader from '@features/weather/components/ForecastHeader';
import ForecastList from '@features/weather/components/ForecastList';

const HourlyForecast = () => {
  return (
    <section className={styles.cards}>
      <ForecastHeader />
      <ForecastList />
    </section>
  );
};

export default HourlyForecast;
