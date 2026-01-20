import DescriptionList from '@/features/weather/components/DescriptionList';
import DescriptionImageField from '@features/weather/components/DescriptionImageField';
import TemperatureField from '../TemperatureField';
import styles from './DescriptionCard.module.scss';

const DescriptionCard = () => {
  const titleList: string[] = [
    'Temperature parameters',
    'Sunrise & Sunset data',
    'Visibility',
    'Wind',
    'Cloudiness',
  ];

  return (
    <div className={styles.card}>
      <DescriptionImageField />
      <TemperatureField />
      {titleList.map((item: string, index: number) => (
        <DescriptionList key={index} title={item} />
      ))}
    </div>
  );
};

export default DescriptionCard;
