import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renderiza el componente con la información correcta', () => {
  const { getByText } = render(<Footer />);
  const infoElement = getByText(/Somos una biblioteca comprometida con brindar el mejor servicio/i);
  expect(infoElement).toBeInTheDocument();
});

test('renderiza el componente con la información de contacto correcta', () => {
  const { getByText } = render(<Footer />);
  const contactElement = getByText(/Dirección: Calle 15 #23, Ciudad Cucuta/i);
  expect(contactElement).toBeInTheDocument();
});

test('renderiza el componente con el horario de atención correcto', () => {
  const { getByText } = render(<Footer />);
  const hoursElement = getByText(/Lunes a Viernes: 9:00 AM - 6:00 PM/i);
  expect(hoursElement).toBeInTheDocument();
});

test('tiene la clase library-footer', () => {
  const { container } = render(<Footer />);
  const footerElement = container.querySelector('.library-footer');
  expect(footerElement).toBeInTheDocument();
});

test('el footer contiene tres secciones footer-section', () => {
  const { container } = render(<Footer />);
  const sectionElements = container.querySelectorAll('.footer-section');
  expect(sectionElements.length).toBe(3);
});

test('las secciones footer tienen los encabezados correctos', () => {
  const { getByText } = render(<Footer />);
  const headingElements = getByText(/Información de la Biblioteca/i);
  expect(headingElements).toBeInTheDocument();
});