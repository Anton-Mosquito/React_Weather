import React, { useContext } from 'react';
import { Description } from './description/description';
import { Header } from './header/header';
import { SearchForm } from './search/search';
import './currentWeather.module.scss'
import { Context } from '../../context/context';
import ChangeContext from '../../models/context.model';
import { Spinner } from '../spinner/spinner';

export const CurrentWeather = () => {
    const {loadingMain, trueInfo} = useContext<ChangeContext>(Context);
    return (
        <div className="content">
            <Header/>
            <SearchForm/>
            {loadingMain ? <Spinner/> : trueInfo ? <Description/> : ''}
        </div>
    )
}