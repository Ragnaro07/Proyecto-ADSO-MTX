import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/Logo MTX.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style1.css';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark transparent-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo empresa" className="logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/smartMetering" onClick={closeMenu}>Medición inteligente</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link" to="/tecnologiasIot" onClick={closeMenu}>Tecnologías IoT</NavLink>
              <ul className="dropdown-menu" aria-labelledby="tecnologiasIotDropdown">
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>LoRaWAN</Link></li>
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>Sigfox</Link></li>
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>Cat-M1</Link></li>
                <li><Link className="dropdown-item" to="/tecnologiasIot" onClick={closeMenu}>Cat.1</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link" to="/galeria" onClick={closeMenu}>Galería</NavLink>
              <ul className="dropdown-menu" aria-labelledby="galeriaDropdown">
                <li><Link className="dropdown-item" to="/galeria#seccion1" onClick={closeMenu}>Medición analoga</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion2" onClick={closeMenu}>Medición digital</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion2" onClick={closeMenu}>Medición ultrasonica</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion2" onClick={closeMenu}>Medición Prepago</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/plataforma" onClick={closeMenu}>Plataforma</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/simulador" onClick={closeMenu}>Simulador</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/editar" onClick={closeMenu}>Editar</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
