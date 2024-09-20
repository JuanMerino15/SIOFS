import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HistorialEtapas from './Administracion/Hermanos/Historial_Etapa';
import reportWebVitals from './reportWebVitals';
import Datos_Etapas from './Administracion/Hermanos/Datos_Etapas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Administracion/Hermanos/Historial_Etapa" 
 element={<HistorialEtapas />} />
        <Route path="/Administracion/Hermanos/Datos_Etapas" 
 element={<Datos_Etapas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();