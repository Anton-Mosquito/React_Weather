import React from 'react';
import styles from './styles.module.scss';
import ForecastHeader from './forecastHeader';
import WeatherDemo from '../WeatherDemo';

const HourlyForecast: React.FC = () => {
  return (
    <section>
      <ForecastHeader />
      <WeatherDemo />
      <div className={styles.list}>
        {/* placeholder items while migrating */}
        <div className={styles.item}>10:00 — 12°C</div>
        <div className={styles.item}>11:00 — 13°C</div>
        <div className={styles.item}>12:00 — 14°C</div>
      </div>
    </section>
  );
};

export default HourlyForecast;
