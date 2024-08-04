import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decodifica el token aquí si es necesario y obtén la información del usuario
      setUser({ role: 'admin' }); // Reemplaza esto con la lógica real para obtener la información del usuario
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ role: 'admin' }); // Reemplaza esto con la lógica real para obtener la información del usuario
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
