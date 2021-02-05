import { ICoords } from "./coords.model";

interface IDataCity {
    city: ICity;
    cod: string;
    cnt: number;
    list: Array<IMainInfo>;
    message: number;
}

interface ICity {
    coord : ICoords;
    country : string;
    id : number;
    name : string;
    population : number;
    sunrise : number;
    sunset : number;
    timezone : number;
}

interface IMainInfo {
    clouds: ICloud;
    dt : number;
    dt_txt : string;
    main : IMainData;
    pop : number;
    sys : ISystemData;
    visibility : number;
    weather : Array<IWeather>
    wind: IWInd;
}

interface ICloud {
    all : number;
}

interface IMainData {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min:number;
    sea_level?: number;
    grnd_level? : number;
    temp_kf : number;
}


interface ISystemData {
    pop : number
}

interface IWeather {
    id : number;
    main : string;
    description : string;
    icon : string;
}

interface IWInd {
    speed : number;
    deg : number;
    gust? : number;
}


export type {IDataCity, IMainInfo, IWeather};