import React from 'react';
import styles from './InputContainer.module.scss';
import { ReactComponent as Send } from 'assets/Send.svg';

interface InputContainerProps {
  inputValue: string;
  isDisabled: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

function InputContainer({ inputValue, isDisabled, handleInputChange, handleClick }: InputContainerProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder='메시지를 입력하세요 (최대 500자까지 작성할 수 있습니다)'
        type='text'
        value={inputValue}
        maxLength={500}
        onChange={handleInputChange}
        disabled={isDisabled}
      />

      <button className={styles.button} onClick={handleClick} disabled={isDisabled} value='submit'>
        <Send />
      </button>
    </div>
  );
}

export default InputContainer;
