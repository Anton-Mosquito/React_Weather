import React from 'react';
import { ForecastHeader } from './forecastHeader/ForecastHeader';
import { ForecastList } from './forecastList/forecastList';
import styles from './hourlyForecast.module.scss'


export const HourlyForecast: React.FC = () => {
    return (
        <div className={styles.cards}>
            <ForecastHeader/>
            <ForecastList/>
        </div>
    )
}