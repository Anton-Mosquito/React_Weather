import {useContext} from 'react';
import { Context } from "../../../../../context/context";
import ChangeContext from '../../../../../models/context.model';
import styles from './ImageField.module.scss'

export const ImageField: React.FC = () => {
    const {dataPosition} = useContext<ChangeContext>(Context);
    const icon: string | undefined = dataPosition?.weather[0].icon;
    const text: string | undefined = dataPosition?.weather[0].main;
    
    return (
        <div className={styles.wrapper}>
            <p className={styles.text} >{text}</p>
            <img className={styles.image} src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''} alt="icon"/>
        </div>
    )
}