import React from 'react';
import styles from './button.module.scss';

interface Props {
  onClick: () => void;
  value: string;
}

function Button({ onClick, value }: Props) {
  return (
    <>
      <button 
        className={styles.button}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
}

export default Button;