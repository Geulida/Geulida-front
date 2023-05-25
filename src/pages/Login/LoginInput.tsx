import styles from './LoginInput.module.scss';

interface Props {
  type: string;
  placeholder: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LoginInput({ type, placeholder, onChange, name }: Props) {
  return (
    <div>
      <input className={styles.input} type={type} placeholder={placeholder} name={name} onChange={onChange} required />
    </div>
  );
}

export default LoginInput;
