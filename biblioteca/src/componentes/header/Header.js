import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="biblioteca-header">
      <h1 className="title">Bienvenido a Nuestra Biblioteca</h1>
      <img className="library-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fEoczMjYIqqFS4PBtHVGzEOnlOlDZtOYnA&usqp=CAU" alt="Biblioteca" />
    </div>
  );
}

export default Header;
