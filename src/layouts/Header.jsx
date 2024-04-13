import { useSelector } from 'react-redux';
import Nav from '../components/Nav/Nav';
import logo from '../images/SCAN.svg';
import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import Signup from '../components/Signup/Signup';
import Footer from '../components/Footer/Footer';
import MyAccount from '../components/MyAccount/MyAccount';
import { selectAccessTokenInfo } from '../redux/slices/userInfoSlice';

const Header = () => {
  const accessToken = useSelector(selectAccessTokenInfo);

  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <Nav />
        {!accessToken ? <Signup /> : <MyAccount />}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
