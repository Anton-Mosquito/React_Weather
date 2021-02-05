import React from 'react';
import './dataListField.module.scss'
import { DataListFieldItem } from './dataListFieldItem/dataListFieldItem';

type DataProps = {
    data : [string, number];
}

type ArrayKey = [string, number]

export const DataListField = ({data}: DataProps) => {
    let innerHeaderField: string;
    let innerItemFieldArray: Array<ArrayKey> = [];

    switch (data[0]) {
        case 'main':
            innerHeaderField = 'Temperature';
            innerItemFieldArray = Object.entries(data[1]).filter((item) => item[0] === 'temp' || item[0] === 'feels_like');
        break;
        case 'wind':
            innerHeaderField = 'Wind';
            innerItemFieldArray = Object.entries(data[1]);
        break;
        default:
            innerHeaderField = 'unknown';
        break;
    }
    
    return (
        <ul className="cards__list">
            <li className="cards__list-header"><h3>{innerHeaderField}</h3></li>
            {innerItemFieldArray.map((item: ArrayKey, index: number)=> <DataListFieldItem key={index} data={item}/>)}
        </ul>
    )
}