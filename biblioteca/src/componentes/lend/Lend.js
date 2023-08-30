import React, { useState } from 'react';
import './Lend.css'; // Importa los estilos CSS

const Lend = () => {
  const [bookCount, setBookCount] = useState(0);

  const incrementBookCount = () => {
    setBookCount(bookCount + 1);
  };

  const calculateTotalCost = () => {
    const bookPrice = 500;
    return bookCount * bookPrice;
  };

  return (
    <div className="library-container">
      <h1 className="library-title">Biblioteca Prestamos</h1>
      <p className="book-count">Libros solicitados prestamo: {bookCount}</p>
      <p className="total-cost">Costo total: ${calculateTotalCost()}</p>
      <button className="request-button" onClick={incrementBookCount}>
        Solicitar Libro
      </button>
    </div>
  );
};

export default Lend;