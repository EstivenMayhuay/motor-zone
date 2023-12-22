import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Servicios } from './pages/Servicios/Servicios.jsx';
import { QuienesSomos } from './pages/QuienesSomos/QuienesSomos.jsx';
import { NuestrosClientes } from './pages/NuestrosClientes/NuestrosClientes.jsx'
import { LineaDeRepuestos } from './pages/LineaDeRepuestos/LineaDeRepuestos.jsx';
import { Contactanos } from './pages/Contactanos/Contactanos.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <QuienesSomos />
  },
  {
    path: '/promociones',
    element: <Home />
  },
  {
    path: '/nuestros-clientes',
    element: <NuestrosClientes />
  },
  {
    path: '/nuestros-servicios',
    element: <Servicios />
  },
  {
    path: '/linea-de-repuestos',
    element: <LineaDeRepuestos />
  },
  {
    path: '/contactanos',
    element: <Contactanos />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
