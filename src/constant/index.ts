import { Coordinates, GeolocationOptions } from '@/types';

export const defaultCoords: Coordinates = {
  lat: 50.45466,
  lon: 30.5238,
};

export const geolocationOptions: GeolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};

export const dots = new Array(20).fill(0).map((_, index) => index);
