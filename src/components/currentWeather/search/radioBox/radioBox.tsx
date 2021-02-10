import React from 'react';
import { IRadio } from '../../../../models/radio.model';
import { RadioItem } from './radioItems/radioItems';
import styles from './radioBox.module.scss'

type DataProps = {
    info: IRadio[],
    change: (id: number, value: string) => void
}

export const RadioBox = ({info, change}: DataProps) => {
    return (
        <p className={styles.choise}>
            {info.map((item:any)=> <RadioItem key={item.id} onChange={change} {...item}/>)}
        </p>
    )
}