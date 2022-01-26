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
      organization: {
        type: "text",
        errorMessage: "Organization required",
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
      organization: "",
      email: "",
    },
    handleSubmit: async (values) => {
      console.log("SUBMIT", values);

      // TODO: Update this URL?
      const request: RequestInfo = new Request("http://localhost:5000/submit", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          organization: "",
          email: values.email,
        }),
      });

      const res = await fetch(request);

      const body = await res.json();
    },
  });

  return (
    <form className="flex py-6 " onSubmit={onSubmit}>
      <div className="flex flex-col text-left w-full">
        <div className="my-6 flex justify-between">
          {/* <label className="ml-1 md:ml-3 text-sm md:text-base md-text-white">Name:</label> */}
          <input
            className="md:py-1 rounded-md w-2/3 md:w-9/12 mr-1 md:mr-2 text-black pl-3"
            placeholder="Name"
            name="name"
            type="text"
            required={true}
            onChange={onChange}
          />
          {errors?.name && (
            <div className="text-red-400	text-sm">{errors.name}</div>
          )}
        </div>
        <div className="my-6 flex justify-between">
          {/* <label className="ml-1 md:ml-3 text-sm md:text-base text-white">Organization:</label> */}
          <input
            className="md:py-1 rounded-md w-2/3 md:w-9/12 mr-1 md:mr-2 text-black pl-3"
            placeholder="Organization"
            name="organization"
            type="text"
            required={true}
            onChange={onChange}
          />
          {errors?.organization && (
            <div className="text-red-400	text-sm">{errors.organization}</div>
          )}
        </div>
        <div className="my-6 flex justify-between">
          {/* <label className="ml-1 md:ml-3 text-sm md:text-base text-white">Email:</label> */}
          <input
            className="md:py-1 rounded-md w-2/3 md:w-9/12 mr-1 md:mr-2 text-black pl-3"
            placeholder="Email"
            name="email"
            type="email"
            required={true}
            onChange={onChange}
          />
          {errors?.email && (
            <div className="text-red-400	text-sm">{errors.email}</div>
          )}
        </div>
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
