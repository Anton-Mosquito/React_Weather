import ImageField from '@features/weather/components/ImageField';
import DateField from '@features/weather/components/DateField';
import styles from './ForecastListItem.module.scss';

type CityProps = {
  data: IMainInfo;
};

type ArrayKey = [string, number];

const ForecastListItem = ({ data }: CityProps) => {
  let cityData: ArrayKey[] = [];
  let dateData: ArrayKey[] = [];
  let imageData: IWeather[] = [];
  let temperatureArray: ArrayKey[] = [];
  let windArray: ArrayKey[] = [];

  if (data) {
    cityData = Object.entries(data).filter((item: any) => item[0] === 'name');
    dateData = Object.entries(data).filter((item: any) => item[0] === 'dt');
    imageData = Object.values(data.weather);
    temperatureArray = Object.entries(data).filter(
      (item: any) => item[0] === 'main'
    );
    windArray = Object.entries(data).filter((item: any) => item[0] === 'wind');
  }

  return (
    <div className={styles.cards}>
      {cityData.length > 0
        ? cityData.map((item: ArrayKey, index: number) => (
            <div key={index}>{item}</div>
          ))
        : dateData.map((item: ArrayKey, index: number) => (
            <DateField key={index} data={item} />
          ))}
      {imageData.map((item: IWeather, index: number) => (
        <ImageField key={index} data={item} />
      ))}
      {temperatureArray.map((item: ArrayKey, index: number) => (
        <div key={index}>{item}</div>
      ))}
      {windArray.map((item: ArrayKey, index: number) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default ForecastListItem;
