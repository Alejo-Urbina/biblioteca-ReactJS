import React, { useState } from 'react';
import axios from 'axios';
import './List.css'; // Importa los estilos CSS

function List() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const displayedBooks = books.slice(0, 10); // Mostrar solo los primeros 10 libros

  return (
    <div className="list-container">
      <div className="button-container">
        <button onClick={fetchBooks}>Cargar Lista de Libros</button>
      </div>
      {displayedBooks.length > 0 ? (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {displayedBooks.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default List;