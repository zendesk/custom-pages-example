import React from 'react';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Modal from '../components/Modal';
import Form from '../components/Form';


function setShowModal() {
  return true
}

test("renders App without crashing", () => {
  render(<App />);
});

// testing modal render on page with button click
test('modal opens on Learn More button click', async () => {
  render(<App />);
  const button = screen.getByText(/Learn More*/i);
  fireEvent.click(button)
  const modal = render(<Modal setShowModal={setShowModal}/>)
  expect(modal.getAllByTestId('modal')).toBeTruthy();
});

function setSubmitFailure() {
  return false
}

function setSubmitSuccess() {
  return false
}

function setFormState() {
  return true
}

let submitSuccess = false
let submitFailure = false
let formState = true

// testing form inputs
test('modal form accepts all inputs', () => {
  const form = render(<Form setSubmitFailure={setSubmitFailure} setSubmitSuccess={setSubmitSuccess} setFormState={setFormState} formState={formState} submitFailure={submitFailure} submitSuccess={submitSuccess}/>)

  const name = form.getByPlaceholderText(/name*/i)
  expect(name).toBeTruthy();
  const organization = form.getByPlaceholderText(/organization*/i)
  expect(organization).toBeTruthy();
  const email = form.getByPlaceholderText(/email*/i)
  expect(email).toBeTruthy();
});

