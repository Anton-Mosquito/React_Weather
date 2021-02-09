
type CityProps = {
    data : [string, number]
}

export const CityField = ({data} : CityProps) => {
    const innerData = data[1];
    
    return (
        <h3 className="cards__header">
            {innerData}
        </h3>
    )
}