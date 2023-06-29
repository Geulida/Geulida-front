import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.scss';
import artists from 'assets/painterData.json';

interface Props {
  value: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const CustomSelect = ({ value, onClick }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const painterPickRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (painterPickRef.current && !painterPickRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick(e);
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.painterPickerDropDownWrapper} ref={painterPickRef}>
      <div className={`${styles.painterPickerDropDown} ${isOpen ? styles.open : styles.painterPickerDropDown}`} onClick={() => setIsOpen((prev) => !prev)}>
        {!value ? '선택해주세요' : value}
      </div>
      {isOpen && (
        <ul className={`${styles.selectOptions} ${styles.open}`}>
          {artists.map((option) => (
            <li key={option._id} className={styles.selectOption} onClick={handleOptionClick} value={option.name}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
