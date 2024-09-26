// src/components/Modal/Modal.jsx
import React from 'react';

const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">
          {children}
        </div>
        <button className="modal-close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
