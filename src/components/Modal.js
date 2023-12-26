import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="ModalOverlay" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <button className="CloseButton" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
