import React from "react";
import Form from "./Form";
import Submission from "./SubmitSuccess";
import { useForm } from "../utils/useForm";

export interface ModalProps {
  setShowModal(a: boolean): void;
}

function Modal(
  { setShowModal }: ModalProps,
) {
  return (
    <div
      data-testid="modal"
      className="fixed backdrop-blur-[1px] z-auto inset-0 bg-[#00000080]"
    >
      <div className="absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#17494D] h-[350px] md:h-[375px] w-[300px] rounded-lg drop-shadow-lg text-white md:w-[400px]">
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
