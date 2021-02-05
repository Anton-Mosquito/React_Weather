import { IWeather } from '../../../../../models/dataCity.model';
import './ImageField.module.scss';

type DataProps = {
    data: IWeather
}

export const ImageField = ({data} : DataProps) => {
    const icon: string = data.icon;
    
    return (
        <figure className="cards__image">
            <img src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''} alt="icon"/>
            <figcaption>{data.description}</figcaption>
        </figure>
    )
}