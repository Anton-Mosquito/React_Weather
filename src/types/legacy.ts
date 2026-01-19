// Legacy/compatibility types copied from src/models to ease migration

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IOptions {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

export interface IDataCity {
  city: ICity;
  cod: string;
  cnt: number;
  list: IMainInfo[];
  message: number;
}

export interface ICity {
  coord: ICoords;
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
  country?: string;
  id?: number;
  sunrise?: number;
  sunset?: number;
  type?: number;
  message?: string;
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

export interface IDataPosition {
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

export interface ChangeContext {
  dataCity?: IDataCity;
  dataPosition?: IDataPosition;
  updateData: (value: string) => void;
  loadingCards: boolean;
  updateWeatherCards: (value: string) => void;
  loadingMain: boolean;
  typeRequset: string;
  trueInfo: boolean;
}
