
type CityProps = {
    data : [string, number]
}

export const CityField: React.FC<CityProps> = ({data}) => {
    const innerData = data[1];
    
    return (
        <h3 style={{ textAlign : "center", fontWeight: 600}}>
            {innerData}
        </h3>
    )
}