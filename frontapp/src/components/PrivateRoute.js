import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  // Siempre renderiza el componente, independientemente de la autenticación o el rol
  return <Element {...rest} />;
};

export default PrivateRoute;
