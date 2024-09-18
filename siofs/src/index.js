import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HistorialEtapas from './Administracion/Hermanos/Historial_Etapa';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Administracion/Hermanos/Historial_Etapa" 
 element={<HistorialEtapas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();