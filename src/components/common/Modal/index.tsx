import React from 'react';
import styles from './Modal.module.scss';
import { ReactComponent as Cancel } from 'assets/Cancel.svg';

// confirmHandler는 모달의 확인 버튼을 눌렀을 때의 이벤트를 넣는 곳입니다.
// 로그아웃 시 진행되는 함수를 넣어주세요
// modalType은 colorPicker, painterPicker 페이지에서 전달받아온 props입니다, 로그아웃 시에는 넘겨주지 말아주세요
// logoutHandler는 로그아웃 이벤트 props입니다.
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
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.overlay}>
        <div className={styles.modalTop}>
          <div className={styles.modalTitle}>Notification</div>
          <div className={styles.closeBtn}>
            <Cancel onClick={closeModal} />
          </div>
        </div>
        <div className={styles.modalMessage}>{modalMessage}</div>
        {modalType === 'color' || 'painter' ? (
          <button className={styles.confirmBtn} onClick={closeModal}>
            확인 후 닫기
          </button>
        ) : (
          <button className={styles.confirmBtn} onClick={logoutHandler}>
            로그아웃
          </button>
        )}
      </div>
    </>
  );
}

export default Modal;
