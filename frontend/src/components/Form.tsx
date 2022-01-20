import React from "react";
import { useForm } from "../utils/useForm";

export interface FormValues {}

function Form() {
  // const { onChange, onSubmit, values, errors } = useForm({
  //     email: {
  //         type: 'email',
  //         errorMessage: 'Invalid email',
  //         required: true,
  //     },
  //     phone: {
  //         type: 'text',
  //         errorMessage: 'Invalid phone',
  //         required: true,
  //     },
  // },
  // (vals) => {

  // },
  // {
  //     email: '',
  //     phone: '',
  // })
  const handleSubmit = (event: React.FormEvent) => {
    // modal/form submit method to send to backend
    event.preventDefault();
    console.log("Form sent.");
  };

  return (
    <form className="bg-white flex py-8" onSubmit={handleSubmit}>
      <div className="flex flex-col">
          <label className="text-left ml-3">Email:</label>
          <input className="pb-2" type="email" required={true} />
          <label className="text-left ml-3">Phone Number:</label>
          <input className="pb-2" type="tel" required={true} />
        <button className="pb-2 text-center justify-self-center self-center" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
