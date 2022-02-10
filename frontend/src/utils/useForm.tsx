import React, { useState } from 'react';

export type ErrorMessage = string | null;

export type Values = Record<string, any>;

export type Errors = Record<string, ErrorMessage>;

export type Validation = Record<
  string,
  {
    type: 'text' | 'email' | ((value: any) => boolean);
    required?: boolean;
    errorMessage: string;
  }
>;

export interface HandleErrors {
  error: ErrorMessage;
  errorVisible: boolean;
  showError(): void;
}

export interface UseFormProps {
  validation: Validation;
  handleSubmit: (vals: Values) => void;
  initialValues: Values;
}

const validateEmail = (email: string) => {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};

export const useForm = ({
  validation,
  handleSubmit,
  initialValues = {},
}: UseFormProps) => {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  const handleValidation = (values: Values) => {
    let errors: Errors = {};

    for (const key in values) {
      const validator = validation[key];
      const value = values[key];

      if (validator) {
        let valid = true;

        if (validator.type === 'text') {
          if (typeof value !== 'string') {
            valid = false;
          }
        } else if (validator.type === 'email') {
          valid = validateEmail(value);
        } else if (typeof validator.type === 'function') {
          valid = validator.type(value);
        }

        if (!valid) {
          errors[key] = validator.errorMessage;
        }

        // Required fields take precedence over other validation errors
        if (validator.required && !value) {
          errors[key] = 'Required';
        }
      }
    }

    setErrors(errors);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValues = {
      ...values,
      [event?.target.name]: event.target.value,
    };
    setValues(updatedValues);
    handleValidation(updatedValues);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(values);
    // reset/clear form input values
    setValues(initialValues);
  };

  return {
    onChange,
    onSubmit,
    values,
    errors,
  };
};
