import React, { FormEvent,FormEventHandler, useContext, useState} from 'react';
import { SearchBox } from './searchBox/searchBox';
import { RadioBox } from './radioBox/radioBox';

import { Context } from "../../../context/context";
import ChangeContext from '../../../models/context.model';

import styles from "./search.module.scss";


export const SearchForm: React.FC = () => {
    const {updateData, updateWeatherCards} = useContext<ChangeContext>(Context);
    const [value, setValue] = useState<string>("");

    const [ radioValue , setRadioValue ] = useState([
        {id : 1, forLabel :'Hourly', forId : 'Hourly' , text: 'Hourly', check : true},
        {id : 2, forLabel : 'Nearby', forId : 'Nearby', text: 'Nearby', check : false},
    ]);

    
    const submitHandler: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        if (value.trim()) {
            updateData(value);
            setValue(" ");
    }
    };

    const change = (id: number, value: string) => {
        setRadioValue( radioValue.map(radio => {
            if (radio.id === id) radio.check = !radio.check
            else radio.check = !radio.check
            return radio;
        }));
        updateWeatherCards(value)
    }

    return (
    <form className={styles.search} onSubmit={submitHandler}>
        <SearchBox valueOfField={value} changeValue={setValue}/>
        <RadioBox info={radioValue} change={change}/>
    </form>
    )
}