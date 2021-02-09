import { useState, useEffect } from "react";
import { ICoords } from "../models/coords.model";
import { IOptions } from "../models/options.model";

const useCurrentLocation = (options: IOptions) => {

  const [location, setLocation] = useState<ICoords>();
  const [error, setError] = useState<string>();

  const handleSuccess = (pos : GeolocationPosition): void => {
    const { latitude:lat, longitude:lon } = pos.coords;

    setLocation({
      lat,
      lon,
    });
  };

  const handleError = (error: GeolocationPositionError): void => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);
  
  return { location, error };
};

export default useCurrentLocation;