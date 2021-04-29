import React from 'react';
import { ForecastHeader } from './forecastHeader';
import { ForecastList } from './forecastList';
import styles from './styles.module.scss'


export const HourlyForecast: React.FC = () => {
    return (
        <div className={styles.cards}>
            <ForecastHeader/>
            <ForecastList/>
        </div>
    )
}