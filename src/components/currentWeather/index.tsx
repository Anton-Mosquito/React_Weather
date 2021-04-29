import React, { useContext } from 'react';
import { Description } from './description';
import { Header } from './header';
import { SearchForm } from './search/index';
import { Context } from '../../context';
import ChangeContext from '../../models/context.model';
import { Spinner } from '../spinner';

import styles from './styles.module.scss'

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