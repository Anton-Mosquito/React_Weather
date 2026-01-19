export interface AppContext {
  dataCity?: import('./domain/weather').Weather[];
  dataPosition?: import('./domain/weather').Weather;
  updateData: (value: string) => void;
  loadingCards: boolean;
  updateWeatherCards: (value: string) => void;
  loadingMain: boolean;
  typeRequset: string;
  trueInfo: boolean;
}
