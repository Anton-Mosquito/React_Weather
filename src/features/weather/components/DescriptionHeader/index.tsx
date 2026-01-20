import { useStore } from '@/hooks';
import styles from './DescriptionHeader.module.scss';
import type { ForecastItem } from '@/types';

const DescriptionHeader = () => {
  const { dataPosition } = useStore();
  const current: ForecastItem | undefined = dataPosition?.current;
  const date: number | undefined = current?.dt;
  return (
    <div className={styles.header}>
      <p>{dataPosition?.city?.name}</p>
      <p>
        {date
          ? new Date(date * 1000).toLocaleDateString()
          : new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default DescriptionHeader;
