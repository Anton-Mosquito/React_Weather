import React from 'react';
import { useGetWeatherQuery } from '@/store/services/weatherApi.service';
import { defaultCoords } from '@/constant';

const WeatherDemo: React.FC = () => {
  const { data, error, isLoading } = useGetWeatherQuery({
    lat: defaultCoords.lat,
    lon: defaultCoords.lon,
  });

  if (isLoading) return <div>Loading weather...</div>;
  if (error) return <div>Failed to load weather</div>;
  return (
    <div>
      <div>Weather demo:</div>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default WeatherDemo;
