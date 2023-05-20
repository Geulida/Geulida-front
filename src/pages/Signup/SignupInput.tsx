import styles from './SignupInput.module.scss';

interface Props {
  name: string;
  text: string;
  type: string;
  placeholder?: string;
}

function SignupInput({ name, text, type, placeholder }: Props) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {text}
      </label>
      <input type={type} placeholder={placeholder} id={name} className={styles.input} required />
    </div>
  );
}

export default SignupInput;
