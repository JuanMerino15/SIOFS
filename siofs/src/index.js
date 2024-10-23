import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HistorialEtapas from './Administracion/Hermanos/Historial_Etapa';
import Submenuhs from './Administracion/Hermanos/submenu_HS';
import reportWebVitals from './reportWebVitals';
import Datos_Etapas from './Administracion/Hermanos/Datos_Etapas';
import Alta from './Administracion/Hermanos/Alta';
import Edicion from './Administracion/Hermanos/Edicion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Administracion/Hermanos/Historial_Etapa" element={<HistorialEtapas />} />
        <Route path="/Administracion/Hermanos/submenu_HS" element={<Submenuhs />} />
        <Route path="/Administracion/Hermanos/Datos_Etapas" element={<Datos_Etapas />} />
        <Route path="/Administracion/Hermanos/Alta" element={<Alta />} />
        <Route path="/Administracion/Hermanos/Edicion" element={<Edicion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

