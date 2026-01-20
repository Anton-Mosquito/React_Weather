import {} from /* useContext */ 'react';
import useAppContext from '@/context';
import styles from './styles.module.scss';
import type { ForecastItem } from '@/types';

export const TemperatuteField: React.FC = () => {
  const { dataPosition } = useAppContext();
  const current = dataPosition?.current as ForecastItem | undefined;
  const rawTemp = current?.temp;
  const tempNumber: number | undefined =
    typeof rawTemp === 'number'
      ? rawTemp
      : ((rawTemp && (rawTemp as any).day) ?? undefined);
  return (
    <p className={styles.temperature}>
      {tempNumber !== undefined ? tempNumber.toFixed(1) : ''}&#8451;
    </p>
  );
};
