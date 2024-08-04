import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './scss/custom.css';
import './assets/css/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContent = () => {
  const { user } = useAuth();

  return (
    <Router>
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
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;
