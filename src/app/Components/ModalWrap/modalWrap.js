import React from 'react';
import './style.css';

const ModalWrap = ({
  isOpen,
  onClose,
  children
}) => {
  return (
    <div className="modal-wrap" style={{display: isOpen ? 'block' : 'none' }}>
      {children}
    </div>
  );
};

export default ModalWrap;
