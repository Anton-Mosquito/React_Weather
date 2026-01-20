import { IconLady } from '@/components/ui/icons';
import { useStore } from '@/hooks';
import styles from './ForecastHeader.module.scss';

const ForecastHeader = () => {
  const { typeRequest } = useStore();
  return (
    <header className={styles.wrapper}>
      <h2 className={styles.header}>{typeRequest} forecast</h2>
      <div className={styles.box}>
        <IconLady className={styles.icon} />
      </div>
    </header>
  );
};

export default ForecastHeader;
