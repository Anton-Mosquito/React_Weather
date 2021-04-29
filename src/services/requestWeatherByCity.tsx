import { IDataCity } from "../models/dataCity.model";

const API_KEY: string = '44b788430b6eae4f49d10064566fc911';
const URL: string =  'http://api.openweathermap.org/data/2.5/forecast?';

const delay = (ms: number) => {
  return new Promise((resolve: any) => setTimeout(() => resolve(), ms));
};

export default async function getWet(city :string): Promise<IDataCity | undefined> {
    let result;
      try {
        await delay(3000);
        const response = await fetch(`${URL}q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        result = data;
        return result
        } catch (e) {
          console.error(e);
        }
}

