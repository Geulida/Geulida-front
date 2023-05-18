import styles from './LoginInput.module.scss';

interface Props {
  type: string;
  placeholder: string;
}

function LoginInput({ type, placeholder }: Props) {
  return (
    <div className={styles.input__container}>
      <input className={styles.input} type={type} placeholder={placeholder} required />
    </div>
  );
}

export default LoginInput;
