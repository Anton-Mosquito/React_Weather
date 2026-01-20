export interface Coordinates {
  lat: number;
  lon: number;
}

export interface City {
  id?: number | string;
  name: string;
  country?: string;
  coord: Coordinates;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon?: string;
}

export type Temperature =
  | number
  | {
      day?: number;
      min?: number;
      max?: number;
      night?: number;
      eve?: number;
      morn?: number;
    };

export interface Wind {
  speed: number;
  deg?: number;
  gust?: number;
}

export interface ForecastItem {
  dt: number; // unix timestamp
  temp: Temperature;
  feels_like?: Temperature | number;
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  uvi?: number;
  clouds?: number;
  visibility?: number;
  wind?: Wind;
  weather: WeatherCondition[];
  pop?: number; // probability of precipitation
  rain?: number | { [key: string]: number };
  snow?: number | { [key: string]: number };
}

export interface Weather {
  id?: string;
  city?: City;
  current?: ForecastItem;
  hourly?: ForecastItem[];
  daily?: ForecastItem[];
  timezone?: string;
  timezone_offset?: number;
  units?: 'metric' | 'imperial' | 'standard';
}
