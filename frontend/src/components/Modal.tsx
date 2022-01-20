import React from 'react';
import Form from './Form';

export interface ModalProps {
    setShowModal(a: boolean): void;
  }

function Modal({ setShowModal } : ModalProps) {

    return(
        <div className="modal bg-white py-4">
            <h3>Hey I'm a modal</h3>
            <Form />
            <button onClick={e => {
                e.preventDefault();
                setShowModal(false)
            }}>X</button>
        </div>
    )
}

export default Modal;