import { useState, useEffect } from 'react';
import { Coordinates, GeolocationOptions } from '../types';

const useCurrentLocation = (options: GeolocationOptions) => {
  const [location, setLocation] = useState<Coordinates>();
  const [error, setError] = useState<string>();

  const handleSuccess = (pos: GeolocationPosition): void => {
    const { latitude: lat, longitude: lon } = pos.coords;

    setLocation({
      lat,
      lon,
    });
  };

  const handleError = (errorPosition: GeolocationPositionError): void => {
    setError(errorPosition.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;
