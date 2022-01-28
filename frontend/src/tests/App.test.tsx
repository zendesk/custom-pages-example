import React from 'react';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Modal from '../components/Modal';
import Form from '../components/Form';



test("renders App without crashing", () => {
  render(<App />);
});

test('modal opens on Learn More button click', async () => {
  render(<App />);
  const button = screen.getByText(/Learn More*/i);
  fireEvent.click(button)
  expect(screen.getAllByTestId('modal')).toBeInTheDocument()
});

test('modal form accepts all inputs', () => {
  render(<Form />)

  const name = screen.getByPlaceholderText(/name*/i)
  expect(name).toBeTruthy();
  const organization = screen.getByPlaceholderText(/organization*/i)
  expect(organization).toBeTruthy();
  const email = screen.getByPlaceholderText(/email*/i)
  expect(email).toBeTruthy();
})
