import React, {useContext} from 'react';
import { Context } from "../../../../../context";
import { DescriptionListItem } from './descriptionListItem';
import ChangeContext from '../../../../../models/context.model';
import styles from "./styles.module.scss";

type TitleProps = {
    title : string
}

type ArrayKey = [string, number]

export const DescriptionList: React.FC<TitleProps> = ({title}) => {
    const {dataPosition} = useContext<ChangeContext>(Context);
    let temperatureArray: ArrayKey[] = [];
    let sunArray: ArrayKey[] = [];
    let windArray : ArrayKey[] = [];
    let visibilityArray: ArrayKey[] = [];
    let cloudArray : ArrayKey[] = [];

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
            windArray = Object.entries(dataPosition.wind).filter((item)=> item[0] !== 'gust');
        break;
        case 'Cloudiness':
            cloudArray = Object.entries(dataPosition.clouds)
        break;
    }
    }
    return (
        <ul className={styles.descriptionList}>
            <li className={styles.title}>{title}</li>
            {temperatureArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {sunArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {visibilityArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {windArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item}/>)}
            {cloudArray?.map(( item: ArrayKey, index:number) => <DescriptionListItem key={index} value={item} />)}
        </ul>
    )
}