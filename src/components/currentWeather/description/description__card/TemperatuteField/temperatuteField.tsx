import {useContext} from 'react';
import { Context } from "../../../../../context/context";
import ChangeContext from '../../../../../models/context.model';
import styles from './temperatuteField.module.scss'


export const TemperatuteField: React.FC = () => {
    const {dataPosition} = useContext<ChangeContext>(Context);
    const temp: number | undefined = dataPosition?.main.temp;
    
    return (
        <p className={styles.temperature}>{temp?.toFixed(1)}&#8451;</p>
    )
}