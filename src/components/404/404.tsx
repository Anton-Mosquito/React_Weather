import './404.module.scss';
import sprite from "../../assets/sprite.svg";

export const FourHundredFour = () => {
    return (
        <div className="bad-request-container">
            <h4 className="bad-request-container__message-main">Page not found</h4>
            <div>
                <svg className="bad-request-container__icon">
                    <use href={sprite + "#404"}></use>
                </svg>
            </div>
            <p className="bad-request-container__message-additional">
                This city does not exist, check the name of the city and make a second request
            </p>
        </div>
    )
}