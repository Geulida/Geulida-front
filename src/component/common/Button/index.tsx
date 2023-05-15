import React from 'react';
import styles from './button.module.scss';

type Props = {
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