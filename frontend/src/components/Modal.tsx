import React from "react";
import Form from "./Form";

export interface ModalProps {
  setShowModal(a: boolean): void;
}

function Modal({ setShowModal }: ModalProps) {

  return (
    <div className="modal">
      <div className="absolute z-101 inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#17494D] h-[300px] w-[400px] p-4 rounded-lg text-white">
        <div className="flex text-center justify-center pt-5">
          <h3 className="text-xl">Sign-up</h3>
          <button
            className="absolute right-5 top-3 text-[20px]"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
          >
            &#10006;
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Modal;
