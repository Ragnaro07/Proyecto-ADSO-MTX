import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'user'
  });
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      fetchUser();
    }
  }, [id]);

  const fetchUser = () => {
    axios.get(`/api/users/${id}`)
      .then(response => {
        setFormData({
          name: response.data.name || '',
          email: response.data.email || '',
          password: '',
          password_confirmation: '',
          role: response.data.role || 'user',
        });
      })
      .catch(error => {
        console.error('Error loading user data:', error);
        setErrorMessage('Error al cargar los datos del usuario.');
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiEndpoint = isEditing ? `/api/users/${id}` : '/api/users';
    const requestMethod = isEditing ? axios.put : axios.post;

    requestMethod(apiEndpoint, formData)
      .then(response => {
        navigate('/admin');
      })
      .catch(error => {
        console.error('Error saving user:', error);
        setErrors(error.response?.data?.errors || {});
        setErrorMessage('Ocurrió un error al guardar el usuario.');
      });
  };

  const handleBack = () => {
    navigate('/admin');
  };

  return (
    <div className="container">
      <h1>{isEditing ? 'Editar Usuario' : 'Crear Usuario'}</h1>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name[0]}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">{errors.password[0]}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password_confirmation">Confirmar Contraseña</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleInputChange}
            className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
          />
          {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation[0]}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="role">Rol</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className={`form-control ${errors.role ? 'is-invalid' : ''}`}
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
          {errors.role && <div className="invalid-feedback">{errors.role[0]}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Actualizar Usuario' : 'Crear Usuario'}
        </button>
        
        <button type="button" className="btn btn-secondary ms-2" onClick={handleBack}>
          Volver
        </button>
      </form>
    </div>
  );
};

export default UserForm;
