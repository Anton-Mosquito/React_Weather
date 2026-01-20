import { useStore } from '@/hooks';
import styles from './TemperatureField.module.scss';
import type { ForecastItem } from '@/types';

const TemperatureField = () => {
  const { dataPosition } = useStore();
  const current: ForecastItem | undefined = dataPosition?.current;
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

export default TemperatureField;
