import {useContext} from 'react';
import { Context } from "../../../../../context/context";
import { DescriptionListItem } from './descriptionListItem/descriptionListItem';
import "./descriptionList.module.scss";
import ChangeContext from '../../../../../models/context.model';

type TitleProps = {
    title : string
}

type ArrayKey = [string, number]

export const DescriptionList = ({title}: TitleProps) => {
    const {dataPosition} = useContext<ChangeContext>(Context);

    let temperatureArray: Array<ArrayKey> = [];
    let sunArray: Array<ArrayKey> = [];
    let windArray : Array<ArrayKey> = [];
    let visibilityArray: Array<ArrayKey> = [];
    let cloudArray : Array<ArrayKey> = [];

    if (dataPosition){
    switch (title) {
        case 'Temperature parameters':
            temperatureArray = Object.entries(dataPosition.main).filter((item)=> item[0] !== 'temp' && item[0] !== 'sea_level' && item[0] !== 'grnd_level' && item[0] !== 'pressure');
            break;
        case 'Sunrise & Sunset data':
            sunArray = Object.entries(dataPosition.sys).filter((item)=> item[0] !== 'country' && item[0] !== 'id' && item[0] !== 'type');
        break;
        case 'Visibility':
            visibilityArray = Object.entries(dataPosition).filter((item)=> item[0] === 'visibility');
        break;
        case 'Wind':
            windArray = Object.entries(dataPosition.wind)
        break;
        case 'Cloudiness':
            cloudArray = Object.entries(dataPosition.clouds)
        break;
    }
    }
    
    return (
        <ul className="list__description">
            <li className="list__description-title">{title}</li>
            {temperatureArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {sunArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {visibilityArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {windArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {cloudArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item} />)}
        </ul>
    )
}