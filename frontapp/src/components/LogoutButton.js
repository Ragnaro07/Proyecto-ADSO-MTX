import React from 'react';
import { useAuth } from '../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    // No redirigir a la página de inicio de sesión
    console.log('Logged out successfully');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
