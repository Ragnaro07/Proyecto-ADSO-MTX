import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.css';

const endpoint = 'http://localhost:8000/api';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${endpoint}/products`);
      setProducts(response.data);  // Asignar response.data en lugar de response
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${endpoint}/product/${id}`);
      getAllProducts(); // Recargar la lista después de eliminar
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <div className='d-grid gap-2 w-75 mx-auto'>
        <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Ingresar producto medición LoRaWAN</Link>
        <Link to="/TecnologiasIot" className='btn btn-primary btn-lg mt-2 mb-2'>Ver tabla LoRaWAN</Link>
      </div>
      <h2>Manage Products</h2>
      <p>Here you can manage products (create, edit, delete).</p>
      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tipo</th>
            <th scope="col">Modelo</th>
            <th scope="col">Precio</th>
            <th scope="col">Indicación</th>
            <th scope="col">Observación</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.tipo}</td>
              <td>{product.modelo}</td>
              <td>{product.precio}</td>
              <td>{product.indicacion}</td>
              <td>{product.observacion}</td>
              <td>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                  <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
