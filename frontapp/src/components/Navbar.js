import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo empresa" className="logo" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="inicioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inicio
              </Link>
              <ul className="dropdown-menu" aria-labelledby="inicioDropdown">
                <li><Link className="dropdown-item" to="/" onClick={closeMenu}>¿Quienes somos?</Link></li>
                <li><Link className="dropdown-item" to="/" onClick={closeMenu}>Localización</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/smartMetering" onClick={closeMenu}>Medición inteligente</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/tecnologiasIot" id="tecnologiasIotDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tecnologías IoT
              </Link>
              <ul className="dropdown-menu" aria-labelledby="tecnologiasIotDropdown">
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>LoRaWAN</Link></li>
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>Sigfox</Link></li>
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>Cat-M1</Link></li>
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>Cat.1</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/galeria" id="galeriaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Galería
              </Link>
              <ul className="dropdown-menu" aria-labelledby="galeriaDropdown">
                <li><Link className="dropdown-item" to="/galeria#seccion1" onClick={closeMenu}>Medición analoga</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion2" onClick={closeMenu}>Medición digital</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion2" onClick={closeMenu}>Medición ultrasonica</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion2" onClick={closeMenu}>Medición Prepago</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plataforma" onClick={closeMenu}>Plataforma</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/simulador" onClick={closeMenu}>Simulador</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/editar" onClick={closeMenu}>Editar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
