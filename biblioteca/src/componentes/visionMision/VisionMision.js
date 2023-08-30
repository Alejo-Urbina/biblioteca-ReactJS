import React, { useState } from 'react';
import './VisionMision.css';

const LibraryInfoToggle = () => {
  const [showVision, setShowVision] = useState(true);

  const toggleInfo = () => {
    setShowVision(!showVision);
  };

  return (
    <div className="library-info-container">
      <h2>Información de la Biblioteca</h2>
      <button className="library-info-button" onClick={toggleInfo}>
        Mostrar {showVision ? 'Misión' : 'Visión'}
      </button>
      <div className="library-info-content">
        {showVision ? (
          <p>
            <strong>Visión:</strong> Ser el recurso principal para el aprendizaje y el conocimiento en nuestra comunidad.
          </p>
        ) : (
          <p>
            <strong>Misión:</strong> Proporcionar acceso gratuito a una amplia gama de recursos de información y promover la alfabetización.
          </p>
        )}
      </div>
    </div>
  );
};

export default LibraryInfoToggle;