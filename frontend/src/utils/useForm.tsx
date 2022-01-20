import React, { isValidElement, useState } from 'react';

export type ErrorMessage = string | null;

export type Values = Record<string, any>;

export type Errors = Record<string, ErrorMessage>;

export type Validation = Record<string, {
  type: 'text' | 'number' | 'email' | ((value: any) => boolean);
  required?: boolean;
  errorMessage: string;
}>;

export interface HandleErrors {
  error: ErrorMessage,
  errorVisible: boolean,
  showError(): void
};

/*
{
  email: {
    required: true,
    type: 'email',
    message: 'Invalid email',
  },
  foo: {
    required: true,
    type: 'number',
    message: 'Must be a number',
  }

}

*/

const validateEmail = (email: string): boolean => {
  return ((email || '')
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) || 0) > 0;
};

export const useForm = (validation: Validation, callback: any, initialState = {}) => {
  const [ values, setValues ] = useState<Values>(initialState);
  const [ errors, setErrors ] = useState<Errors>({});

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
        } else if (validator.type === 'number') {
          if (isNaN(parseInt(value))) {
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
          errors[key] = 'Required.';
        }
      }
    }

    setErrors(errors);
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValues = {...values, [ event?.target.name ]: event.target.value};
    setValues(updatedValues);
    handleValidation(updatedValues);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(values);
  }

  return {
    onChange,
    onSubmit,
    values,
    errors
  }
}