import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError('Error al cargar la lista de usuarios.');
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      axios.delete(`/api/users/${id}`)
        .then(response => {
          // Refrescar la lista después de eliminar
          fetchUsers();
        })
        .catch(error => {
          console.error('Error deleting user:', error);
          setError('Error al eliminar el usuario.');
        });
    }
  };

  const handleBack = () => {
    navigate('/admin'); // O cualquier otra ruta a la que desees volver
  };

  return (
    <div className="container">
      <h1>Lista de Usuarios</h1>
      
      {/* Botón de Volver */}
      <button onClick={handleBack} className="btn btn-secondary mb-3">
        Volver
      </button>
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/edit-user/${user.id}`} className="btn btn-warning btn-sm me-2">Editar</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
