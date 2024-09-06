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
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { AuthProvider } from './context/AuthContext';
//import PrivateRoute from './components/PrivateRoute'; // Eliminado para remover control de roles
import './scss/custom.css';
import './assets/css/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContent = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas accesibles para todos los usuarios */}
        <Route path="/" element={<Home />} />
        <Route path="/tecnologiasIot" element={<Tecnologias />} />
        <Route path="/smartMetering" element={<SmartMetering />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route path="/products-table" element={<ProductsTable />} />

        {/* Rutas accesibles para todos los usuarios sin protección */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users/create" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserForm />} />

        <Route path="/create" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="/users" element={<UserList />} />


        {/* Ruta para el login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;
