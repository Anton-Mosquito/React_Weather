import React, {useContext} from 'react';
import { Context } from "../../../context/context";
import { ForecastListItem } from './forecastListItem/forecastListItem';
import ChangeContext from '../../../models/context.model';
import { IMainInfo } from '../../../models/dataCity.model';
import { Loader } from '../../loader/loader';
import { FourHundredFour } from '../../404/404';

import './forecastList.module.scss'

export const ForecastList = () => {
    const {dataCity, loadingCards, trueInfo} = useContext<ChangeContext>(Context);
    let quantityOfCards: Array<IMainInfo> = [];

    if (dataCity) quantityOfCards =  dataCity.list.slice(0,9);
    
    return (
        <div className="content-cards-list">
            {loadingCards ? <Loader/> : trueInfo ? quantityOfCards.map((item: IMainInfo, index: number)=> <ForecastListItem key={index} data={item}/>) : <FourHundredFour/>}
        </div>
    )
}