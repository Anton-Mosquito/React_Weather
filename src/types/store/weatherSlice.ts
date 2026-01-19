import type { Weather } from '../domain/weather';
import type { AsyncStatus, ApiError } from '../common';

export interface WeatherState {
  data: Weather | null;
  status: AsyncStatus;
  error: ApiError | null;
  lastFetched?: number;
  units: 'metric' | 'imperial' | 'standard';
}

export interface SetUnitsPayload {
  units: WeatherState['units'];
}

export interface SetCityPayload {
  cityId?: number | string;
  coord?: { lat: number; lon: number };
}
