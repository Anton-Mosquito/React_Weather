import './dateField.module.scss';

type DateProps = {
    data : [string, number]
}

export const DateField = ({data} : DateProps) => {
    const innerData = new Date(data[1] * 1000).toLocaleString();
    
    return (
        <h3 className="cards__header">
            <time dateTime={innerData}>{innerData}</time>
        </h3>
    )
}