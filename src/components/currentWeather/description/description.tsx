import { DescriptionCard } from './description__card/description__card';
import { DescriptionHeader } from './description__header/description__header';

export const Description: React.FC = () => {
    return (
        <div className="content__description">
            <DescriptionHeader/>
            <DescriptionCard/>
        </div>
    )
}