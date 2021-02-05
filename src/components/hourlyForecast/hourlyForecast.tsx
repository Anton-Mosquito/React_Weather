import React from 'react';
import { ForecastHeader } from './forecastHeader/ForecastHeader';
import { ForecastList } from './forecastList/forecastList';
import './hourlyForecast.module.scss'


export const HourlyForecast: React.FC = () => {
    return (
        <div className="content-cards">
            <ForecastHeader/>
            <ForecastList/>
        </div>
    )
}