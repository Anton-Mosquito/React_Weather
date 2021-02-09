import { ICoords } from "../models/coords.model";

const API_key: string = '44b788430b6eae4f49d10064566fc911';
const URL: string =  'http://api.openweathermap.org/data/2.5/find?';

const delay = (ms: number) => {
  return new Promise((resolve: any) => setTimeout(() => resolve(), ms));
};

export default async function getNearbyCities(coords : ICoords) :Promise<any>{   
    let result;
      try {
        await delay(3000);
        const response = await fetch(`${URL}lat=${coords.lat}&lon=${coords.lon}&cnt=${9}&units=metric&appid=${API_key}`);
        const data = await response.json();
        result = data;
        } catch (e) {
          console.error(e);
        } finally {
          return result
        }
}