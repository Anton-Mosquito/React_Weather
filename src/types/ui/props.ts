import type { ChangeEvent } from 'react';
import type { Weather } from '../domain/weather';

export interface CurrentWeatherProps {
  weather: Weather;
  onRefresh?: () => void;
  onUnitChange?: (units: 'metric' | 'imperial' | 'standard') => void;
}

export interface SearchBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export interface HourlyListProps {
  items: Weather['hourly'] | [];
}

export interface IRadio {
  id: number;
  forLabel: string;
  forId: string;
  text: string;
  check: boolean;
}
