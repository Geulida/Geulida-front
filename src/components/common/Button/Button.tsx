import React from 'react';
import styles from './button.module.scss';

interface Props {
  onClick?: () => void;
  value: string;
}

function Button({ onClick, value }: Props) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
