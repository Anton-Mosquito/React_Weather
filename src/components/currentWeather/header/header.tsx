import React from 'react';
import styles from './header.module.scss'

export const Header: React.FC = () => {
    return (
        <h1 className={styles.header} data-text="Current Weather">Current Weather</h1>
    )
}