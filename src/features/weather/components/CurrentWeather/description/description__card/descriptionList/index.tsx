import { /* useContext */ } from 'react';
import useAppContext from '@/context';
import { DescriptionListItem } from './descriptionListItem';
import styles from './styles.module.scss';
import type { ForecastItem } from '@/types';

type TitleProps = { title: string };
type ArrayKey = [string, any];

export const DescriptionList = ({ title }: TitleProps) => {
  const { dataPosition } = useAppContext();
  let temperatureArray: ArrayKey[] = [];
  let sunArray: ArrayKey[] = [];
  let windArray: ArrayKey[] = [];
  let visibilityArray: ArrayKey[] = [];
  let cloudArray: ArrayKey[] = [];

  const current = dataPosition?.current as ForecastItem | undefined;

  if (current) {
    switch (title) {
      case 'Temperature parameters':
        temperatureArray = Object.entries(current ?? {}).filter(
          (item) => item[0] !== 'temp' && item[0] !== 'weather' && item[0] !== 'dt'
        ) as ArrayKey[];
        break;
      case 'Sunrise & Sunset data':
        sunArray = current && 'sunrise' in (current as any) ? [[ 'sunrise', (current as any).sunrise ], ['sunset',(current as any).sunset]] : [];
        break;
      case 'Visibility':
        visibilityArray = Object.entries({ visibility: (current as any)?.visibility }).filter(
          (item) => item[1] !== undefined
        ) as ArrayKey[];
        break;
      case 'Wind':
        windArray = Object.entries((current as any)?.wind ?? {}).filter((item) => item[0] !== 'gust') as ArrayKey[];
        break;
      case 'Cloudiness':
        cloudArray = Object.entries({ clouds: (current as any)?.clouds ?? undefined }).filter(([,v])=>v!==undefined) as ArrayKey[];
        break;
    }
  }

  return (
    <ul className={styles.descriptionList}>
      <li className={styles.title}>{title}</li>
      {temperatureArray.map((item: ArrayKey, index: number) => (
        <DescriptionListItem key={index} value={item} />
      ))}
      {sunArray.map((item: ArrayKey, index: number) => (
        <DescriptionListItem key={index} value={item} />
      ))}
      {visibilityArray.map((item: ArrayKey, index: number) => (
        <DescriptionListItem key={index} value={item} />
      ))}
      {windArray.map((item: ArrayKey, index: number) => (
        <DescriptionListItem key={index} value={item} />
      ))}
      {cloudArray.map((item: ArrayKey, index: number) => (
        <DescriptionListItem key={index} value={item} />
      ))}
    </ul>
  );
};
