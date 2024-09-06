import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style1.css';
import loginVideo from '../assets/video/MedIntel_login.mp4';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores anteriores

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      const { token, role } = response.data; 
      
      console.log('Token saved:', token);

      login(token, role);
      navigate('/');
    } catch (error) {
      // Si el error es una respuesta de 401 (Unauthorized), significa que las credenciales son incorrectas
      if (error.response && error.response.status === 401) {
        setError('Credenciales incorrectas. Por favor, intenta nuevamente.');
      } else {
        // Si ocurre otro tipo de error
        setError('Ocurrió un error al intentar iniciar sesión. Por favor, intenta nuevamente más tarde.');
      }
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <video className="video-background" autoPlay loop muted>
        <source src={loginVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>

        {/* Mostrar mensaje de error si existe */}
        {error && <div className="alert alert-danger">{error}</div>}

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
