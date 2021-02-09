import './radioItems.module.scss';

type DataProps = {
    forLabel: string,
    forId: string,
    text: string,
    id: number,
    check : boolean,
    onChange: (id: number, value: string) => void,
}

export const RadioItem = ({forLabel, forId, text, id,check, onChange}: DataProps) => {
    return (
        <label htmlFor={forLabel}>
            <input type="radio" name="choiseCard" id={forId} value={text} checked={check} onChange={onChange.bind(null, id, text)}/>
            <span className="search__choise-text">{text}</span>
        </label>
    )
}