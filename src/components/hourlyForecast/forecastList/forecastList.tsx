import React, {useContext} from 'react';
import { Context } from "../../../context/context";
import { ForecastListItem } from './forecastListItem/forecastListItem';
import './forecastList.module.scss'
import ChangeContext from '../../../models/context.model';
import { IMainInfo } from '../../../models/dataCity.model';
import { Loader } from '../../loader/loader';

export const ForecastList = () => {
    const {dataCity, loading} = useContext<ChangeContext>(Context);
    let quantityOfCards: Array<IMainInfo> = [];

    if (dataCity) quantityOfCards =  dataCity.list.slice(0,9);
    
    return (
        <div className="content-cards-list">
            {loading ? <Loader/> : quantityOfCards.map((item: IMainInfo ,index: number)=> <ForecastListItem key={index} data={item}/>)}
        </div>
    )
}