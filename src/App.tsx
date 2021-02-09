import React, { useState, useEffect, useRef } from 'react';
import useCurrentLocation from './hooks/useCurrentLocation';
import getWeather from "./services/requestCurrentWeather";
import getWet from './services/requestWeatherByCity';

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

import './App.scss';
import getNearbyCities from './services/requestNearbyCities';

export const App: React.FC = () => {
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const [dataPosition, setDataPosition] = React.useState<IDataPosition>();
  const [dataCity, setDataCity] = React.useState<IDataCity>();
  const [loadingCards, setLoadingCard] = React.useState(true);
  const [loadingMain, setLoadingMain] = React.useState(true);
  const [trueInfo, setTrueInfo] = React.useState(true);
  const [typeRequset, setTypeRequset] = React.useState('Hourly');

  const lastCoords = useRef(defaultCoords);
  const lastCity = useRef('');

  useEffect(() => {
    if (currentLocation) {
      getWeather(currentLocation).then((result: IDataPosition) => {
        if (result.cod === 200) {
          setDataPosition(result);
          setLoadingMain(false);
          lastCity.current = result.name;
          getWet(result.name).then((response: IDataCity) => {
            setDataCity(response)
            setLoadingCard(false);
          });
          
        }
        else {
          console.log('Error' , currentError );
        }
      })
        .catch(e => console.log('Error behind promise!', e));
      lastCoords.current = currentLocation;
    } else {
      getWeather(defaultCoords).then((result: IDataPosition) => {
        if (result.cod === 200) {
          setDataPosition(result);
          setLoadingMain(false);
          lastCity.current = result.name;
          getWet(result.name).then((response: IDataCity) => {
            setDataCity(response)
            setLoadingCard(false);
          });
        } else {
          console.log('Error' , result.message);
        }
      })
      lastCoords.current = defaultCoords;
    }
  }, [currentLocation]);


  const updateData = (city: string): void => {
    setLoadingCard(true);
    setLoadingMain(true);
    switch (typeRequset) {
      case 'Hourly':
        getWet(city).then((response: IDataCity) => {
          if (response.cod === '200') { 
            const updatedCoords: ICoords = response.city.coord;
            lastCoords.current = updatedCoords;
            lastCity.current = response.city.name;
            getWeather(updatedCoords).then((result: IDataPosition) => {
              setTrueInfo(true);
              setDataPosition(result);
              setLoadingMain(false);
              setLoadingCard(false);
            });
            setDataCity(response);
          } else {
            console.log('Error');
            setLoadingMain(false);
            setLoadingCard(false);
            setTrueInfo(false);
          }
        });
      break;
      case 'Nearby':
        getWet(city).then((response: IDataCity) => {
          if (response.cod === '200') { 
            const updatedCoords: ICoords = response.city.coord;
            lastCoords.current = updatedCoords;
            lastCity.current = response.city.name;
            getWeather(updatedCoords).then((result: IDataPosition) => {
              setTrueInfo(true);
              setDataPosition(result);
              setLoadingMain(false);
              updateWeatherCards('Nearby');
            });
          } else {
            console.log('Error');
            setLoadingCard(false);
            setLoadingMain(false);
            setTrueInfo(false);
          }
        });
      break;
    }
  
  };

  const updateWeatherCards = (flag: string): void => {
    setTrueInfo(true);
    setLoadingCard(true);
    switch (flag) {
      case 'Hourly':
        setTypeRequset('Hourly');
        getWet(lastCity.current).then((response: IDataCity) => {
          if (response.cod === '200') {
            setDataCity(response);
            setLoadingCard(false);
          } else {
            console.log('Error');
            setLoadingMain(false);
            setLoadingCard(false);
            setTrueInfo(false);
          }
        });
      break;
      case 'Nearby':
        setTypeRequset('Nearby');
        getNearbyCities(lastCoords.current).then((response: IDataCity) => {
          if (response.cod === '200') {
            setDataCity(response);
            setLoadingCard(false);
          } else {
            console.log('Error');
            setLoadingMain(false);
            setLoadingCard(false);
            setTrueInfo(false);
          }
        });
      break;
    }
  }

  return (
    <Context.Provider value={{ dataPosition: dataPosition, updateData: updateData, dataCity: dataCity, loadingCards: loadingCards, updateWeatherCards: updateWeatherCards, loadingMain: loadingMain , typeRequset: typeRequset , trueInfo: trueInfo}}>
      <section className="wrapper">
        <div className="background">
          {dots().map((item: number) => <Dots key={item} />)}
        </div>
        <div className="container">
          <HourlyForecast />
          <CurrentWeather />
        </div>
      </section>
    </Context.Provider>
  );
}

export default App;
