interface IDataPosition {
    base: string;
    clouds: ICloud;
    cod: number;
    coord: ICoord;
    dt: number;
    id: number;
    main: IMainData;
    name: string;
    sys: ISystemData;
    timezone: number;
    visibility: number;
    weather: Array<IWeather>
    wind: IWInd;
}

interface ICloud {
    all : number;
}

interface ICoord {
    lon : number;
    lat : number;
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
}


interface ISystemData {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
    message? : string;
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


export default IDataPosition;