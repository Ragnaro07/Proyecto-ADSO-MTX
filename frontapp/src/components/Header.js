import React from 'react';
import plantaImage from '../assets/img/imgplanta.jpeg';
import '../assets/css/style1.css'; // Crea un archivo CSS para los estilos específicos del Header

const Header = () => {
  return (
    <header>
      <div>
        <img src={plantaImage} alt="imagen planta" className="banner" />
      </div>
      <div className="texto_banner">
        <h1>¿Quienes somos?</h1>
        <br />
        <p>Comprometidos con la calidad, en METREX nos especializamos en la fabricación y comercialización de equipos de medición de flujo de alta precisión y prestación de soporte técnico.</p>
      </div>
    </header>
  );
};

export default Header;
