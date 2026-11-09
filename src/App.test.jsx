import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('adds contacts, recovers from duplicate name, and creates an appointment', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const fillContact = (name) => {
    fireEvent.change(screen.getByPlaceholderText('Name'), {target: {value: name}});
    fireEvent.change(screen.getByPlaceholderText('Phone'), {target: {value: '212-555-1234'}});
    fireEvent.change(screen.getByPlaceholderText('E-mail'), {target: {value: 'fixture@example.invalid'}});
  };
  fillContact('Alice');
  fireEvent.click(screen.getByDisplayValue('Add contact'));
  expect(screen.getByText('Alice')).toBeTruthy();
  fillContact('Alice');
  fireEvent.click(screen.getByDisplayValue('Add contact'));
  expect(screen.getAllByText('Alice')).toHaveLength(1);
  fillContact('Bob');
  fireEvent.click(screen.getByDisplayValue('Add contact'));
  expect(screen.getByText('Bob')).toBeTruthy();
  fireEvent.click(screen.getByRole('link', {name: 'Appointments'}));
  fireEvent.change(screen.getByRole('combobox'), {target: {value: 'Alice'}});
  fireEvent.change(screen.getByPlaceholderText('Title'), {target: {value: 'Fixture meeting'}});
  fireEvent.change(document.querySelector('input[type=date]'), {target: {value: '2099-01-01'}});
  fireEvent.change(document.querySelector('input[type=time]'), {target: {value: '12:30'}});
  fireEvent.click(screen.getByDisplayValue('Add appointment'));
  expect(screen.getByText('Fixture meeting')).toBeTruthy();
  expect(screen.getByText('2099-01-01')).toBeTruthy();
  fireEvent.click(screen.getByRole('link', {name: 'Contacts'}));
  expect(screen.getByText('Bob')).toBeTruthy();
});
