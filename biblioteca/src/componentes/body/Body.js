import React from 'react';
import './Body.css'; // Importa los estilos si los tienes
import List from '../list/List';
import Lend from '../lend/Lend';
import Buy from '../buy/Buy';

function Body() {
  return (
    <div className="library-body">
      <h2>Explora Nuestra Colección de Libros</h2>
      <List />
      <Lend />
      <Buy />
    </div>
  );
}

export default Body;