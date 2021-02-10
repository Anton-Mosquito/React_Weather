import { useContext } from "react";
import sprite from "../../../assets/sprite.svg";
import { Context } from "../../../context/context";
import ChangeContext from "../../../models/context.model";
import styles from './ForecastHeader.module.scss'


export const ForecastHeader = () => {
    const {typeRequset} = useContext<ChangeContext>(Context);
    return (
        <header className={styles.wrapper}>
            <h2 className={styles.header}>{typeRequset} forecast</h2>
            <div className={styles.box}>
                <svg className={styles.icon}>
                    <use href={sprite + "#lady"}></use>
                </svg>
            </div>
        </header>
    )
}