export interface OpenWeatherWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface OpenWeatherCurrent {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  uvi?: number;
  clouds?: number;
  visibility?: number;
  wind_speed?: number;
  wind_deg?: number;
  wind_gust?: number;
  weather: OpenWeatherWeather[];
  rain?: { '1h'?: number } | number;
  snow?: { '1h'?: number } | number;
}

export interface OpenWeatherHourlyItem {
  dt: number;
  temp: number;
  feels_like?: number;
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  uvi?: number;
  clouds?: number;
  visibility?: number;
  wind_speed?: number;
  wind_deg?: number;
  wind_gust?: number;
  weather: OpenWeatherWeather[];
  pop?: number;
  rain?: { '1h'?: number } | number;
  snow?: { '1h'?: number } | number;
}

export interface OpenWeatherDailyTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface OpenWeatherDaily {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: OpenWeatherDailyTemp | number;
  feels_like?: {
    day?: number;
    night?: number;
    eve?: number;
    morn?: number;
  };
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  wind_speed?: number;
  wind_deg?: number;
  weather: OpenWeatherWeather[];
  clouds?: number;
  pop?: number;
  rain?: number | Record<string, number>;
  snow?: number | Record<string, number>;
  uvi?: number;
}

export interface OpenWeatherOneCallResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: OpenWeatherCurrent;
  hourly: OpenWeatherHourlyItem[];
  daily: OpenWeatherDaily[];
  alerts?: any[];
}

export type OpenWeatherMapper = (dto: OpenWeatherOneCallResponse) => unknown;
