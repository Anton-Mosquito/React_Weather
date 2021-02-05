import {useContext} from 'react';
import { Context } from "../../../../../context/context";
import ChangeContext from '../../../../../models/context.model';
import './ImageField.module.scss'

export const ImageField: React.FC = () => {
    const {dataPosition} = useContext<ChangeContext>(Context);
    const icon: string | undefined = dataPosition?.weather[0].icon;
    const text: string | undefined = dataPosition?.weather[0].main;
    
    return (
        <div className='image-field'>
            <p>{text}</p>
            <img src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''} alt="icon"/>
        </div>
    )
}