import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import useCurrentLocation from './hooks/useCurrentLocation';
import getWeather from "./services/requestCurrentWeather";
import getWet from './services/requestWeatherByCity';
import getNearbyCities from './services/requestNearbyCities';

import { CurrentWeather } from './components/currentWeather/currentWeather';
import { Dots } from './components/dots/dots';
import { HourlyForecast } from './components/hourlyForecast/hourlyForecast';


import { geolocationOptions } from "./constant/option";
import { defaultCoords } from "./constant/defaultCoords";
import { dots } from './constant/quantityOfDots'

import { Context } from "./context/context";

import { ICoords } from './models/coords.model';
import { IDataCity } from './models/dataCity.model';
import IDataPosition from './models/dataPosition.model';

import styles from './App.module.scss';


export const App: React.FC = () => {
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
  throw { error: currentError };
}, [currentError]);

const fetchWet = useCallback(async ({ name }) => {
  const response = await getWet(name);
  if (response?.cod === String(200)) return response;
  throw { error: currentError };
}, [currentError]);

const fetchNearbyWeather = useCallback(async (location) => {
  const response = await getNearbyCities(location);
  if (response?.cod === String(200)) return response;
  throw { error: currentError };
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

const setNearbyData = useCallback((result)=> {
  setTrueInfo(true);
  setDataPosition(result);
  setLoadingMain(false);
  updateWeatherCards('Nearby');
}, []);


const setDataRequestFromButton = useCallback((result)=>{
  setDataCity(result);
  setLoadingCard(false);
}, [])

const updateRequest = useCallback( async (city: string)=>{
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
}, [fetchNearbyWeather, fetchWet, setDataRequestFromButton, warningRequest])

const updateWeatherCards = useCallback((flag: string):void => {
  showPartLoading();
  updateRequestFromButton(flag)
}, [showPartLoading, updateRequestFromButton]);

  return (
    <Context.Provider value={{ dataPosition: dataPosition, updateData: updateData, dataCity: dataCity, loadingCards: loadingCards, updateWeatherCards: updateWeatherCards, loadingMain: loadingMain , typeRequset: typeRequset , trueInfo: trueInfo}}>
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

export default App;
