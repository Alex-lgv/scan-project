import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLogin,
  setPassword,
  setAccessToken,
  setExpire,
  setAccountInfo,
  setIsLoading,
  selectLoginInfo,
  selectPasswordInfo,
  selectIsLoading,
} from '../../redux/slices/userInfoSlice';
import EnterAndSignup from '../../images/Form/EnterAndSignup.svg';
import BlackLock from '../../images/Form/BlackLock.svg';
import SocialNetworks from '../../images/Form/SocialNetworks.svg';
import Button from '../Button/Button';
import styles from './Form.module.css';

const Form = () => {
  const [result, setResult] = useState(true);
  const dispatch = useDispatch();
  const login = useSelector(selectLoginInfo);
  const password = useSelector(selectPasswordInfo);
  const isLoading = useSelector(selectIsLoading);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    setResult(false);
    try {
      const responseToken = await axios.post(
        'https://gateway.scan-interfax.ru/api/v1/account/login',
        {
          login,
          password,
        }
      );
      dispatch(setAccessToken(responseToken.data.accessToken));
      dispatch(setExpire(responseToken.data.expire));
      const responseAuthorized = await axios.get(
        'https://gateway.scan-interfax.ru/api/v1/account/info',
        {
          headers: {
            Authorization: `Bearer ${responseToken.data.accessToken}`,
          },
        }
      );
      dispatch(setAccountInfo(responseAuthorized.data.eventFiltersInfo));
      responseToken.data.accessToken ? setResult(true) : setResult(false);
    } catch (error) {
      console.error('Error:', error.message);
    }
    dispatch(setIsLoading(false));
    // dispatch(clearLoginAndPassword());
  };

  return (
    <>
      <form className={styles.signupForm} onSubmit={onSubmitForm}>
        <img className={styles.blackLock} src={BlackLock} alt="black-lock" />
        <img src={EnterAndSignup} alt="enter-and-signup" className={styles.enterAndSignup}/>
        <div className={styles.formGroup}>
          <label htmlFor="loginInput">Логин или номер телефона:</label>
          <input
            type="text"
            id="loginInput"
            value={login}
            onChange={(e) => dispatch(setLogin(e.target.value))}
            style={
              !result && !isLoading
                ? { borderColor: 'red' }
                : { borderColor: 'grey' }
            }
          />
          {!result && !isLoading ? (
            <p
              style={{
                fontSize: '15px',
                color: 'red',
                textAlign: 'center',
                borderColor: 'red',
              }}
            >
              Введите корректные данные
            </p>
          ) : (
            ''
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="passwordInput">Пароль:</label>
          <input
            type="password"
            id="passwordInput"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            style={
              !result && !isLoading
                ? { borderColor: 'red' }
                : { borderColor: 'grey' }
            }
          />
          {!result && !isLoading ? (
            <p
              style={{
                fontSize: '15px',
                color: 'red',
                textAlign: 'center',
                borderColor: 'red',
              }}
            >
              Неправильный пароль
            </p>
          ) : (
            ''
          )}
        </div>
        <Button type="submit" disabled={!login && !password ? true : false}>
          Войти
        </Button>
        <img
          src={SocialNetworks}
          alt="social-networks"
          className={styles.socilaNetworks}
        />
      </form>
    </>
  );
};

export default Form;
