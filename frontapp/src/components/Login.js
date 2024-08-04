import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Configurar Axios globalmente
axios.defaults.baseURL = 'http://localhost:8000/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Sending login request...');

    try {
      const response = await axios.post('/login', {
        email,
        password,
      });

      console.log('Login response:', response);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        console.log('Token saved:', localStorage.getItem('token'));
        // Configurar Axios para usar el token en futuras solicitudes
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        console.log('Navigating to home');
        navigate('/');
      } else {
        setError('Unexpected response from server');
      }
    } catch (error) {
      console.error('Error logging in:', error);

      if (error.response) {

        console.log('Error response:', error.response);

        setError(error.response.data.message || 'Login failed. Please check your credentials.');
      } else if (error.request) {

        console.log('Error request:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        setError('Error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
