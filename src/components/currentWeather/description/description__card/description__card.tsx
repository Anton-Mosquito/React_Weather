import { DescriptionList } from './descriptionList/descriptionList';
import { ImageField } from './ImageField/ImageField';
import { TemperatuteField } from './TemperatuteField/temperatuteField';
import styles from './description__card.module.scss'

export const DescriptionCard: React.FC = () => {
    const titleList: Array<string> = ['Temperature parameters','Sunrise & Sunset data','Visibility','Wind','Cloudiness'];

    return (
        <div className={styles.card}>
            <ImageField/>
            <TemperatuteField/>
            {titleList.map((item: string, index: number) => <DescriptionList key={index} title={item}/>)}
        </div>
    )
}