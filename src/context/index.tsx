import { createContext } from 'react';
import ChangeContext from '../models/context.model';

export const Context = createContext<ChangeContext>({
  dataCity: undefined,
  dataPosition: undefined,
  updateData: (_value) => console.warn('default'),
  loadingCards: false,
  updateWeatherCards: (_value) => console.warn('default'),
  loadingMain: false,
  typeRequset: '',
  trueInfo: true,
});
