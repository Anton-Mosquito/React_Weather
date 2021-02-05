import React, { useState ,useEffect } from 'react';
import useCurrentLocation from './hooks/useCurrentLocation';
import getWeather from "./services/requestCurrentWeather";
import getWet from './services/requestWeatherByCity';

import { CurrentWeather } from './components/currentWeather/currentWeather';
import { Dots } from './components/dots/dots';
import {HourlyForecast} from './components/hourlyForecast/hourlyForecast';


import { geolocationOptions } from "./constant/option";
import { defaultCoords } from "./constant/defaultCoords";
import { dots } from './constant/quantityOfDots'

import { Context } from "./context/context";

import { ICoords } from './models/coords.model';
import { IDataCity } from './models/dataCity.model';
import IDataPosition from './models/dataPosition.model';

import './App.scss';

export const App:React.FC = () => {
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const [dataPosition, setDataPosition] = React.useState<IDataPosition>();
  const [dataCity, setDataCity] = React.useState<IDataCity>();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (currentLocation) { getWeather(currentLocation).then((result: IDataPosition) => {
      if (result.cod === 200) {
        setDataPosition(result);
        getWet(result.name).then((response: IDataCity) => {
          setDataCity(response)
          setLoading(false);
        });
      } else {
        console.log(currentError);
      }
      })
      .catch(e => console.log(e))
    } else {
      getWeather(defaultCoords).then((result: IDataPosition) => {
        if (result.cod === 200) {
          setDataPosition(result)
          getWet(result.name).then((response: IDataCity) => {
            setDataCity(response)
            setLoading(false);
          });
        } else {
          console.log('Error');
        }
      })
    }
  }, [currentLocation]);


  const updateData = (x: string): void => {
    setLoading(true);
    getWet(x).then((response: IDataCity)=> {
      if (response.cod === '200') {
        const updatedCoords: ICoords = response.city.coord;
        getWeather(updatedCoords).then((res : IDataPosition)=>{
          setDataPosition(res);
          setLoading(false);
        });
        setDataCity(response);
      } else {
        console.log('Error');
      }
    });
  };

  return (
        <Context.Provider value={{ dataPosition: dataPosition, updateData: updateData , dataCity: dataCity, loading: loading }}>
          <section className="wrapper">
            <div className="background">
              {dots().map((item: number)=><Dots key={item}/>)}
            </div>
            <div className="container">
              <HourlyForecast/>
              <CurrentWeather/>
            </div>
          </section>
        </Context.Provider>
  );
}

export default App;
