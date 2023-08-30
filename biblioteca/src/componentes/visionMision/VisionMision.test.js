import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para tener acceso a los matchers de Jest DOM
import LibraryInfoToggle from './LibraryInfoToggle';

test('muestra inicialmente la visión de la biblioteca', () => {
  const { getByText } = render(<LibraryInfoToggle />);
  expect(getByText('Visión:')).toBeInTheDocument();
  expect(getByText('Misión:')).not.toBeInTheDocument();
});

test('alterna entre visión y misión al hacer clic en el botón', () => {
  const { getByText } = render(<LibraryInfoToggle />);
  const button = getByText('Mostrar Visión');
  fireEvent.click(button);
  expect(getByText('Visión:')).not.toBeInTheDocument();
  expect(getByText('Misión:')).toBeInTheDocument();
  fireEvent.click(button);
  expect(getByText('Visión:')).toBeInTheDocument();
  expect(getByText('Misión:')).not.toBeInTheDocument();
});