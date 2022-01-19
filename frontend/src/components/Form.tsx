import React from 'react';
import FormValidation from '../utils/FormValidation';

export interface FormValues {
    
}

function Form() {
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

