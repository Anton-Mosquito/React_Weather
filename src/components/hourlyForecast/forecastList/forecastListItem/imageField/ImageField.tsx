import { IWeather } from '../../../../../models/dataCity.model';
import styles from './ImageField.module.scss';

type DataProps = {
    data: IWeather
}

export const ImageField: React.FC<DataProps> = ({data}) => {
    const icon: string = data.icon;
    
    return (
        <figure className={styles.wrapper}>
            <img className={styles.image} src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''} alt="icon"/>
            <figcaption className={styles.text}>{data.description}</figcaption>
        </figure>
    )
}