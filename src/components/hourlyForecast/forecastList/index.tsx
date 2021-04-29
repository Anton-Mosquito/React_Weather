import React, {useContext} from 'react';
import { Context } from "../../../context";

import { ForecastListItem } from './forecastListItem';
import { Loader } from '../../loader';
import { FourHundredFour } from '../../404';

import ChangeContext from '../../../models/context.model';
import { IMainInfo } from '../../../models/dataCity.model';


import styles from './styles.module.scss'

export const ForecastList: React.FC = () => {
    const {dataCity, loadingCards, trueInfo} = useContext<ChangeContext>(Context);
    let quantityOfCards: IMainInfo[] = [];

    if (dataCity) quantityOfCards =  dataCity.list.slice(0,9);
    return (
        <div className={styles.listMain}>
            {loadingCards ? <Loader/> : trueInfo ? quantityOfCards.map((item: IMainInfo, index: number)=> <ForecastListItem key={index} data={item}/>) : <FourHundredFour/>}
        </div>
    )
}