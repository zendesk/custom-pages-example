import React from 'react';
import { useForm } from '../utils/useForm';

export interface FormValues {
    
}


function Form() {
    const { onChange, onSubmit, values, errors } = useForm({
        email: {
            type: 'email',
            errorMessage: 'Invalid email',
            required: true,
        },
        phone: {
            type: 'text',
            errorMessage: 'Invalid password',
            required: true,
        },
    },
    (vals) => {

    },
    {
        email: '',
        phone: '',
    })
    const handleSubmit = (event: React.FormEvent) => {
        // modal/form submit method to send to backend
        event.preventDefault();
        console.log("Form sent.");
      };

    return(
        <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" required={true}/>
          <label>Phone Number:</label>
          <input type="tel" required={true}/>
        </div>
        <button type="submit" >Submit</button>
      </form>
    )
}

export default Form;

