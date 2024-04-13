import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectAccountInfo,
  selectAccessTokenInfo,
} from '../../redux/slices/userInfoSlice';
import {
  setINN,
  setLimit,
  setTonality,
  setMaxFullness,
  setInBusinessNews,
  setOnlyMainRole,
  setOnlyWithRiskFactors,
  setIsTechNews,
  setIsAnnouncement,
  setIsDigest,
  setStartDate,
  setEndDate,
  selectINN,
  selectLimit,
  selectTonality,
  selectMaxFullness,
  selectInBusinessNews,
  selectOnlyMainRole,
  selectOnlyWithRiskFactors,
  selectIsTechNews,
  selectIsAnnouncement,
  selectIsDigest,
  selectStartDate,
  selectEndDate,
} from '../../redux/slices/companySlice';
import { setDocs, clearDocs, selectDocs } from '../../redux/slices/docsSlice';
import { setError, selectError } from '../../redux/slices/errorSlice';

import Form from '../Form/Form';
import subscription from '../../images/Subscription.svg';
import rocketman from '../../images/Account/Rocketman.svg';
import Button from '../Button/Button';
import getObject from '../../data/object';
import styles from './Subscription.module.css';

const Subscription = () => {
  const dispatch = useDispatch();

  const accountInfo = useSelector(selectAccountInfo);
  const accessToken = useSelector(selectAccessTokenInfo);
  const INN = useSelector(selectINN);
  const limit = useSelector(selectLimit);
  const tonality = useSelector(selectTonality);
  const maxFullness = useSelector(selectMaxFullness);
  const inBusinessNews = useSelector(selectInBusinessNews);
  const onlyMainRole = useSelector(selectOnlyMainRole);
  const onlyWithRiskFactors = useSelector(selectOnlyWithRiskFactors);
  const isTechNews = useSelector(selectIsTechNews);
  const isAnnouncement = useSelector(selectIsAnnouncement);
  const isDigest = useSelector(selectIsDigest);
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);
  const docs = useSelector(selectDocs);
  const err = useSelector(selectError);

  const findCompanies = async (e) => {
    e.preventDefault();
    dispatch(setError(''));
    try {
      const responseObjects = await axios.post(
        'https://gateway.scan-interfax.ru/api/v1/objectsearch',
        getObject(
          INN,
          limit,
          tonality,
          maxFullness,
          inBusinessNews,
          onlyMainRole,
          onlyWithRiskFactors,
          isTechNews,
          isAnnouncement,
          isDigest,
          startDate,
          endDate
        ),
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      const ids = responseObjects.data.items.map((el) => {
        return el.encodedId;
      });
      const responseDocuments = await axios.post(
        'https://gateway.scan-interfax.ru/api/v1/documents',
        { ids },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      const documents = responseDocuments.data.map((el) => {
        return el.ok;
      });
      dispatch(clearDocs([]));
      dispatch(setDocs(documents));
    } catch (error) {
      dispatch(setError('Произошла ошибка, попробуйте ввести другие данные'));
      if (err) {
        const notify = () =>
          toast.error(err, {
            closeOnClick: true,
          });
        notify();
      } else {
        const notify = () =>
          toast.error('Произошла ошибка, попробуйте ввести другие данные', {
            closeOnClick: true,
          });
        notify();
      }
    }
  };
  return (
    <>
      {!accountInfo ? (
        <div className={styles.subscription}>
          <div className={styles.textAndImg}>
            <p>
              Для оформления подписки<br></br>на тариф, необходимо<br></br>
              авторизоваться.
            </p>
            <img
              src={subscription}
              alt="subscription"
              className={styles.bigKey}
            />
          </div>
          <Form />
        </div>
      ) : (
        <>
          <div className={styles.myAccount}>
            <div className={styles.search}>
              <p>
                Найдите необходимые<br></br>данные в пару кликов.
              </p>
              <span>
                Задайте параметры поиска. Чем больше заполните, тем точнее поиск
              </span>
              <form onSubmit={findCompanies}>
                <div className={styles.inputsForm}>
                  <div className={styles.groupOfInputs}>
                    <div className={styles.inputsGroup}>
                      <label htmlFor="inn">ИНН компании*</label>
                      <input
                        type="text"
                        id="inn"
                        value={INN}
                        onChange={(e) => dispatch(setINN(e.target.value))}
                      />
                      <label htmlFor="tonality">Тональность</label>
                      <select
                        name="tonality"
                        id="tonality"
                        onChange={(e) => dispatch(setTonality(e.target.value))}
                      >
                        <option value="any">Любая</option>
                        <option value="positive">Позитивная</option>
                        <option value="negative">Негативная</option>
                      </select>
                      <label htmlFor="quantity">
                        Количество документов в выдаче*
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        value={limit}
                        onChange={(e) => dispatch(setLimit(e.target.value))}
                      />
                      <label htmlFor="range">
                        Диапазон поиска*
                        <div className={styles.range}>
                          <input
                            type="date"
                            id="range"
                            value={startDate}
                            onChange={(e) =>
                              dispatch(setStartDate(e.target.value))
                            }
                          />
                          <input
                            type="date"
                            id="range"
                            value={endDate}
                            onChange={(e) =>
                              dispatch(setEndDate(e.target.value))
                            }
                          />
                        </div>
                      </label>
                    </div>
                    <div className={styles.inputsGroup}>
                      <label htmlFor="maxFullness">
                        Признак максимальной полноты
                      </label>
                      <input
                        style={{ width: '18px' }}
                        type="checkbox"
                        id="maxFullness"
                        onChange={() => dispatch(setMaxFullness())}
                      />
                      <label htmlFor="inBusinessNews">
                        Упоминания в бизнес-контексте
                      </label>
                      <input
                        style={{ width: '18px' }}
                        type="checkbox"
                        id="inBusinessNews"
                        onChange={() => dispatch(setInBusinessNews())}
                      />
                      <label htmlFor="onlyMainRole ">
                        Главная роль в публикации
                      </label>
                      <input
                        style={{ width: '18px' }}
                        type="checkbox"
                        id="onlyMainRole "
                        onChange={() => dispatch(setOnlyMainRole())}
                      />
                      <label htmlFor="onlyWithRiskFactors  ">
                        Публикации только с риск-факторами
                      </label>
                      <input
                        style={{ width: '18px' }}
                        type="checkbox"
                        id="onlyWithRiskFactors "
                        onChange={() => dispatch(setOnlyWithRiskFactors())}
                      />
                      <label htmlFor="isTechNews  ">
                        Включать технические новости рынков
                      </label>
                      <input
                        style={{ width: '18px' }}
                        type="checkbox"
                        id="isTechNews "
                        onChange={() => dispatch(setIsTechNews())}
                      />
                      <label htmlFor="isAnnouncement  ">
                        Включать анонсы и календари
                      </label>
                      <input
                        style={{ width: '18px' }}
                        type="checkbox"
                        id="isAnnouncement "
                        onChange={() => dispatch(setIsAnnouncement())}
                      />
                      <label htmlFor="isDigest  ">
                        Включать сводки новостей
                      </label>
                      <input
                        style={{ width: '18px' }}
                        type="checkbox"
                        id="isDigest "
                        onChange={() => dispatch(setIsDigest())}
                      />
                    </div>
                  </div>
                  <Button type="submit">Поиск</Button>
                </div>
              </form>
            </div>
            <img src={rocketman} alt="rocketman" />
          </div>
          {!err ? (
            <>
              <h1 className={styles.documentsHeader}>Найденные данные:</h1>
              <div className={styles.cards}>
                {docs.map((doc) => {
                  return (
                    <div key={uuidv4()} className={styles.card}>
                      <h2>{doc.title.text}</h2>
                      <Link
                        to={doc.url ? doc.url : 'not-found'}
                        className={styles.cardLink}
                      >
                        Читать в источнике
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div>
              <ToastContainer autoClose={7000} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Subscription;
