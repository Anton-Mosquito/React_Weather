import styles from './dataListFieldItem.module.scss';
import sprite from "../../../../../../assets/sprite.svg";

type DataProps = {
    data : [string, number];
}

export const DataListFieldItem: React.FC<DataProps> = ({data}) => {
    let nameOfFields: string = '';
    let valueOfField : string = '';
    let rotate: string = '';

    switch (data[0]) {
        case 'temp':
            nameOfFields = 'Temperature';
            valueOfField = data[1].toFixed(1) + String.fromCharCode(8451)
        break;
        case 'feels_like':
            nameOfFields = 'Feels like';
            valueOfField = data[1].toFixed(1) + String.fromCharCode(8451)
        break;
        case 'speed':
            nameOfFields = 'Speed';
            valueOfField = data[1].toFixed(1) + '(m/s)'
        break;
        case 'deg':
            nameOfFields = 'Direction';
            valueOfField = data[1].toFixed(1) + String.fromCharCode(37);
            rotate = `rotateZ(${data[1]}deg)`;
        break;
    }
    
    return (
            <li className={styles.item}>
                <span>{nameOfFields}</span>
                <span>{nameOfFields === 'Direction' ? <svg className={styles.icon} style={{transform: rotate}}><use href={sprite + "#arrow"}></use></svg> : valueOfField}</span>
            </li>
    )
}