import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { useCurrentLocation } from '@/hooks';
import getWeather from '@/services/requestCurrentWeather';
import getWet from '@/services/requestWeatherByCity';
import getNearbyCities from '@/services/requestNearbyCities';

import { CurrentWeather } from '@features/weather/components/CurrentWeather';
import Dots from '@features/weather/components/Dots';
import HourlyForecast from '@features/weather/components/HourlyForecast';

import { geolocationOptions } from '@/constant/option';
import { defaultCoords } from '@/constant/defaultCoords';
import { dots } from '@/constant/quantityOfDots';

import { Context } from '@/context';

import {
  Coordinates,
  OpenWeatherFindResponse,
  OpenWeatherWeatherResponse,
} from '@/types';
import {
  useLazyGetWeatherByCityQuery,
  useLazyGetWeatherQuery,
} from '@/store/services/weatherApi.service';

import styles from './styles.module.scss';

export const Main: React.FC = () => {
  const { location: currentLocation, error: currentError } =
    useCurrentLocation(geolocationOptions);
  const [dataPosition, setDataPosition] =
    useState<OpenWeatherWeatherResponse>();
  const [dataCity, setDataCity] = useState<OpenWeatherFindResponse>();
  const [loadingCards, setLoadingCard] = useState(true);
  const [loadingMain, setLoadingMain] = useState(true);
  const [trueInfo, setTrueInfo] = useState(true);
  const [typeRequset, setTypeRequset] = useState('Hourly');

  const lastCoords = useRef<Coordinates>(defaultCoords);
  const lastCity = useRef('');

  const targetLoaction = useMemo(() => {
    return currentLocation ?? defaultCoords;
  }, [currentLocation]);

  const [triggerGetWeatherByCity] = useLazyGetWeatherByCityQuery();
  const [triggerGetWeather] = useLazyGetWeatherQuery();

  const fetchWeather = useCallback(
    async (location: Coordinates) => {
      try {
        // try RTK Query lazy trigger first
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await triggerGetWeather({
          lat: location.lat,
          lon: location.lon,
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const data = res?.data ?? res;
        if (data) return data;
      } catch (e) {
        // continue to fallback
      }

      // fallback to legacy service
      const response = await getWeather(location);
      if (response?.cod === 200) return response;
      throw new Error(String(currentError));
    },
    [currentError, triggerGetWeather]
  );

  const fetchWet = useCallback(
    async ({ name }: { name?: string }) => {
      const response = await getWet(name ?? '');
      if (response?.cod === String(200)) return response;
      throw new Error(String(currentError));
    },
    [currentError]
  );

  const fetchNearbyWeather = useCallback(
    async (location: Coordinates) => {
      const response = await getNearbyCities(location);
      if (response?.cod === String(200)) return response;
      throw new Error(String(currentError));
    },
    [currentError]
  );

  const setData = useCallback(
    ({ weather, wet }: { weather: any; wet: any }) => {
      setDataPosition(weather);
      setLoadingMain(false);
      setDataCity(wet);
      setLoadingCard(false);
      setTrueInfo(true);
      lastCity.current = weather.name ?? '';
    },
    []
  );

  const fetchData = useCallback(
    async (location: Coordinates) => {
      try {
        const weather = await fetchWeather(location);
        const w: any = weather;
        const cityName = (w && (w.name ?? w.city?.name)) || '';
        const wet = await fetchWet(cityName);
        setData({ weather, wet });
      } catch (error) {
        // keep legacy behaviour
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    [fetchWeather, fetchWet, setData]
  );

  useEffect(() => {
    fetchData(targetLoaction);
    lastCoords.current = targetLoaction;
  }, [fetchData, targetLoaction]);

  const showFullLoading = useCallback(() => {
    setLoadingCard(true);
    setLoadingMain(true);
  }, []);

  const showPartLoading = useCallback(() => {
    setTrueInfo(true);
    setLoadingCard(true);
  }, []);

  const warningRequest = useCallback(() => {
    setLoadingMain(false);
    setLoadingCard(false);
    setTrueInfo(false);
  }, []);

  const setDataRequestFromButton = useCallback((result: any) => {
    setDataCity(result);
    setLoadingCard(false);
  }, []);

  const updateRequestFromButton = useCallback(
    async (flag: string) => {
      let result = {};
      try {
        switch (flag) {
          case 'Hourly':
            setTypeRequset('Hourly');
            // use RTK Query lazy endpoint for city search
            try {
              // trigger returns a promise that may contain { data }
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              const res = await triggerGetWeatherByCity(lastCity.current);
              // prefer res.data if present
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              result = res?.data ?? res;
            } catch (e) {
              // fallback to legacy service
              // eslint-disable-next-line no-console
              console.log('RTK query failed, falling back', e);
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              result = await fetchWet({ name: lastCity.current });
            }
            break;
          case 'Nearby':
            setTypeRequset('Nearby');
            result = await fetchNearbyWeather(lastCoords.current);
            break;
          default:
            break;
        }
        setDataRequestFromButton(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        warningRequest();
      }
    },
    [fetchNearbyWeather, fetchWet, setDataRequestFromButton, warningRequest]
  );

  const updateWeatherCards = useCallback(
    (flag: string): void => {
      showPartLoading();
      updateRequestFromButton(flag);
    },
    [showPartLoading, updateRequestFromButton]
  );

  const setNearbyData = useCallback(
    (result: any) => {
      setTrueInfo(true);
      setDataPosition(result);
      setLoadingMain(false);
      updateWeatherCards('Nearby');
    },
    [updateWeatherCards]
  );

  const updateRequest = useCallback(
    async (city: string) => {
      try {
        // Trigger city search via RTK Query
        let wet: any = null;
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const r = await triggerGetWeatherByCity(city);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          wet = r?.data ?? r;
        } catch (e) {
          // fallback to legacy
          // eslint-disable-next-line no-console
          console.log('city trigger failed, fallback', e);
          wet = await fetchWet({ name: city });
        }

        const coord = wet?.city?.coord ?? wet?.list?.[0]?.coord ?? null;
        if (!coord) {
          throw new Error('No coordinates from city search');
        }
        lastCoords.current = coord;
        lastCity.current =
          wet.city?.name ?? wet?.list?.[0]?.name ?? lastCity.current;

        // Trigger weather fetch via RTK Query
        let weather: any = null;
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const r2 = await triggerGetWeather({
            lat: coord.lat,
            lon: coord.lon,
          });
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          weather = r2?.data ?? r2;
        } catch (e) {
          // fallback to legacy
          // eslint-disable-next-line no-console
          console.log('weather trigger failed, fallback', e);
          weather = await fetchWeather(coord);
        }

        switch (typeRequset) {
          case 'Hourly':
            setData({ weather, wet });
            break;
          case 'Nearby':
            setNearbyData(weather);
            break;
          default:
            break;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        warningRequest();
      }
    },
    [
      fetchWeather,
      fetchWet,
      setData,
      setNearbyData,
      typeRequset,
      warningRequest,
      triggerGetWeatherByCity,
      triggerGetWeather,
    ]
  );

  const updateData = useCallback(
    (city: string): void => {
      showFullLoading();
      updateRequest(city);
    },
    [showFullLoading, updateRequest]
  );

  return (
    <Context.Provider
      value={{
        dataPosition,
        updateData,
        dataCity,
        loadingCards,
        updateWeatherCards,
        loadingMain,
        typeRequset,
        trueInfo,
      }}
    >
      <section className={styles.wrapper}>
        <div className={styles.background}>
          {dots().map((item: number) => (
            <Dots key={item} />
          ))}
        </div>
        <div className={styles.container}>
          <HourlyForecast />
          <CurrentWeather />
        </div>
      </section>
    </Context.Provider>
  );
};

export default Main;
