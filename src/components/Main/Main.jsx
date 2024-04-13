import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import coffeeman from '../../images/Coffeeman.svg';
import styles from './Main.module.css';
import time from '../../images/Carousel images/Time.svg';
import magnifier from '../../images/Carousel images/Magnifier.svg';
import lock from '../../images/Carousel images/Lock.svg';
import checkboxman from '../../images/Checkboxman.svg';
import prices from '../../images/Prices/Prices.svg';
import 'react-multi-carousel/lib/styles.css';

const Main = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <p>
            сервис по поиску<br></br>публикаций<br></br>о компании<br></br>по
            его ИНН
          </p>
          <span>
            Комплексный анализ публикаций, получение данных<br></br>в формате
            PDF на электронную почту.
          </span>
          <Link to="subscription" className={styles.btn}>
            Запросить данные
          </Link>
        </div>
        <img src={coffeeman} alt="coffeeman" />
      </div>
      <div className={styles.carousel}>
        <p>Почему именно мы</p>
        <Carousel responsive={responsive}>
          <div className={styles.item1}>
            <img src={time} alt="time" />
            <span>Высокая и оперативная скорость обработки заявки</span>
          </div>
          <div className={styles.item2}>
            <img src={magnifier} alt="magnifier" />
            <span>
              Огромная комплексная база данных, обеспечивающая объективный ответ
              на запрос
            </span>
          </div>
          <div className={styles.item3}>
            <img src={lock} alt="lock" />
            <span>
              Защита конфеденциальных сведений,<br></br> не подлежащих
              разглашению по федеральному законодательству
            </span>
          </div>
          <div className={styles.item4}>
            <img src={time} alt="time" />
            <span>Высокая и оперативная скорость обработки заявки</span>
          </div>
          <div className={styles.item2}>
            <img src={magnifier} alt="magnifier" />
            <span>
              Огромная комплексная база данных, обеспечивающая объективный ответ
              на запрос
            </span>
          </div>
          <div className={styles.item3}>
            <img src={lock} alt="lock" />
            <span>
              Защита конфеденциальных сведений, не подлежащих разглашению по
              федеральному законодательству
            </span>
          </div>
        </Carousel>
        <img
          src={checkboxman}
          alt="checkboxman"
          className={styles.checkboxman}
        />
      </div>
      <div className={styles.prices}>
        <img src={prices} alt="prices" className={styles.pricesImg}/>
      </div>
    </>
  );
};

export default Main;
