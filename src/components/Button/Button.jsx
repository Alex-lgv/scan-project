import styles from './Button.module.css';

const Button = ({ type, children, disabled = false }) => {
  return (
    <button type={type} className={styles.btn} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
