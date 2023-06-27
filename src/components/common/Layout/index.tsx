import React from 'react';
import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.right_container}>
        {children}
      </div>
    </div>
  )
}

export default Layout;