import axios from 'axios';

// Configura la URL base de la API
axios.defaults.baseURL = 'http://tu-dominio-api.com/api';

// Configura el interceptor para agregar el token de autenticación
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Manejo de errores globales
axios.interceptors.response.use(response => response, error => {
    // Maneja errores globalmente si es necesario
    return Promise.reject(error);
});

export default axios;
