import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa'; // Importa el ícono de salida
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirección
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style1.css';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Crea una instancia de useNavigate

  const handleLogout = () => {
    logout();
    console.log('Logged out successfully');
    navigate('/login'); // Redirige a la página de inicio de sesión
  };

  return (
    <div className="logout-icon-container" onClick={handleLogout}>
      <FaSignOutAlt className="logout-icon" />
    </div>
  );
};

export default LogoutButton;
