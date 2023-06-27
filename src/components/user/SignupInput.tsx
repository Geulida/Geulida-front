import styles from './SignupInput.module.scss';

interface Props {
  name: string;
  text: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function SignupInput({ name, text, type, placeholder, onChange, error }: Props) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {text}
      </label>
      <input type={type} placeholder={placeholder} id={name} className={styles.input} onChange={onChange} required />
      {error && <span>{error}</span>}
    </div>
  );
}

export default SignupInput;
