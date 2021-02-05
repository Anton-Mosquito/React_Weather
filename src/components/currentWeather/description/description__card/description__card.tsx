import { DescriptionList } from './descriptionList/descriptionList';
import { ImageField } from './ImageField/ImageField';
import { TemperatuteField } from './TemperatuteField/temperatuteField';

export const DescriptionCard: React.FC = () => {
    const titleList: Array<string> = ['Temperature parameters','Sunrise & Sunset data','Visibility','Wind','Cloudiness'];

    return (
        <div className="content__description-card">
            <ImageField/>
            <TemperatuteField/>
            {titleList.map((item: string, index: number) => <DescriptionList key={index} title={item}/>)}
        </div>
    )
}