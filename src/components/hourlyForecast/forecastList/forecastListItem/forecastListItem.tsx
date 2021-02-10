import React from "react";
import { CityField } from "./cityField/cityField";
import { ImageField } from "./imageField/ImageField";
import { DateField } from "./dateField/dateField";
import { DataListField } from "./dataListField/dataListField";
import { IMainInfo, IWeather } from "../../../../models/dataCity.model";

import styles from './forecastListItem.module.scss';


type CityProps = {
    data : IMainInfo;
}

type ArrayKey = [string, number];

export const ForecastListItem: React.FC<CityProps>= ({data}) => {
    let cityData: Array<ArrayKey> = [];
    let dateData: Array<ArrayKey> = [];
    let imageData: Array<IWeather> = [];
    let temperatureArray: Array<ArrayKey> = [];
    let windArray: Array<ArrayKey> = [];

    if (data) {
        cityData = Object.entries(data).filter((item: any) => item[0] === 'name');
        dateData = Object.entries(data).filter((item: any) => item[0] === 'dt');
        imageData =  Object.values(data.weather)
        temperatureArray = Object.entries(data).filter((item: any) => item[0] === 'main');
        windArray = Object.entries(data).filter((item: any) => item[0] === 'wind');
    }

    return (
        <div className={styles.cards}>
            {cityData.length > 0 ? cityData.map((item: ArrayKey, index: number) =>  <CityField key={index} data={item}/>) : dateData.map((item: ArrayKey, index: number) =>  <DateField key={index} data={item}/>)}
            {imageData.map((item: IWeather, index: number) => <ImageField key={index} data ={item}/>)}
            {temperatureArray.map((item: ArrayKey, index: number) => <DataListField key={index} data={item}/>)}
            {windArray.map((item: ArrayKey, index: number) => <DataListField key={index} data={item}/>)}
        </div>
    )
}