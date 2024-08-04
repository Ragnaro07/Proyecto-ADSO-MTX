import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de importar el archivo de configuración de Axios

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/register', data)
            .then(response => {
                // Manejar la respuesta exitosa
                console.log('Registro exitoso', response.data);
                // Redirigir al usuario, mostrar un mensaje, etc.
            })
            .catch(error => {
                if (error.response) {
                    // Manejar los errores de respuesta del servidor
                    console.error('Error en el registro', error.response.data);
                    setErrors(error.response.data.errors || []);
                } else if (error.request) {
                    // Manejar errores de la solicitud, pero sin respuesta del servidor
                    console.error('Error en el registro', error.request);
                } else {
                    // Manejar otros errores
                    console.error('Error en el registro', error.message);
                }
            });
    };

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p>{errors.name[0]}</p>}
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p>{errors.email[0]}</p>}
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p>{errors.password[0]}</p>}
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={handleChange}
                        required
                    />
                    {errors.password_confirmation && <p>{errors.password_confirmation[0]}</p>}
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
