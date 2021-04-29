import { DescriptionCard } from './description__card';
import { DescriptionHeader } from './description__header';
import styles from './styles.module.scss'

export const Description: React.FC = () => {
    return (
        <div className={styles.description}>
            <DescriptionHeader/>
            <DescriptionCard/>
        </div>
    )
}