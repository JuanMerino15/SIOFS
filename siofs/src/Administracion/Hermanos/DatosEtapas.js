import React, { useState } from 'react';
import '../../Styles/Datos_Etapas.css';
import Sidebar from '../../Sidebar';

const Datos_Etapas = () => {
  const [startDateTemporal, setStartDateTemporal] = useState(null);
  const [startDatePerpetua, setStartDatePerpetua] = useState(null);
  const [startDateFormacion, setStartDateFormacion] = useState(null);

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
                <label htmlFor="profesionTemporal">Profesión Temporal</label>
                <div className="input-group-DE">
                  <input
                    type="date"
                    value={startDateTemporal || ""}
                    onChange={(e) => setStartDateTemporal(e.target.value)}
                    id="profesionTemporal"
                    className="form-control"
                    placeholder="Selecciona una fecha"
                  />
                  <img src="/images/IconoCalendario.png" alt="Calendario" className="calendar-icon" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="profesionPerpetua">Profesión Perpetua</label>
                <div className="input-group-DE">
                  <input
                    type="date"
                    value={startDatePerpetua || ""}
                    onChange={(e) => setStartDatePerpetua(e.target.value)}
                    id="profesionPerpetua"
                    className="form-control"
                    placeholder="Selecciona una fecha"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="formacion">Formación como neoprofeso(a)</label>
                <div className="input-group-DE">
                  <input
                    type="date"
                    value={startDateFormacion || ""}
                    onChange={(e) => setStartDateFormacion(e.target.value)}
                    id="formacion"
                    className="form-control"
                    placeholder="Selecciona una fecha"
                  />
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
