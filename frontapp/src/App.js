// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import Tecnologias from './components/Tecnologias';
import SmartMetering from './components/SmartMetering';
import Galeria from './components/Galeria';
import Simulador from './components/Simulador';
import Plataforma from './components/Plataforma';
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import ProductsTable from './components/ProductsTable';
import Editar from './components/EditTable';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './scss/custom.css';
import './assets/css/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Router>
          <div>
            <nav>
              <ul className="dropdown-menu" aria-labelledby="galeriaDropdown">
                <li><Link className="dropdown-item" to="/galeria#seccion1">Medición analoga</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion2">Medición digital</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion3">Medición ultrasonica</Link></li>
                <li><Link className="dropdown-item" to="/galeria#seccion4">Medición Prepago</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/tecnologiasIot" element={<Tecnologias />} />
              <Route path="/smartMetering" element={<SmartMetering />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/simulador" element={<Simulador />} />
              <Route path="/plataforma" element={<Plataforma />} />
              <Route path="/editar" element={<Editar />} />
              <Route path="/products" element={<ShowProducts />} />
              <Route path="/products-table" element={<ProductsTable />} />
              <Route path="/create" element={<CreateProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute roles={['admin']}>
                    <Admin />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
