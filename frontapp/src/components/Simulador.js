import React from 'react';
import Navbar from './Navbar';
import ProConstruccion from '../assets/img/Proyecto_en_construccion.jpg';
import '../assets/css/style1.css';


const Simulador = () => {
  return (
    <div>
      <Navbar />
      <header>        
        <div className="contenedorsimu">
            <h1 className="titulosimu">Simulador para implementación</h1>
            <p className="copy2">Los siguientes formularios le guiaran para conocer caracteristicas principales de la implementación buscada</p><br />
            <img src={ProConstruccion} className="img-fluid" alt="Pagina en construcción"></img>
        </div>
        </header>

    </div>
  );
};

export default Simulador;
