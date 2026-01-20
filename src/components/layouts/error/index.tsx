import styles from './error.module.scss';
import { Icon404 } from '@/components/ui/icons';

const ErrorPage = () => {
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

export default ErrorPage;
