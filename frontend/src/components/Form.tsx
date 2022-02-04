import React from "react";
import { useForm } from "../utils/useForm";
import { getAuthToken } from "../utils/getAuthToken";

import SubmitFail from "./SubmitFail";
import SubmitSuccess from "./SubmitSuccess";

interface Props {
  setSubmitSuccess(a: boolean): void;
  submitSuccess: boolean;
  setSubmitFailure(a: boolean): void;
  submitFailure: boolean;
  setFormState(a: boolean): void;
  formState: boolean
}

function Form({setSubmitSuccess, submitSuccess, setSubmitFailure, submitFailure, formState, setFormState}: Props) {

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

      const token = await getAuthToken();

      const request: RequestInfo = new Request(
        process.env.REACT_APP_API_URL + "/submit", //tested with mock api - getting CORS err for submit
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + token,
          },
          body: JSON.stringify({
            name: values.name,
            organization: values.organization,
            email: values.email,
          }),
        }
      );

      await fetch(request)
        .then((res) => {
          if (!res.ok) {
            setSubmitFailure(true);
            setFormState(false);
            console.log(res.status);
          } else {
            setSubmitSuccess(true);
            setFormState(false);
            console.log(res.status);
          }
        })
        .then((data) => {
          console.log("DATA: ", data);
        })
        .catch((error) => {
          console.log("ERROR: ", error);
        });
    },
  });

  return (
    <form className="flex pt-2" onSubmit={onSubmit}>
      {submitFailure && <SubmitFail />}
      {submitSuccess && <SubmitSuccess />}
      {formState && (
        <div className="flex flex-col text-left w-full">
          <div className="static">
            <div className="my-6 flex justify-center">
              <input
                className="md:py-1 rounded-md w-2/3 md:w-9/12 mr-1 md:mr-2 text-black pl-3"
                placeholder="Name"
                name="name"
                type="text"
                required={true}
                onChange={onChange}
                value={values.name}
              />
              {errors?.name && (
                <div className="text-red-400 text-sm absolute left-12 top-[105px] md:top-28">
                  {errors.name}
                </div>
              )}
            </div>
          </div>
          <div className="static">
            <div className="my-6 flex justify-center">
              <input
                className="md:py-1 rounded-md w-2/3 md:w-9/12 mr-1 md:mr-2 text-black pl-3"
                placeholder="Organization"
                name="organization"
                type="text"
                required={true}
                onChange={onChange}
                value={values.organization}
              />
              {errors?.organization && (
                <div className="text-red-400 text-sm absolute top-[178px] left-12 md:top-[192px]">
                  {errors.organization}
                </div>
              )}
            </div>
          </div>
          <div className="static">
            <div className="my-6 flex justify-center">
              <input
                className="md:py-1 rounded-md w-2/3 md:w-9/12 mr-1 md:mr-2 text-black pl-3"
                placeholder="Email"
                name="email"
                type="email"
                required={true}
                onChange={onChange}
                value={values.email}
              />
              {errors?.email && (
                <div className="text-red-400 top-[250px] text-sm absolute left-12 md:top-[274px]">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          <button
            className="text-center rounded-md bg-[#17494D] w-1/4 place-self-center border-[#E4F0D6] border-2 text-white mt-5"
            type="submit"
          >
            Submit
          </button>
        </div>
      )}
    </form>
  );
}

export default Form;
