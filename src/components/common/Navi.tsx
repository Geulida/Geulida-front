import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Navi.module.scss';
import { ReactComponent as Chat } from 'assets/Chat.svg';
import { ReactComponent as Signup } from 'assets/Signup.svg';
import { ReactComponent as Login } from 'assets/Login.svg';
import Modal from './Modal';
import { removeToken } from 'api/token';

function Navi() {
  const navi = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isChatClicked, setIsChatClicked] = useState(false);
  const [isSignupClicked, setIsSignupClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleModalShow = () => {
    setShowModal((prev) => !prev);
  };

  const handleChatClick = () => {
    setIsChatClicked(true);
    setIsSignupClicked(false);
    setIsLoginClicked(false);
    navi('/color-pick');
  };

  const handleSignupClick = () => {
    setIsChatClicked(false);
    setIsSignupClicked(true);
    setIsLoginClicked(false);
    navi('/signup');
  };

  const handleLoginClick = () => {
    setIsChatClicked(false);
    setIsSignupClicked(false);
    setIsLoginClicked(true);
    navi('/');
  };

  const handleLogout = () => {
    handleModalShow();
    removeToken();
    navi('/');
  };

  return (
    <>
      {showModal && (
        <Modal
          modalType="logout"
          modalHandler={handleModalShow}
          logoutHandler={handleLogout}
          modalMessage="로그아웃 하시겠습니까?"
        />
      )}
      <div className={styles.nav}>
        <nav>
          <div>
            <Chat 
              className={`${styles.btn} ${isChatClicked ? styles.active : ''}`} 
              onClick={handleChatClick} 
            />
          </div>
          <div>
            <div>
              <Signup 
                className={`${styles.btn} ${styles.top} ${isSignupClicked ? styles.active : ''}`} 
                onClick={handleSignupClick} 
              />
            </div>
            <div>
              <Login 
                className={`${styles.btn} ${isLoginClicked ? styles.active : ''}`} 
                onClick={handleLoginClick} 
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navi;
