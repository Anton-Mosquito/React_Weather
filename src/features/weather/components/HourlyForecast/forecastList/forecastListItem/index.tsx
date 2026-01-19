import React from 'react';
import styles from './styles.module.scss';
import { ForecastListItemProps } from '../../types';

const ForecastListItem: React.FC<ForecastListItemProps> = ({
  time,
  temp,
  iconUrl,
  city,
}) => {
  return (
    <div className={styles.root}>
      {iconUrl && <img src={iconUrl} alt="icon" className={styles.icon} />}
      <div className={styles.time}>{time}</div>
      <div className={styles.temp}>{temp}</div>
      {city && <div className={styles.city}>{city}</div>}
    </div>
  );
};

export default ForecastListItem;
