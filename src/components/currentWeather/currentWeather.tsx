import React, { useContext } from 'react';
import { Description } from './description/description';
import { Header } from './header/header';
import { SearchForm } from './search/search';
import { Context } from '../../context/context';
import ChangeContext from '../../models/context.model';
import { Spinner } from '../spinner/spinner';

import styles from './currentWeather.module.scss'

export const CurrentWeather = () => {
    const {loadingMain, trueInfo} = useContext<ChangeContext>(Context);
    return (
        <div className={styles.content}>
            <Header/>
            <SearchForm/>
            {loadingMain ? <Spinner/> : trueInfo ? <Description/> : ''}
        </div>
    )
}