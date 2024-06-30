import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.css';

const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {
    const [tipo, setTipo] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState(0);
    const [indicacion, setIndicacion] = useState('');
    const [observacion, setObservacion] = useState('');

    const navigate = useNavigate();
    const {id}= useParams();

    const update = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${endpoint}${id}`, {
                tipo: tipo, modelo: modelo, precio: precio, indicacion: indicacion, observacion: observacion
             });
             navigate ('/tecnologiasIot');
            } catch (error) {
                console.error("Error updating product:", error);
            }
    };


    useEffect(() =>{
        const getProductById = async () => {
            try {    
                const response = await axios.get(`${endpoint}${id}`);
                setTipo(response.data.tipo);
                setModelo(response.data.modelo);
                setPrecio(response.data.precio);
                setIndicacion(response.data.indicacion);
                setObservacion(response.data.observacion);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        getProductById();
    }, [id]);

    return (
        <div>
            <h3>Edit product</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Tipo</label>
                    <input
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        type='text'
                        className='form-control'
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
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>

        </div>
    );
};
export default EditProduct;