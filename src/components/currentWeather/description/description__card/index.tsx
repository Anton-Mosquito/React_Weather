import { DescriptionList } from './descriptionList';
import { ImageField } from './ImageField';
import { TemperatuteField } from './TemperatuteField';
import styles from './styles.module.scss'

export const DescriptionCard: React.FC = () => {
    const titleList: string[] = ['Temperature parameters','Sunrise & Sunset data','Visibility','Wind','Cloudiness'];

    return (
        <div className={styles.card}>
            <ImageField/>
            <TemperatuteField/>
            {titleList.map((item: string, index: number) => <DescriptionList key={index} title={item}/>)}
        </div>
    )
}