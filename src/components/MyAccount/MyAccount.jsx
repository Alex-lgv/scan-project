import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setAccessToken,
  setExpire,
  setAccountInfo,
  selectAccountInfo,
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
} from '../../redux/slices/companySlice';
import spinner from '../../images/Account/Spinner.svg';
import accountIcon from '../../images/Account/Account-icon.svg';
import styles from './MyAccount.module.css';

const MyAccount = () => {
  const dispatch = useDispatch();
  const accountInfo = useSelector(selectAccountInfo);

  const signOut = () => {
    dispatch(setAccessToken(''));
    dispatch(setExpire(''));
    dispatch(setAccountInfo(''));
    dispatch(setINN(''));
    dispatch(setLimit('10'));
    dispatch(setTonality('any'));
    dispatch(setMaxFullness(false));
    dispatch(setInBusinessNews(false));
    dispatch(setOnlyMainRole(false));
    dispatch(setOnlyWithRiskFactors(false));
    dispatch(setIsTechNews(false));
    dispatch(setIsAnnouncement(false));
    dispatch(setIsDigest(false));
    dispatch(setStartDate(''));
    dispatch(setEndDate(''));
  };
  return (
    <>
      {!accountInfo ? (
        <>
          <div className={styles.accountInfo}>
            <img src={spinner} alt="spinner" className={styles.spinnerImg} />
          </div>
          <div className={styles.accountIcon}>
            <div className={styles.textAndButton}>
              <Link to="subscription" className={styles.userName}>
                Алексей А.
              </Link>
              <button onClick={signOut}>Выйти</button>
            </div>
            <img src={accountIcon} alt="account-icon" />
          </div>
        </>
      ) : (
        <>
          <div className={styles.accountInfo}>
            <div className={styles.companiesLimitGroup}>
              <p className={styles.text}>Использовано компаний</p>
              <p className={styles.companies}>{accountInfo.usedCompanyCount}</p>
            </div>
            <div className={styles.companiesLimitGroup}>
              <p className={styles.text}>Лимит по компаниям</p>
              <p className={styles.limit}>{accountInfo.companyLimit}</p>
            </div>
          </div>
          <div className={styles.accountIcon}>
            <div className={styles.textAndButton}>
              <Link to="subscription">Алексей А.</Link>
              <button onClick={signOut}>Выйти</button>
            </div>
            <img src={accountIcon} alt="account-icon" />
          </div>
        </>
      )}
    </>
  );
};

export default MyAccount;
