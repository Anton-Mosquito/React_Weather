import { createContext } from 'react';
import { AppContext } from '../types';

export const Context = createContext<AppContext>({
  dataCity: undefined,
  dataPosition: undefined,
  updateData: (_value) => console.warn('default'),
  loadingCards: false,
  updateWeatherCards: (_value) => console.warn('default'),
  loadingMain: false,
  typeRequset: '',
  trueInfo: true,
});
