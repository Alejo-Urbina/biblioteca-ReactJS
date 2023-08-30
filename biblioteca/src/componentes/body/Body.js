import React from 'react';
import './Body.css'; // Importa los estilos si los tienes
import List from '../list/List';
import Lend from '../lend/Lend';
import Buy from '../buy/Buy';
import ColorBox from '../colorBox/ColorBox';
import Images from '../images/Images';
import VisionMision from '../visionMision/VisionMision';

function Body() {
  return (
    <div className="library-body">
      <h2>Explora Nuestra Colección de Libros</h2>
      <List />
      <Lend />
      <Buy />
      <Images />
      <VisionMision />
    </div>
  );
}

export default Body;