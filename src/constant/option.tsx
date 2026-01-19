import { GeolocationOptions } from '../types';

export const geolocationOptions: GeolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};
