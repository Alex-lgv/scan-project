import notFound from '../../images/NotFound.jpg';
import styles from './NotFound.module.css';

const NotFound = () => {
  return <img src={notFound} alt="not-found" className={styles.notFound} />;
};

export default NotFound;
