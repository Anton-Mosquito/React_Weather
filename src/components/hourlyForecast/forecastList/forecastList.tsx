import React, {useContext} from 'react';
import { Context } from "../../../context/context";

import { ForecastListItem } from './forecastListItem/forecastListItem';
import { Loader } from '../../loader/loader';
import { FourHundredFour } from '../../404/404';

import ChangeContext from '../../../models/context.model';
import { IMainInfo } from '../../../models/dataCity.model';


import styles from './forecastList.module.scss'

export const ForecastList: React.FC = () => {
    const {dataCity, loadingCards, trueInfo} = useContext<ChangeContext>(Context);
    let quantityOfCards: Array<IMainInfo> = [];

    if (dataCity) quantityOfCards =  dataCity.list.slice(0,9);
    
    return (
        <div className={styles.listMain}>
            {loadingCards ? <Loader/> : trueInfo ? quantityOfCards.map((item: IMainInfo, index: number)=> <ForecastListItem key={index} data={item}/>) : <FourHundredFour/>}
        </div>
    )
}