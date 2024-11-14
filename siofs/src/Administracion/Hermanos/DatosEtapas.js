import React from 'react';

import '../../Styles/Datos_Etapas.css';
import Sidebar from '../../Sidebar'; 

const Datos_Etapas = () => {
  return (
    <div className="DatosEtapas">
      <Sidebar />

      <main className="content2">
        <header className="header">
          <div className="title">
            <h1>ADMINISTRACIÓN</h1>
            <p>HERMANOS SEGLARES / HISTORIAL ETAPAS</p>
          </div>
          <div className="logo2">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </div>
        </header>
        <div className="main-content">
          <div className="card">
            <h2>FECHAS</h2>
            <div className="row">
              <div className="col">
                <label htmlFor="imposicion1">Imposición 1a Etapa</label>
                <div className="input-group-DE">
                  <input type="text" id="imposicion1" />
                  <img src="/images/IconoCalendario.png" alt="Calendario" className="calendar-icon" />
                  <img src="/images/check.png" alt="Check" className="check-icon" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="profesionTemporal">Profesión Temporal</label>
                <div className="input-group-DE">
                  <input type="text" id="profesionTemporal" />
                  <img src="/images/IconoCalendario.png" alt="Calendario" className="calendar-icon" />
                  <img src="/images/check.png" alt="Check" className="check-icon" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="profesionPerpetua">Profesión Perpetua</label>
                <div className="input-group-DE">
                  <input type="text" id="profesionPerpetua" />
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="imposicion2">Imposición 2a Etapa</label>
                <div className="input-group-DE">
                  <input type="text" id="imposicion2" />
                  <img src="/images/IconoCalendario.png" alt="Calendario" className="calendar-icon" />
                  <img src="/images/check.png" alt="Check" className="check-icon" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="formacion">Formación como neoprofeso(a)</label>
                <div className="input-group-DE">
                  <input type="text" id="formacion" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="guardar">Guardar</button>
          <button className="cancelar">Cancelar</button>
        </div>
      </main>
    </div>
  );
};

export default Datos_Etapas;
