import React from 'react';
import './style.css';

const ModalWrap = ({ isOpen, onClose, children }) => {
  return (
    <div className="modal-wrap" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <div className="modal-header">
          <button className="modal-close-button" onClick={onClose}>
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrap;
