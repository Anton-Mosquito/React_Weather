import type { Coordinates } from './domain/weather';

export type Event<P = any> = {
  type: string;
  payload?: P;
};

export type WeatherEvent =
  | { type: 'LOCATION_SELECTED'; payload: { coord: Coordinates } }
  | {
      type: 'UNITS_CHANGED';
      payload: { units: 'metric' | 'imperial' | 'standard' };
    }
  | { type: 'REFRESH'; payload?: undefined };
