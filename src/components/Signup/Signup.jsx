import { useState } from 'react';
import { Link } from 'react-router-dom';
import rectangle from '../../images/Rectangle-green.svg';
import hamburger from '../../images/Hamburger.svg';
import styles from './Signup.module.css';

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.signup}>
        <p>Зарегистрироваться</p>
        <img src={rectangle} alt="rectangle" />
        <Link to="subscription" className={styles.link}>
          Войти
        </Link>
      </div>
      <div className={styles.signup2}>
        <img
          src={hamburger}
          alt="hamburger"
          onClick={toggleMenu}
          className={styles.hamburger}
        ></img>
        {isOpen && (
          <div className={styles.dropdown}>
            <Link to="." className={styles.link2}>
              Главная
            </Link>
            <Link to="prices" className={styles.link2}>
              Тарифы
            </Link>
            <Link to="faq" className={styles.link2}>
              FAQ
            </Link>
            <Link to="another-route" className={styles.link2}>
              Зарегистрироваться
            </Link>
            <Link to="subscription" className={styles.link2}>
              Войти
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
