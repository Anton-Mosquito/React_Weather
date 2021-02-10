import {useContext} from 'react';
import { Context } from "../../../../context/context";
import ChangeContext from '../../../../models/context.model';
import styles from './description__header.module.scss'

export const DescriptionHeader: React.FC = () => {
    const {dataPosition} = useContext<ChangeContext>(Context);
    let date : number | undefined = dataPosition?.dt;
    
    return (
    <div className={styles.header}>
        <p>{dataPosition?.name}</p>
        <p>{date ? new Date(date * 1000).toLocaleDateString() : Date.now()}</p>
    </div>
    )
}