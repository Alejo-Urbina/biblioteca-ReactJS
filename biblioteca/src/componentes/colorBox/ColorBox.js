import React, { useState } from 'react';
import './ColorBox.css'; // Importa los estilos CSS

const ColorBox = () => {
  const [currentColor, setCurrentColor] = useState('#3498db'); // Color inicial

  const changeColor = () => {
    // Genera un color aleatorio en formato hexadecimal
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setCurrentColor(randomColor);
  };

  return (
    <div className="color-box" style={{ backgroundColor: currentColor }} onClick={changeColor}>
      <button className="change-color-button" onClick={changeColor}>
        Cambiar Color
      </button>
    </div>
  );
};

export default ColorBox;