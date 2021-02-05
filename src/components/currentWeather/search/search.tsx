import {ChangeEvent,FormEvent,FormEventHandler, useContext, useState} from 'react';
import { Context } from "../../../context/context";
import sprite from "../../../assets/sprite.svg";
import "./search.module.scss";
import ChangeContext from '../../../models/context.model';

export const SearchForm: React.FC = () => {
    const {updateData} = useContext<ChangeContext>(Context);
    const [value, setValue] = useState<string>("");
    
    const submitHandler: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
       event.preventDefault();
        if (value.trim()) {
            updateData(value);
            setValue(" ");
    }
    };

    return (
    <form className="content__search" onSubmit={submitHandler}>
        <p className="search__box">
            <input type="text" className="search__box-input" placeholder="Enter the city name..." onChange={(event: ChangeEvent) => setValue((event.target as HTMLInputElement).value)} value={value}/>
            <button className="search__box-button" type="submit">
            <svg className="search__box-icon">
                <use href={sprite + "#search"}></use>
            </svg>
            </button>
        </p>
    </form>
    )
}