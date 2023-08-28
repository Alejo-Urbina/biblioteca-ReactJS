import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('muestra el texto de bienvenida', () => {
  const { getByText } = render(<Header />);
  const welcomeText = getByText(/Bienvenido a Nuestra Biblioteca/i);
  expect(welcomeText).toBeInTheDocument();
});

test('renderiza una imagen con texto alternativo "Biblioteca"', () => {
  const { getByAltText } = render(<Header />);
  const image = getByAltText('Biblioteca');
  expect(image).toBeInTheDocument();
});

test('representa la fuente de imagen correcta', () => {
  const { getByAltText } = render(<Header />);
  const image = getByAltText('Biblioteca');
  expect(image).toHaveAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fEoczMjYIqqFS4PBtHVGzEOnlOlDZtOYnA&usqp=CAU');
});

test('tiene la clase biblioteca-header', () => {
  const { container } = render(<Header />);
  const header = container.querySelector('.biblioteca-header');
  expect(header).toBeInTheDocument();
});

test('tiene la clase de título', () => {
  const { container } = render(<Header />);
  const title = container.querySelector('.title');
  expect(title).toBeInTheDocument();
});

test('tiene la clase biblioteca-imagen', () => {
  const { container } = render(<Header />);
  const image = container.querySelector('.library-image');
  expect(image).toBeInTheDocument();
});