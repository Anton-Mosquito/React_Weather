import type {
  OpenWeatherOneCallResponse,
  OpenWeatherCurrent,
  OpenWeatherHourlyItem,
  OpenWeatherDaily,
  OpenWeatherWeather,
  OpenWeatherWeatherResponse,
  OpenWeatherFindResponse,
  IMainInfo,
} from '../types';

import type {
  Weather,
  ForecastItem,
  Coordinates,
  WeatherCondition,
  Wind,
  Temperature,
  City,
} from '../types';

// Helper: map OpenWeather weather[] to domain WeatherCondition[]
const mapConditions = (arr: OpenWeatherWeather[] = []): WeatherCondition[] =>
  arr.map((w) => ({
    id: w.id,
    main: w.main,
    description: w.description,
    icon: w.icon,
  }));

const mapWind = (
  speed?: number,
  deg?: number,
  gust?: number
): Wind | undefined => {
  if (speed === undefined && deg === undefined && gust === undefined)
    return undefined;
  return { speed: speed ?? 0, deg, gust };
};

const mapCurrentToForecast = (c: OpenWeatherCurrent): ForecastItem => ({
  dt: c.dt,
  temp: c.temp,
  feels_like: c.feels_like,
  pressure: c.pressure,
  humidity: c.humidity,
  dew_point: c.dew_point,
  uvi: c.uvi,
  clouds: c.clouds,
  visibility: c.visibility,
  wind: mapWind(c.wind_speed ?? undefined, c.wind_deg ?? undefined, c.wind_gust ?? undefined),
  weather: mapConditions(c.weather),
  pop: (c as any).pop ?? undefined,
  rain: c.rain
    ? (typeof c.rain === 'object' ? (c.rain['1h'] ?? c.rain) : c.rain)
    : undefined,
  snow: c.snow ? (typeof c.snow === 'object' ? (c.snow['1h'] ?? c.snow) : c.snow) : undefined,
});

const mapHourlyToForecast = (h: OpenWeatherHourlyItem): ForecastItem => ({
  dt: h.dt,
  temp: h.temp,
  feels_like: h.feels_like,
  pressure: h.pressure,
  humidity: h.humidity,
  dew_point: h.dew_point,
  uvi: h.uvi,
  clouds: h.clouds,
  visibility: h.visibility,
  wind: mapWind(h.wind_speed ?? undefined, h.wind_deg ?? undefined, h.wind_gust ?? undefined),
  weather: mapConditions(h.weather),
  pop: h.pop,
  rain: h.rain ? (typeof h.rain === 'object' ? (h.rain['1h'] ?? h.rain) : h.rain) : undefined,
  snow: h.snow ? (typeof h.snow === 'object' ? (h.snow['1h'] ?? h.snow) : h.snow) : undefined,
});

const mapDailyToForecast = (d: OpenWeatherDaily): ForecastItem => {
  const temp: Temperature = typeof d.temp === 'number' ? d.temp : { ...d.temp };
  return {
    dt: d.dt,
    temp,
    feels_like: d.feels_like,
    pressure: d.pressure,
    humidity: d.humidity,
    dew_point: d.dew_point,
    uvi: d.uvi,
    clouds: d.clouds,
    wind: mapWind(d.wind_speed ?? undefined, d.wind_deg ?? undefined, undefined),
    weather: mapConditions(d.weather),
    pop: d.pop,
    rain: d.rain,
    snow: d.snow,
  };
};

// Public mappers
export const mapOneCallToWeather = (
  dto: OpenWeatherOneCallResponse
): Weather => {
  const city: City = {
    coord: { lat: dto.lat, lon: dto.lon },
    name: dto.timezone ?? '',
  };

  const current = dto.current ? mapCurrentToForecast(dto.current) : undefined;
  const hourly = Array.isArray(dto.hourly)
    ? dto.hourly.map(mapHourlyToForecast)
    : [];
  const daily = Array.isArray(dto.daily)
    ? dto.daily.map(mapDailyToForecast)
    : [];

  return {
    city,
    current,
    hourly,
    daily,
    timezone: dto.timezone,
    timezone_offset: dto.timezone_offset,
  };
};

export const mapWeatherResponseToWeather = (
  dto: OpenWeatherWeatherResponse
): Weather => {
  const city: City | undefined = dto.coord
    ? {
        coord: { lat: dto.coord.lat, lon: dto.coord.lon },
        name: dto.name ?? '',
      }
    : undefined;

  const current: ForecastItem = {
    dt: dto.dt ?? Date.now() / 1000,
    temp: dto.main?.temp || 0,
    feels_like: dto.main?.feels_like,
    pressure: dto.main?.pressure,
    humidity: dto.main?.humidity,
    clouds: dto.clouds?.all,
    visibility: dto.visibility,
    wind: dto.wind
      ? { speed: dto.wind.speed, deg: dto.wind.deg, gust: dto.wind.gust }
      : undefined,
    weather: dto.weather ? mapConditions(dto.weather) : [],
  };

  return {
    city,
    current,
    hourly: [],
    daily: [],
    timezone: undefined,
  };
};

export const mapFindResponseToWeathers = (
  dto: OpenWeatherFindResponse
): Weather[] => {
  const cityRef: Coordinates | undefined = dto.city?.coord
    ? { lat: dto.city.coord.lat, lon: dto.city.coord.lon }
    : undefined;

  return (dto.list || []).map((item: IMainInfo) => {
    const current: ForecastItem = {
      dt: item.dt,
      temp: item.main.temp,
      feels_like: item.main.feels_like,
      pressure: item.main.pressure,
      humidity: item.main.humidity,
      weather: item.weather ? mapConditions(item.weather) : [],
    };

    const city: City = {
      coord: cityRef ?? { lat: 0, lon: 0 },
      name: dto.city?.name ?? '',
    };

    return {
      id: String(item.dt),
      city,
      current,
      hourly: [],
      daily: [],
    };
  });
};
