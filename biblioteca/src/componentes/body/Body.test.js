import React from 'react';
import { render } from '@testing-library/react';
import Body from './Body';

test('representa el componente con el título correcto', () => {
  const { getByText } = render(<Body />);
  const titleElement = getByText(/Explora Nuestra Colección de Libros/i);
  expect(titleElement).toBeInTheDocument();
});

test('tiene la clase biblioteca-cuerpo', () => {
  const { container } = render(<Body />);
  const bodyElement = container.querySelector('.library-body');
  expect(bodyElement).toBeInTheDocument();
});