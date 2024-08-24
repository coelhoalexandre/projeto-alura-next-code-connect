"use client";
import styles from "./modal.module.css";

import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

export const Modal = forwardRef(
  ({ children }: { children: React.ReactNode }, ref: ForwardedRef<any>) => {
    const dialogRef = useRef<any | null>(null);

    const openModal = () => {
      dialogRef.current.showModal();
    };

    const closeModal = () => {
      dialogRef.current.close();
    };

    useImperativeHandle(ref, () => {
      return {
        closeModal,
        openModal,
      };
    });
    return (
      <dialog ref={dialogRef} className={styles.dialog}>
        <header className={styles.header}>
          <button onClick={closeModal}>X</button>
        </header>
        {children}
      </dialog>
    );
  }
);

Modal.displayName = "Modal";
