import React from 'react';
import styles from './Modal.module.scss';
import { ReactComponent as Cancel } from 'assets/Cancel.svg';

interface ModalProps {
  modalHandler: () => void;
  modalMessage: string;
  modalType?: string;
  logoutHandler?: () => void;
}

function Modal({ modalHandler, modalMessage, modalType, logoutHandler }: ModalProps) {
  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (modalHandler) {
      modalHandler();
    }
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.backdrop}></div>
      <div className={styles.overlay}>
        <div className={styles.modalTop}>
          <div className={styles.modalTitle}>Notification</div>
          <div className={styles.closeBtn}>
            <Cancel onClick={closeModal} />
          </div>
        </div>
        <div className={styles.modalMessage}>{modalMessage}</div>
        {!modalType ? (
          <button className={styles.confirmBtn} onClick={logoutHandler}>
            로그아웃
          </button>
        ) : (
          <button className={styles.confirmBtn} onClick={closeModal}>
            확인 후 닫기
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;
