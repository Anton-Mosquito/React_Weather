import type { Weather } from '../domain/weather';
//import type { AsyncStatus, ApiError } from '../common';

// export interface WeatherState {
//   data: Weather | null;
//   status: AsyncStatus;
//   error: ApiError | null;
//   lastFetched?: number;
//   units: 'metric' | 'imperial' | 'standard';
// }

// export interface SetUnitsPayload {
//   units: WeatherState['units'];
// }

// export interface SetCityPayload {
//   cityId?: number | string;
//   coord?: { lat: number; lon: number };
// }

export interface IAppState {
  dataCity: Weather[] | undefined;
  dataPosition: Weather | undefined;
  loadingCards: boolean;
  loadingMain: boolean;
  typeRequest: string;
  trueInfo: boolean;
}

export interface IWeatherState extends IAppState {
  updateData: (value: string) => void;
  updateWeatherCards: (value: string) => void;
}
