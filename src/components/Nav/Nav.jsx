import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="." end>
        Главная
      </NavLink>
      <NavLink to="prices">Тарифы</NavLink>
      <NavLink to="faq">FAQ</NavLink>
    </nav>
  );
};

export default Nav;
