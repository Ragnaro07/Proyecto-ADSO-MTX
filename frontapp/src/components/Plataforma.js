import React from 'react';
import Navbar from './Navbar';
import Plataforma1 from '../assets/img/plat1.png';
import Plataforma2 from '../assets/img/plat2.png';
import '../assets/css/style1.css';

const Plataforma = () => {
  return (
    <div>
      <Navbar />
      <header>        
        <div className="contenedorplataforma">
            <h1 className="tituloplat">Plataformas de gestión de los datos</h1>
            <p className="copy1">Para la gestión y control de los datos es indispensable contar con una plataforma que permita al usuario controlar en tirmpo real lo que esta sucedidendo con la tecnologia implementada, razon por la cual, se han implementado he integrado al portafolio algunas plataformas que le permitiran al usuario controlar la información obtenida.</p>
        </div>
        <img src={Plataforma1} alt="Captura 1 plataforma" className="imgplataforma" />
        <img src={Plataforma2} alt="captura 2 plataforma" className="imgplataforma" />
    </header>

    </div>
  );
};

export default Plataforma;