import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import '../../Styles/submenu_HS.css';
import Sidebar from '../../Sidebar';

function Submenuhs() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };

  return (
    <div className="submenuhs-container">
      <Sidebar />

      <main className="submenuhs-content">
        <header className="submenuhs-header">
          <div className="submenuhs-title">
            <h1>ADMINISTRACIÓN</h1>
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <h2>HERMANOS SEGLARES</h2>
          </div>
        </header>

        <div className="submenuhs-search-bar-container">
          <div className="submenuhs-search-bar">
            <input
              type="text"
              placeholder="Buscar hermano seglar..."
              className="submenuhs-search-input"
            />
            <button className="submenuhs-search-button">Buscar</button>
          </div>

          <div className="submenuhs-filter-container">
            <button className="submenuhs-filter-button" onClick={toggleFilters}>
              Filtros
            </button>

            {showFilters && (
              <div className="submenuhs-filter-menu">
                <label>
                  <input
                    type="radio"
                    name="filter"
                    value="name"
                  /> Nombre
                </label>
                <label>
                  <input
                    type="radio"
                    name="filter"
                    value="family"
                  /> Familia Franciscana
                </label>
                <label>
                  <input
                    type="radio"
                    name="filter"
                    value="age"
                  /> Edad
                </label>
              </div>
            )}
          </div>

          {/* Botón de Alta */}
          <div className="submenuhs-alta-container">
            <Link to="/Administracion/Hermanos/Alta">
              <button className="submenuhs-alta-button">
                Alta
              </button>
            </Link>
          </div>
        </div>

        {/* Tabla */}
        <section className="submenuhs-table-container">
          <table className="submenuhs-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre completo</th>
                <th>Dirección</th>
                <th>Familia Franciscana</th>
                <th>Edad</th>
                <th>Fecha de ingreso</th>
                <th>Edición</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>J201</td>
                <td>Rodrigo Rivera Macias</td>
                <td>Petra Marquez No.40</td>
                <td>JOVs</td>
                <td>21</td>
                <td>10/06/2024</td>
                <td>
                  <Link to={`/Administracion/Hermanos/Edicion`}> {/* Aquí la ruta a edicion.js */}
                    <img
                      src="/images/boton_editar.png"
                      alt="Editar"
                      className="submenuhs-edit-button"
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>J202</td>
                <td>Hugo Isaac Rivera Morales</td>
                <td>Petra Marquez No.40</td>
                <td>JOVs</td>
                <td>21</td>
                <td>10/06/2024</td>
                <td>
                  <Link to={`/Administracion/Hermanos/Edicion`}> {/* Aquí la ruta a edicion.js */}
                    <img
                      src="/images/boton_editar.png"
                      alt="Editar"
                      className="submenuhs-edit-button"
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

export default Submenuhs;
