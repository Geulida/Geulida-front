import React, { ChangeEvent } from 'react';
import styles from './input.module.scss';

interface Props {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, placeholder, name, value, onChange }: Props) {
  return (
    <div className={styles.input__container}>
      <input 
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        required
        onChange={onChange}
      />
    </div>
  );
}

export default Input;