import { DescriptionCard } from './description__card/description__card';
import { DescriptionHeader } from './description__header/description__header';
import styles from './description.module.scss'

export const Description: React.FC = () => {
    return (
        <div className={styles.description}>
            <DescriptionHeader/>
            <DescriptionCard/>
        </div>
    )
}