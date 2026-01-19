import React from 'react';
import styles from './styles.module.scss';
import ForecastListItem from './forecastListItem';
import { ForecastListItemProps } from '../types';

interface Props {
  items: ForecastListItemProps[];
}

const ForecastList: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.map((it, idx) => (
        <div className={styles.listItem} key={idx}>
          <ForecastListItem {...it} />
        </div>
      ))}
    </div>
  );
};

export default ForecastList;
