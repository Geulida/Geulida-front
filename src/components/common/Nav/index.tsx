import React from 'react';
import styles from './nav.module.scss';
import { ReactComponent as Chat } from './icons/chat-left.svg';
import { ReactComponent as Login } from './icons/person-fill.svg';
import { ReactComponent as Signup } from './icons/person-fill-add.svg';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__first}>
        <Chat className={styles.nav__chat}/>
      </div>
      <div className={styles.nav__second}>
        <Login className={styles.nav__login}/>
      </div>
      <div className={styles.nav__third}>
        <Signup className={styles.nav__signup}/>
      </div>
    </div>
  )
}

export default Nav;