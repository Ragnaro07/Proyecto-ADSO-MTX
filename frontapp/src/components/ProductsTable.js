import React, { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  return (
    <div>
      <h2>Products List</h2>
      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tipo</th>
            <th scope="col">Modelo</th>
            <th scope="col">Precio</th>
            <th scope="col">Indicación</th>
            <th scope="col">Observación</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
