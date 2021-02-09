import { useContext } from "react";
import sprite from "../../../assets/sprite.svg";
import { Context } from "../../../context/context";
import ChangeContext from "../../../models/context.model";


export const ForecastHeader = () => {
    const {typeRequset} = useContext<ChangeContext>(Context);
    return (
        <header className="content-cards-header">
            <h2>{typeRequset} forecast</h2>
            <div>
                <svg className="icon">
                    <use href={sprite + "#lady"}></use>
                </svg>
            </div>
        </header>
    )
}