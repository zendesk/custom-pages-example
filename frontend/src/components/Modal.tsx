import React from 'react';
import Form from './Form';

export interface ModalProps {
    setShowModal(a: boolean): void;
  }

function Modal({ setShowModal } : ModalProps) {

    return(
        <div className="modal bg-[#17494D] p-4 rounded-lg text-white">
            <div className="flex text-center justify-center pt-5">
            <h3 className="text-xl">Sign-up</h3>
            <button className="fixed right-5 top-3 text-[20px]"onClick={e => {
                e.preventDefault();
                setShowModal(false)
            }}>&#10006;</button>
            </div>
            <Form />
        </div>
    )
}

export default Modal;