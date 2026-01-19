import { Coordinates, OpenWeatherWeatherResponse } from '../types';

const API_KEY: string = '44b788430b6eae4f49d10064566fc911';
const URL: string = 'http://api.openweathermap.org/data/2.5/weather?';

const delay = (ms: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};

export default async function getWeather(
  coords: Coordinates
): Promise<OpenWeatherWeatherResponse | undefined> {
  let result;
  try {
    await delay(3000);
    const response = await fetch(
      `${URL}lat=${coords.lat}&lon=${coords.lon}&units=metric&APPID=${API_KEY}`
    );
    const data = await response.json();
    result = data;
    return result;
  } catch (e) {
    console.error(e);
  }
}
