import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HistorialEtapas from './Administracion/Hermanos/HistorialEtapa';
import Submenuhs from './Administracion/Hermanos/submenuHS';
import reportWebVitals from './reportWebVitals';
import DatosEtapas from './Administracion/Hermanos/DatosEtapas';
import Alta from './Administracion/Hermanos/Alta';
import Edicion from './Administracion/Hermanos/Edicion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Administracion/Hermanos/HistorialEtapa" element={<HistorialEtapas />} />
        <Route path="/Administracion/Hermanos/submenuHS" element={<Submenuhs />} />
        <Route path="/Administracion/Hermanos/DatosEtapas" element={<DatosEtapas />} />
        <Route path="/Administracion/Hermanos/Alta" element={<Alta />} />
        <Route path="/Administracion/Hermanos/Edicion" element={<Edicion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();


reportWebVitals();
