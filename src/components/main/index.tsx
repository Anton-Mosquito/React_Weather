import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import useCurrentLocation from '../../hooks';
import getWeather from "../../services/requestCurrentWeather";
import getWet from '../../services/requestWeatherByCity';
import getNearbyCities from '../../services/requestNearbyCities';

import { CurrentWeather } from '../currentWeather';
import { Dots } from '../dots';
import { HourlyForecast } from '../hourlyForecast';


import { geolocationOptions } from "../../constant/option";
import { defaultCoords } from "../../constant/defaultCoords";
import { dots } from '../../constant/quantityOfDots'

import { Context } from "../../context";

import { ICoords } from '../../models/coords.model';
import { IDataCity } from '../../models/dataCity.model';
import IDataPosition from '../../models/dataPosition.model';

import styles from './styles.module.scss';


export const Main: React.FC = () => {
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const [dataPosition, setDataPosition] = useState<IDataPosition>();
  const [dataCity, setDataCity] = useState<IDataCity>();
  const [loadingCards, setLoadingCard] = useState(true);
  const [loadingMain, setLoadingMain] = useState(true);
  const [trueInfo, setTrueInfo] = useState(true);
  const [typeRequset, setTypeRequset] = useState('Hourly');

  const lastCoords = useRef<ICoords>(defaultCoords);
  const lastCity = useRef('');

  const targetLoaction = useMemo(() => {
    return currentLocation ?? defaultCoords;
  }, [currentLocation]);

  const fetchWeather = useCallback(async (location) => {
    const response = await getWeather(location);
    if (response?.cod === 200) return response;
    throw new Error(currentError);
  }, [currentError]);

  const fetchWet = useCallback(async ({ name }) => {
    const response = await getWet(name);
    if (response?.cod === String(200)) return response;
    throw new Error(currentError);
  }, [currentError]);

  const fetchNearbyWeather = useCallback(async (location) => {
    const response = await getNearbyCities(location);
    if (response?.cod === String(200)) return response;
    throw new Error(currentError);
  }, [currentError]);

  const setData = useCallback(({ weather, wet }) => {
    setDataPosition(weather);
    setLoadingMain(false);
    setDataCity(wet);
    setLoadingCard(false);
    setTrueInfo(true);
    lastCity.current = weather.name;
  }, []);

  const fetchData = useCallback(async (location) => {
    try {
      const weather = await fetchWeather(location);
      const wet = await fetchWet(weather);
      setData({ weather, wet });
    } catch(error) {
      console.log(error);
    }
  }, [fetchWeather, fetchWet, setData]);

  useEffect(() => {
    fetchData(targetLoaction);
    lastCoords.current = targetLoaction;
  }, [fetchData, targetLoaction]);

  const showFullLoading = useCallback(()=> {
    setLoadingCard(true);
    setLoadingMain(true);
  }, []);

  const showPartLoading = useCallback(()=>{
    setTrueInfo(true);
    setLoadingCard(true);
  }, [])

  const warningRequest = useCallback(()=> {
    setLoadingMain(false);
    setLoadingCard(false);
    setTrueInfo(false);
  }, []);

  const setDataRequestFromButton = useCallback((result)=>{
    setDataCity(result);
    setLoadingCard(false);
  }, []);

  const updateRequestFromButton = useCallback(async (flag: string)=> {
    let result = {};
    try {
      switch (flag) {
        case 'Hourly':
          setTypeRequset('Hourly');
          result = await fetchWet({name: lastCity.current});
          break;
        case 'Nearby':
          setTypeRequset('Nearby');
          result = await fetchNearbyWeather(lastCoords.current);
          break;
        default:
          break;
        }
        setDataRequestFromButton(result);
      } catch(error) {
        console.log(error);
        warningRequest();
      }
  }, [fetchNearbyWeather, fetchWet, setDataRequestFromButton, warningRequest]);

  const updateWeatherCards = useCallback((flag: string):void => {
    showPartLoading();
    updateRequestFromButton(flag)
  }, [showPartLoading, updateRequestFromButton]);

  const setNearbyData = useCallback((result)=> {
    setTrueInfo(true);
    setDataPosition(result);
    setLoadingMain(false);
    updateWeatherCards('Nearby');
  }, [updateWeatherCards]);

  const updateRequest = useCallback( async(city: string) => {
    try {
      const wet = await fetchWet({name: city});
      lastCoords.current = wet.city.coord;
      lastCity.current = wet.city.name;
      const weather = await fetchWeather(wet.city.coord);
      switch (typeRequset) {
        case 'Hourly':
          setData({weather, wet});
        break;
        case 'Nearby':
          setNearbyData(weather);
        break;
        default:
        break;
      }
    } catch(error) {
      console.log(error);
      warningRequest();
    }
  }, [fetchWeather, fetchWet, setData, setNearbyData, typeRequset, warningRequest]);

  const updateData = useCallback((city: string): void => {
    showFullLoading();
    updateRequest(city);
  }, [showFullLoading, updateRequest]);

  return (
    <Context.Provider value={{ dataPosition, updateData, dataCity, loadingCards, updateWeatherCards, loadingMain , typeRequset , trueInfo}}>
      <section className={styles.wrapper}>
        <div className={styles.background}>
          {dots().map((item: number) => <Dots key={item} />)}
        </div>
        <div className={styles.container}>
          <HourlyForecast />
          <CurrentWeather />
        </div>
      </section>
    </Context.Provider>
  );
}

