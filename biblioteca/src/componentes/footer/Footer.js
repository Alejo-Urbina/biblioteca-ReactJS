import React from 'react';
import './Footer.css'; // Importa los estilos si los tienes

function Footer() {
  return (
    <footer className="library-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Información de la Biblioteca</h3>
          <p>Somos una biblioteca comprometida con brindar el mejor servicio y la más amplia colección de libros para nuestros visitantes.</p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Dirección: Calle 15 #23, Ciudad Cucuta</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@biblioteca.com</p>
        </div>
        <div className="footer-section">
          <h3>Horario de Atención</h3>
          <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábados: 10:00 AM - 4:00 PM</p>
          <p>Domingos: Cerrado</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;