import React, { forwardRef } from 'react';
import styles from './Modal.module.scss';
import closeIcon from 'src/icons/close.svg';

type ModalProps = {
  children: React.ReactNode;
  title: string;
  onCloseModal: () => void;
};

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, title, onCloseModal }, ref) => {
    return (
      <dialog className={styles.Modal} ref={ref}>
        <button onClick={onCloseModal} className={styles.Modal_closeButton}>
          <img
            src={closeIcon}
            alt="close"
            className={styles.Modal_closeButtonImage}
          />
        </button>
        <h3 className={styles.Modal_title}>{title}</h3>
        {children}
      </dialog>
    );
  }
);
