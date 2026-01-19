import type {
  OpenWeatherFindResponse,
  OpenWeatherWeatherResponse,
} from './api/legacyEndpoints';

export interface AppContext {
  dataCity?: OpenWeatherFindResponse;
  dataPosition?: OpenWeatherWeatherResponse;
  updateData: (value: string) => void;
  loadingCards: boolean;
  updateWeatherCards: (value: string) => void;
  loadingMain: boolean;
  typeRequset: string;
  trueInfo: boolean;
}
