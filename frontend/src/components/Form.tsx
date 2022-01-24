import React from "react";
import { useForm } from "../utils/useForm";

export interface FormValues {}

function Form() {
  const { onChange, onSubmit, values, errors } = useForm({
    validation: {
      name: {
        type: "text",
        errorMessage: "Name required",
        required: true,
      },
      email: {
        type: "email",
        errorMessage: "Invalid email",
        required: true,
      },
    },
    initialValues: {
      name: "",
      email: "",
    },
    handleSubmit: async (values) => {
      console.log("SUBMIT", values);

      // TODO: Update this URL?
      const request: RequestInfo = new Request("http://localhost:5000/submit", {
        method: "POST",
        body: JSON.stringify({
          organization: '', // FIXME: where does this come from? should it be part of the form?
          name: values.name,
          email: values.email,
        }),
      });

      const res = await fetch(request);

      const body = await res.json();
    },
  });

  return (
    <form className="flex py-6" onSubmit={onSubmit}>
      <div className="flex flex-col text-left w-full">
        <div className="my-6 flex justify-between">
          <label className="ml-3 text-white">Name:</label>
          <input
            className="pb-2 rounded-md w-9/12 mr-3 text-black"
            name="name"
            type="text"
            required={true}
            onChange={onChange}
          />
        </div>
        {errors?.name && <div>{errors.name}</div>}

        <div className="my-6 flex justify-between">
          <label className="ml-3 text-white">Email:</label>
          <input
            className="pb-2 rounded-md w-9/12 mr-3 text-black"
            name="email"
            type="email"
            required={true}
            onChange={onChange}
          />
        </div>
        {errors?.email && <div>{errors.email}</div>}

        <button
          className="text-center rounded-md bg-[#17494D] w-1/4 place-self-center border-[#E4F0D6] border-2 text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
