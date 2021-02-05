import { ICoords } from "../models/coords.model";
import IData  from "../models/dataPosition.model";

const API_key: string = '44b788430b6eae4f49d10064566fc911';
const URL: string =  'http://api.openweathermap.org/data/2.5/weather?';

export default async function getWeather(coords : ICoords) :Promise<IData>{   
  let result;
    try {
        const response = await fetch(`${URL}lat=${coords.lat}&lon=${coords.lon}&units=metric&APPID=${API_key}`);
        const data = await response.json();
        result = data;
      } catch (e) {
        console.error(e);
      } finally {
        return result
      }
}



