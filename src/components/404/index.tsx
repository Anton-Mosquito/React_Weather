import React from 'react';
import styles from './styles.module.scss'
import sprite from "../../assets/sprite.svg";

export const FourHundredFour: React.FC = () => {
    return (
        <div className={styles.container404}>
            <h4 className={styles.messageMain}>Page not found</h4>
            <div>
                <svg className={styles.icon}>
                    <use href={sprite + "#404"}></use>
                </svg>
            </div>
            <p className={styles.messageAdditional}>
                This city does not exist, check the name of the city and make a second request
            </p>
        </div>
    )
}