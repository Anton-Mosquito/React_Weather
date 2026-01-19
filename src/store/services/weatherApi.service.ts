import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  cleanApiPayload,
  mapOneCallToWeather,
  mapWeatherResponseToWeather,
  mapFindResponseToWeathers,
} from '../../features/weather/api/mappers';
import type {
  OpenWeatherOneCallResponse,
  OpenWeatherWeatherResponse,
  OpenWeatherFindResponse,
} from '../../features/weather/api/types';
import type { Weather } from '../../features/weather/types/domain';

const API_KEY =
  typeof process !== 'undefined'
    ? (process.env.VITE_OPENWEATHER_API_KEY as string)
    : undefined;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5',
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<Weather, { lat: number; lon: number }>({
      query: ({ lat, lon }) => ({
        url: `/onecall`,
        params: { lat, lon, exclude: 'minutely', appid: API_KEY },
      }),
      transformResponse: (response: OpenWeatherOneCallResponse) => {
        const cleaned = cleanApiPayload(
          response as any
        ) as OpenWeatherOneCallResponse;
        return mapOneCallToWeather(cleaned);
      },
    }),

    getWeatherByCity: builder.query<Weather[], string>({
      query: (q) => ({ url: '/find', params: { q, appid: API_KEY } }),
      transformResponse: (response: OpenWeatherFindResponse) => {
        const cleaned = cleanApiPayload(
          response as any
        ) as OpenWeatherFindResponse;
        return mapFindResponseToWeathers(cleaned);
      },
    }),

    getWeather: builder.query<Weather, { lat: number; lon: number }>({
      query: ({ lat, lon }) => ({
        url: '/weather',
        params: { lat, lon, appid: API_KEY },
      }),
      transformResponse: (response: OpenWeatherWeatherResponse) => {
        const cleaned = cleanApiPayload(
          response as any
        ) as OpenWeatherWeatherResponse;
        return mapWeatherResponseToWeather(cleaned);
      },
    }),
  }),
});

export const {
  useGetCurrentWeatherQuery,
  useGetWeatherByCityQuery,
  useGetWeatherQuery,
  useLazyGetWeatherByCityQuery,
  useLazyGetWeatherQuery,
} = weatherApi;
