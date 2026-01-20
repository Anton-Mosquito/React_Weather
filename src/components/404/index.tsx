import styles from './styles.module.scss';
import Icon404 from '@/components/ui/icons/404.svg?react';

export const FourHundredFour = () => {
  return (
    <div className={styles.container404}>
      <h4 className={styles.messageMain}>Page not found</h4>
      <div>
        <Icon404 className={styles.icon} />
      </div>
      <p className={styles.messageAdditional}>
        This city does not exist, check the name of the city and make a second
        request
      </p>
    </div>
  );
};
