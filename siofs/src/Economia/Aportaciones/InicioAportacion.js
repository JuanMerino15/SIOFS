import Sidebar from '../../Sidebar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import '../../Styles/inicio_aportacion.css';


function InicioAportacion() {
  
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };

  return (
    <div className="inicioaportacion-container">
      <Sidebar />

      <main className="inicioaportacion-content">
        <header className="inicioaportacion-header">
          <div className="inicioaportacion-title">
            <h1>ECONOMIA</h1>
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <h2>APORTACIONES FRATERNAS</h2>
          </div>
        </header>

        <div className="inicioaportacion-search-bar-container">
          <div className="inicioaportacion-search-bar">
            <input
              type="text"
              placeholder="Buscar ..."
              className="inicioaportacion-search-input"
            />
            <button className="inicioaportacion-search-button">Buscar</button>
          </div>

          <div className="inicioaportacion-filter-container">
            <button className="inicioaportacion-filter-button" onClick={toggleFilters}>
              Filtros
            </button>

            {showFilters && (
              <div className="inicioaportacion-filter-menu">
                <label>
                  <input
                    type="radio"
                    name="filter"
                    value="date"
                  /> Fecha
                </label>
                <label>
                  <input
                    type="radio"
                    name="filter"
                    value="coordinator"
                  /> Coordinador asignado
                </label>
                <label>
                  <input
                    type="radio"
                    name="filter"
                    value="type"
                  /> Tipo de aportacion
                </label>
                <label>
                  <input
                    type="radio"
                    name="filter"
                    value="month"
                  /> Mes correspondiente
                </label>
              </div>
            )}
          </div>

          {/* Botón de Alta */}
          <div className="inicioaportacion-alta-container">
            <Link to="/Administracion/Hermanos/Alta">
              <button className="inicioaportacion-alta-button">
                Alta Aportacion
              </button>
            </Link>
          </div>
        </div>

        {/* Tabla */}
        <section className="inicioaportacion-table-container">
          <table className="inicioaportacion-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hermano seglar</th>
                <th>Tipo de aportación</th>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Coordinador asignado</th>
                <th>Mes correspondiente</th>
                <th>Edición</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10/06/2024</td>
                <td>Rodrigo Rivera Macias</td>
                <td>O</td>
                <td>Aportacion mensual</td>
                <td>3</td>
                <td>Maria Perez</td>
                <td>Julio</td>
                <td>
                  <Link to={`/Administracion/Hermanos/Edicion`}> {/* Aquí la ruta a edicion.js */}
                    <img
                      src="/images/boton_editar.png"
                      alt="Editar"
                      className="inicioaportacion-edit-button"
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                </td>
              </tr>
              <tr>
              <td>10/06/2024</td>
                <td>Hugo Isaac Rivera Morales</td>
                <td>E</td>
                <td>Aportacion mensual</td>
                <td>3</td>
                <td>Maria Perez</td>
                <td>Julio</td>
                <td>
                  <Link to={`/Administracion/Hermanos/Edicion`}> {/* Aquí la ruta a edicion.js */}
                    <img
                      src="/images/boton_editar.png"
                      alt="Editar"
                      className="inicioaportacion-edit-button"
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default InicioAportacion;
