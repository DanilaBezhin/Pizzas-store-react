import styles from './not-found-block.module.scss';
import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <div className={styles.found}>
      <span className={styles.found__icon}>🤡</span>
      <p className={styles.found__text}>Ты в курсе, что такой страницы не существует?</p>
      <p className={styles.found__after_text}>
        Что бы вернуть на главную нажми{' '}
        <Link to="/" className={styles.found__link}>
          сюда!
        </Link>
      </p>
    </div>
  );
};

export default NotFoundBlock;
