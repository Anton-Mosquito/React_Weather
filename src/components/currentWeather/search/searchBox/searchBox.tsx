import './searchBox.module.scss';
import sprite from "../../../../assets/sprite.svg";
import { ChangeEvent } from 'react';

type DataProps = {
    valueOfField : string;
    changeValue: (value: string) => void;
}

export const SearchBox = ({valueOfField, changeValue}: DataProps) => {
    return (
        <p className="search__box">
        <input type="text" className="search__box-input" placeholder="Enter the city name..." onChange={(event: ChangeEvent) => changeValue((event.target as HTMLInputElement).value)} value={valueOfField}/>
        <button className="search__box-button" type="submit">
        <svg className="search__box-icon">
            <use href={sprite + "#search"}></use>
        </svg>
        </button>
    </p>
    )
}