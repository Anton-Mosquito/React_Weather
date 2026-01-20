import styles from './DataField.module.scss';

type DateProps = {
  data: [string, number];
};

const DateField = ({ data }: DateProps) => {
  const innerData = new Date(data[1] * 1000).toLocaleString();
  return (
    <h3 className={styles.header}>
      <time dateTime={innerData}>{innerData}</time>
    </h3>
  );
};

export default DateField;
