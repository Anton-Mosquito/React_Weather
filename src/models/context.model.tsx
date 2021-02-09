import { IDataCity } from "./dataCity.model";
import IData  from "./dataPosition.model";

export default interface ChangeContext {
    dataCity? : IDataCity;
    dataPosition? : IData;
    updateData: (value: string) => void;
    loadingCards: boolean;
    updateWeatherCards: (value: string) => void;
    loadingMain: boolean;
    typeRequset: string;
    trueInfo: boolean;
};