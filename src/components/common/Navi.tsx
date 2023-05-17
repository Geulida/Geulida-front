import { useState, useRef, useEffect } from 'react';
import styles from './Navi.module.scss';
import { ReactComponent as Chat } from 'assets/Chat.svg';
import { ReactComponent as Signup } from 'assets/Signup.svg';
import { ReactComponent as Login } from 'assets/Login.svg';
import Modal from './Modal';
import modalStyles from './Modal.module.scss';

function Navi() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleModal = () => {
    setModalOpen((open) => !open);
  };

  const handleModalOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleModalOutside);
    return () => {
      document.removeEventListener('mousedown', handleModalOutside);
    };
  }, []);

  return (
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
            <Login className={styles.btn} onClick={handleModal} />
            {modalOpen && <div className={styles.backdrop} />}
            <div className={`${modalStyles.overlay} ${modalOpen ? modalStyles.modalOpen : ''}`} ref={modalRef}>
              <Modal onClose={() => setModalOpen(false)} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navi;
