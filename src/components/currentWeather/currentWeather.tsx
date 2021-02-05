import React from 'react';
import { Description } from './description/description';
import { Header } from './header/header';
import { SearchForm } from './search/search';
import './currentWeather.module.scss'

export const CurrentWeather = () => {
    return (
        <div className="content">
            <Header/>
            <SearchForm/>
            <Description/>
        </div>
    )
}