import styles from './Modal.module.scss';
import { ReactComponent as Cancel } from 'assets/Cancel.svg';

interface ModalProps {
  onClose: () => void;
}

function Modal({ onClose }: ModalProps) {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={`${styles.overlay} ${styles.modalOpen}`}>
        <div className={styles.modalTop}>
          <div>
            <Cancel />
          </div>
        </div>
        <div>모달 내용(login 또는 logout 등)</div>
      </div>
    </>
  );
}

export default Modal;
