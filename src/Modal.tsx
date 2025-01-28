import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h1 className="modaltext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          corrupti exercitationem harum commodi magnam quis quos eius aliquam
          deleniti obcaecati beatae debitis culpa rerum, unde iusto modi? Facere
          natus voluptas voluptatem vero
        </h1>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
