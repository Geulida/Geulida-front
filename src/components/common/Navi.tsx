import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navi.module.scss';
import { ReactComponent as Chat } from 'assets/Chat.svg';
import { ReactComponent as Signup } from 'assets/Signup.svg';
import { ReactComponent as Login } from 'assets/Login.svg';
import { ReactComponent as Collection } from 'assets/Collection.svg';
import { ReactComponent as Logout } from 'assets/Logout.svg';
import Modal from './Modal';
import { getToken, removeToken } from 'api/token';

function Navi() {
  const navi = useNavigate();
  const auth = getToken();
  const [showModal, setShowModal] = useState(false);
  const [isChatClicked, setIsChatClicked] = useState(false);

  const handleModalShow = () => {
    setShowModal((prev) => !prev);
  };

  const handleLogout = () => {
    handleModalShow();
    removeToken();
    navi('/');
  };

  const handleClick = () => {
    if (auth) setIsChatClicked(true);
  };

  const handleClickOff = () => {
    setIsChatClicked(false);
  };

  return (
    <>
      {showModal && <Modal modalType='logout' modalHandler={handleModalShow} logoutHandler={handleLogout} modalMessage='로그아웃 하시겠습니까?' />}
      <div className={styles.container}>
        <nav>
          <div>
            <NavLink to='/color-pick' className={({ isActive, isPending }) => (isChatClicked ? styles.active : isActive ? styles.active : '')}>
              <Chat className={styles.btn} onClick={handleClick} />
            </NavLink>
          </div>
          {!auth ? (
            <div className={styles.user}>
              <NavLink to='/signup' className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}>
                <Signup className={styles.btn} onClick={handleClickOff} />
              </NavLink>

              <NavLink to='/' className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}>
                <Login className={styles.btn} onClick={handleClickOff} />
              </NavLink>
            </div>
          ) : (
            <div className={styles.user}>
              <NavLink to='/collection' className={({ isActive, isPending }) => (isPending ? styles.inactive : isActive ? styles.active : '')}>
                <Collection className={styles.btn} onClick={handleClickOff} />
              </NavLink>

              <button onClick={handleModalShow} value='logout'>
                <Logout className={styles.btn} onClick={handleClickOff} />
              </button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navi;
