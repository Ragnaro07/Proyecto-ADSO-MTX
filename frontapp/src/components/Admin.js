import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Admin = () => {
  return (
    <div>
        <Navbar />
          <header> 
          <div className="container">
            <h1>Dashboard de Administrador</h1>
            <p>Bienvenido al panel de administración. Aquí puedes gestionar usuarios, productos y más.</p>
            <div className="btn-group">
              <Link to="/admin/users/create" className="btn btn-primary">Añadir Usuario</Link>
              <Link to="/users" className="btn btn-secondary">Ver Usuarios</Link>
              <Link to="/create" className="btn btn-primary">Añadir Producto</Link>
              <Link to="/editar" className="btn btn-secondary">Ver Productos</Link>
              {/* Puedes añadir más enlaces o componentes específicos para el administrador aquí */}
            </div>
          </div>
        </header>
    </div>
  );
};

export default Admin;
