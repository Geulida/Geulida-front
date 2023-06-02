import React from 'react';
import styles from './button.module.scss';

interface Props {
  onClick?: () => void;
  value: string;
  disabled?: boolean;
  type?: string;
}

function Button({ onClick, value, disabled }: Props) {
  return (
    <div>
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        {value}
      </button>
    </div>
  );
}

export default Button;
