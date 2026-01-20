import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useCurrentLocation } from '@/hooks';

import { CurrentWeather } from '@features/weather/components/CurrentWeather';
import HourlyForecast from '@features/weather/components/HourlyForecast';

import { geolocationOptions, defaultCoords, dots } from '@/constant';
import { Coordinates, OpenWeatherWeatherResponse, Weather } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  setDataCity,
  setDataPosition,
  setLoadingCards,
  setLoadingMain,
  setTypeRequest,
  setTrueInfo,
} from '@/store/slices/appSlice';
import {
  useLazyGetWeatherByCityQuery,
  useLazyGetWeatherQuery,
  useLazyGetNearbyCitiesQuery,
} from '@/store/services/weatherApi.service';

import styles from './styles.module.scss';

export const Main = () => {
  const { location: currentLocation } = useCurrentLocation(geolocationOptions);
  const dispatch = useAppDispatch();
  const {
    dataPosition,
    dataCity,
    loadingCards,
    loadingMain,
    typeRequest,
    trueInfo,
  } = useAppSelector((s) => s.app);

  const lastCoords = useRef<Coordinates>(defaultCoords);
  const lastCity = useRef('');

  const targetLoaction = useMemo(
    () => currentLocation ?? defaultCoords,
    [currentLocation]
  );

  const [triggerGetWeatherByCity] = useLazyGetWeatherByCityQuery();
  const [triggerGetWeather] = useLazyGetWeatherQuery();
  const [triggerGetNearbyCities] = useLazyGetNearbyCitiesQuery();

  const setData = useCallback(
    ({ weather, wet }: { weather: Weather; wet: Weather[] }) => {
      dispatch(setDataPosition(weather));
      dispatch(setLoadingMain(false));
      dispatch(setDataCity(wet));
      dispatch(setLoadingCards(false));
      dispatch(setTrueInfo(true));
      lastCity.current = weather?.city?.name ?? '';
    },
    [dispatch]
  );

  const fetchData = useCallback(
    async (location: Coordinates) => {
      try {
        // fetch weather (unwrap to get typed data)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const weather = await triggerGetWeather({
          lat: location.lat,
          lon: location.lon,
        }).unwrap();

        const cityName = weather?.city?.name ?? '';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const wet = await triggerGetWeatherByCity(cityName).unwrap();

        setData({ weather, wet });
      } catch (error) {
        // keep legacy behaviour: show nothing but don't crash
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    [setData, triggerGetWeather, triggerGetWeatherByCity]
  );

  useEffect(() => {
    fetchData(targetLoaction);
    lastCoords.current = targetLoaction;
  }, [fetchData, targetLoaction]);

  const showFullLoading = useCallback(() => {
    dispatch(setLoadingCards(true));
    dispatch(setLoadingMain(true));
  }, [dispatch]);

  const showPartLoading = useCallback(() => {
    dispatch(setTrueInfo(true));
    dispatch(setLoadingCards(true));
  }, [dispatch]);

  const warningRequest = useCallback(() => {
    dispatch(setLoadingMain(false));
    dispatch(setLoadingCards(false));
    dispatch(setTrueInfo(false));
  }, [dispatch]);

  const setDataRequestFromButton = useCallback(
    (result: Weather[] = []) => {
      dispatch(setDataCity(result));
      dispatch(setLoadingCards(false));
    },
    [dispatch]
  );

  const updateRequestFromButton = useCallback(
    async (flag: string) => {
      let result: Weather[] = [];
      try {
        switch (flag) {
          case 'Hourly': {
            dispatch(setTypeRequest('Hourly'));
            result = await triggerGetWeatherByCity(lastCity.current).unwrap();
            break;
          }
          case 'Nearby': {
            dispatch(setTypeRequest('Nearby'));
            result = await triggerGetNearbyCities({
              lat: lastCoords.current.lat,
              lon: lastCoords.current.lon,
            }).unwrap();
            break;
          }
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
    [
      setDataRequestFromButton,
      warningRequest,
      triggerGetWeatherByCity,
      triggerGetNearbyCities,
    ]
  );

  const updateWeatherCards = useCallback(
    (flag: string): void => {
      showPartLoading();
      updateRequestFromButton(flag);
    },
    [showPartLoading, updateRequestFromButton]
  );

  const setNearbyData = useCallback(
    (result: Weather) => {
      dispatch(setTrueInfo(true));
      dispatch(setDataPosition(result));
      dispatch(setLoadingMain(false));
      updateWeatherCards('Nearby');
    },
    [dispatch, updateWeatherCards]
  );

  const updateRequest = useCallback(
    async (city: string) => {
      try {
        // city search
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const wet: Weather[] = await triggerGetWeatherByCity(city).unwrap();

        const coord = wet?.[0]?.city?.coord ?? null;
        if (!coord) throw new Error('No coordinates from city search');

        lastCoords.current = coord;
        lastCity.current = wet?.[0]?.city?.name ?? lastCity.current;

        // fetch weather
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const weather = await triggerGetWeather({
          lat: coord.lat,
          lon: coord.lon,
        }).unwrap();

        switch (typeRequest) {
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
      setData,
      setNearbyData,
      typeRequest,
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
    <section className={styles.wrapper}>
      <div className={styles.background}>
        {dots.map((item: number) => (
          <span key={item} className={styles.span} />
        ))}
      </div>
      <div className={styles.container}>
        <HourlyForecast />
        <CurrentWeather />
      </div>
    </section>
  );
};

export default Main;
