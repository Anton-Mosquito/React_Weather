import { useContext } from 'react';
import { Context } from '../../../../../context/context';
import ChangeContext from '../../../../../models/context.model';
import styles from './radioItems.module.scss';

type DataProps = {
    forLabel: string,
    forId: string,
    text: string,
    id: number,
    check : boolean,
    onChange: (id: number, value: string) => void,
}

export const RadioItem = ({forLabel, forId, text, id,check, onChange}: DataProps) => {
    const {trueInfo} = useContext<ChangeContext>(Context);
    return (
        <label htmlFor={forLabel} className={styles.wrapper}>
            <input type="radio" className={styles.input} name="choiseCard" id={forId} value={text} checked={check} onChange={onChange.bind(null, id, text)} disabled={!trueInfo}/>
            <span className={styles.text}>{text}</span>
        </label>
    )
}