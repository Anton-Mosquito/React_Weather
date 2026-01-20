import DescriptionCard from '../DescriptionCard';
import DescriptionHeader from '@features/weather/components/DescriptionHeader';
import styles from './Description.module.scss';

export const Description = () => {
  return (
    <div className={styles.description}>
      <DescriptionHeader />
      <DescriptionCard />
    </div>
  );
};
