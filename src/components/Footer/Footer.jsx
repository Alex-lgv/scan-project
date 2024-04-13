import logo from '../../images/SCAN-white.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <img src={logo} alt="logo"></img>
        <div className={styles.text}>
          <p>г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru</p>
          <p>Copyright. 2022</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
