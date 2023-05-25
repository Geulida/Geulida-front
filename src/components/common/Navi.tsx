import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Navi.module.scss';
import { ReactComponent as Chat } from 'assets/Chat.svg';
import { ReactComponent as Signup } from 'assets/Signup.svg';
import { ReactComponent as Login } from 'assets/Login.svg';
import Modal from './Modal';
import { removeToken } from 'components/common/Fetcher/Token';

function Navi() {
  const navi = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalShow = () => {
    setShowModal((prev) => !prev);
  };

  const handleClick = () => {
    handleModalShow();
  };

  const handleLogout = () => {
    removeToken();
    navi('/');
  };

  return (
    <>
      {showModal && <Modal modalType='logout' modalHandler={handleModalShow} logoutHandler={handleLogout} modalMessage='로그아웃 하시겠습니까?' />}
      <div className={styles.nav}>
        <nav>
          <div>
            <Chat className={styles.btn} />
          </div>
          <div>
            <div>
              <Signup className={`${styles.btn} ${styles.top}`} />
            </div>
            <div>
              <Login className={styles.btn} onClick={handleClick} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navi;
