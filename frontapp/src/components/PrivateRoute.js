// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth(); // Obtén el usuario autenticado
  const location = useLocation();

  const isAuthenticated = !!user;
  const hasRole = roles ? roles.includes(user?.role) : true;

  if (!isAuthenticated) {
    // Redirige al login si no está autenticado
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!hasRole) {
    // Redirige si el usuario no tiene el rol adecuado
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
