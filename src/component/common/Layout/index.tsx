import React from 'react';
import Nav from '../Nav';
import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <Nav />
      </div>
      <div className={styles.right_container}>
        {children}
      </div>
    </div>
  )
}

export default Layout;