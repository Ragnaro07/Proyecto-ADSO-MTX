import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crea un contexto para la autenticación
const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar la información del usuario

  // Efecto secundario para obtener la información del usuario cuando el componente se monta
  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtiene el token del almacenamiento local
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Configura el token de autorización para las solicitudes Axios
      axios.get('http://localhost:8000/api/user') // Realiza una solicitud para obtener la información del usuario
        .then(response => {
          const { name, role } = response.data; // Extrae el nombre y el rol del usuario
          setUser({ name, role, token }); // Actualiza el estado con la información del usuario
          localStorage.setItem('role', role); // Guarda el rol del usuario en el almacenamiento local
        })
        .catch(error => {
          console.error("Error al obtener la información del usuario", error); // Muestra un mensaje de error si la solicitud falla
          localStorage.removeItem('token'); // Elimina el token del almacenamiento local en caso de error
          delete axios.defaults.headers.common['Authorization']; // Elimina el encabezado de autorización de Axios
        });
    }
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  // Función para manejar el inicio de sesión
  const login = (token) => {
    localStorage.setItem('token', token); // Guarda el token en el almacenamiento local
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Configura el token de autorización para las solicitudes Axios
    axios.get('http://localhost:8000/api/user') // Realiza una solicitud para obtener la información del usuario
      .then(response => {
        const { name, role } = response.data; // Extrae el nombre y el rol del usuario
        setUser({ name, role, token }); // Actualiza el estado con la información del usuario
        localStorage.setItem('role', role); // Guarda el rol del usuario en el almacenamiento local
      })
      .catch(error => {
        console.error("Error al obtener la información del usuario durante el login", error); // Muestra un mensaje de error si la solicitud falla
        alert("Error al iniciar sesión. Por favor, inténtalo de nuevo."); // Muestra un mensaje de error para el usuario
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local en caso de error
        delete axios.defaults.headers.common['Authorization']; // Elimina el encabezado de autorización de Axios
      });
  };

  // Función para manejar el cierre de sesión
  const logout = () => {
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
    localStorage.removeItem('role'); // Elimina el rol del usuario del almacenamiento local
    setUser(null); // Limpia el estado del usuario
    delete axios.defaults.headers.common['Authorization']; // Elimina el encabezado de autorización de Axios
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Renderiza los componentes hijos */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);


