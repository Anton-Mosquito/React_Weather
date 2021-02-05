import React from "react";
import { ImageField } from "./imageField/ImageField";
import { DateField } from "./dateField/dateField";
import { DataListField } from "./dataListField/dataListField";
import './forecastListItem.module.scss';
import { IMainInfo, IWeather } from "../../../../models/dataCity.model";

type CityProps = {
    data : IMainInfo;
}

type ArrayKey = [string, number];

export const ForecastListItem = ({data}: CityProps) => {
    let dateData: Array<ArrayKey> = [];
    let imageData: Array<IWeather> = [];
    let temperatureArray: Array<ArrayKey> = [];
    let windArray: Array<ArrayKey> = [];

    if (data) {
        dateData = Object.entries(data).filter((item: any) => item[0] === 'dt');
        imageData =  Object.values(data.weather)
        temperatureArray = Object.entries(data).filter((item: any) => item[0] === 'main');
        windArray = Object.entries(data).filter((item: any) => item[0] === 'wind');
    }

    return (
        <div className="cards">
            {dateData.map((item: ArrayKey, index: number) =>  <DateField key={index} data={item}/>)}
            {imageData.map((item: IWeather, index: number) => <ImageField key={index} data ={item}/>)}
            {temperatureArray.map((item: ArrayKey, index: number) => <DataListField key={index} data={item}/>)}
            {windArray.map((item: ArrayKey, index: number) => <DataListField key={index} data={item}/>)}
        </div>
    )
}