import React from 'react';
import { useAuth } from '../context/AuthContext';

const CurrentUser = () => {
    const { user } = useAuth();

    if (!user) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <p>Usuario actual: <strong>{user.name}</strong></p>
            <p>Rol: <strong>{user.role}</strong></p>
        </div>
    );
};

export default CurrentUser;
