import './descriptionListItem.module.scss';
import sprite from "../../../../../../assets/sprite.svg";

type ValueProps = {
    value : [string, number]
}

export const DescriptionListItem = ({value}: ValueProps) => {
    let firstFieldName: string;
    let secondFieldName! : string;
    let rotate!: string;
    
    switch (value[0]) {
        case 'feels_like':
            firstFieldName = 'Feels like';
            secondFieldName = `${value[1].toFixed(1)} ` + String.fromCharCode(8451);
        break;
        case 'temp_min':
            firstFieldName = 'Minimum';
            secondFieldName = `${value[1].toFixed(1)} ` + String.fromCharCode(8451);
        break;
        case 'temp_max':
            firstFieldName = 'Maximum'
            secondFieldName = `${value[1].toFixed(1)} ` + String.fromCharCode(8451);
        break;
        case 'pressure':
            firstFieldName = 'Pressure';
            secondFieldName = `${value[1]} ` + String.fromCharCode(13169);
        break;
        case 'humidity': 
            firstFieldName = 'Humidity';
            secondFieldName = `${value[1]} ` + String.fromCharCode(37);
        break;
        case 'speed': 
            firstFieldName = 'Speed';
            secondFieldName = `${value[1]} (m/s)`;
        break;
        case 'sunrise': 
            firstFieldName = 'Sunrise';
            secondFieldName = new Date(value[1] * 1000).toLocaleTimeString();
        break;
        case 'sunset': 
            firstFieldName = 'Sunset';
            secondFieldName = new Date(value[1] * 1000).toLocaleTimeString();
        break;
        case 'deg': 
            firstFieldName = 'Direction';
            rotate = `rotateZ(${value[1]}deg)`;
        break;
        case 'all': 
            firstFieldName = 'Clouds';
            secondFieldName = `${value[1]} ` + String.fromCharCode(37);
        break;
        case 'visibility': 
            firstFieldName = 'Visibility';
            secondFieldName = `${value[1]} (m)`;
        break;
        default: firstFieldName = 'Unknown status'
        break;
    }

    return (
    <li className="list__description-item">
        <span>{firstFieldName}</span>
        <span>{firstFieldName === 'Direction' ? <svg className="icon" style={{transform: rotate}}><use href={sprite + "#arrow"}></use></svg> : secondFieldName}</span>
    </li>
    )
}