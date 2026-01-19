// API DTOs for existing endpoints (find / forecast / weather)

export interface OpenWeatherFindResponse {
  city: ICity;
  cod: string;
  cnt: number;
  list: IMainInfo[];
  message: number;
}

export interface ICity {
  coord: ICoord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface IMainInfo {
  clouds: ICloud;
  dt: number;
  dt_txt: string;
  main: IMainData;
  pop: number;
  sys: ISystemData;
  visibility: number;
  weather: IWeather[];
  wind: IWInd;
}

export interface ICloud {
  all: number;
}

export interface IMainData {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

export interface ISystemData {
  pop?: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWInd {
  speed: number;
  deg: number;
  gust?: number;
}

export interface OpenWeatherWeatherResponse {
  message?: string;
  base?: string;
  clouds?: ICloud;
  cod?: number;
  coord?: ICoord;
  dt?: number;
  id?: number;
  main?: IMainData;
  name?: string;
  sys?: ISystemData;
  timezone?: number;
  visibility?: number;
  weather?: IWeather[];
  wind?: IWInd;
}

export interface ICoord {
  lon: number;
  lat: number;
}
