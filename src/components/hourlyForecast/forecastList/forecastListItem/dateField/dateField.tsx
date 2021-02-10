import styles from './dateField.module.scss';

type DateProps = {
    data : [string, number]
}

export const DateField: React.FC<DateProps>= ({data}) => {
    const innerData = new Date(data[1] * 1000).toLocaleString();
    
    return (
        <h3 className={styles.header}>
            <time dateTime={innerData}>{innerData}</time>
        </h3>
    )
}