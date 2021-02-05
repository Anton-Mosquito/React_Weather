import sprite from "../../../assets/sprite.svg";


export const ForecastHeader = () => {
    return (
        <header className="content-cards-header">
            <h2>Hourly forecast</h2>
            <div>
                <svg className="icon">
                    <use href={sprite + "#lady"}></use>
                </svg>
            </div>
        </header>
    )
}