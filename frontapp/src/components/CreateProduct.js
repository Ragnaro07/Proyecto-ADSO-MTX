import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.css';

const endpoint = 'http://localhost:8000/api/product';

const CreateProduct = () => {
    const [tipo, setTipo] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState(0);
    const [indicacion, setIndicacion] = useState('');
    const [observacion, setObservacion] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        try {
            await axios.post(endpoint, {
                tipo: tipo,
                modelo: modelo,
                precio: precio,
                indicacion: indicacion,
                observacion: observacion
            });
            navigate('/tecnologiasIot');
        } catch (error) {
            console.error('Error al crear producto:', error);
        }
    };

    const goBack = () => {
        navigate(-1); // Redirige a la página anterior
    };

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className='form-label custom-label' htmlFor='tipo'>Tipo</label>
                    <input
                        id='tipo'
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        type='text'
                        className='form-control custom-input'
                        placeholder='Ingrese el tipo de producto'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Modelo</label>
                    <input
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Indicación</label>
                    <input
                        value={indicacion}
                        onChange={(e) => setIndicacion(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Observación</label>
                    <input
                        value={observacion}
                        onChange={(e) => setObservacion(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='d-flex justify-content-between'>
                    <button type='submit' className='btn btn-primary'>Store</button>
                    <button type='button' className='btn btn-secondary' onClick={goBack}>Back</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;
