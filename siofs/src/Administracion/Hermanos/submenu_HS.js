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
    <div className="Submenuhs">
      <Sidebar />

      <main className="content1">
        <header className="header">
          <div className="title">
            <h1>ADMINISTRACIÓN</h1>
            <h2>HERMANOS SEGLARES</h2>
          </div>
        </header>

        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar hermano seglar..."
              className="search-input"
            />
            <button className="search-button">Buscar</button>
          </div>

          <div className="filter-container">
            <button className="filter-button" onClick={toggleFilters}>
              Filtros
            </button>

            {showFilters && (
              <div className="filter-menu">
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
          <div className="alta-container">
            <Link to="/Administracion/Hermanos/Alta"> {/* Aquí el enlace a /alta */}
              <button className="alta-button">
                Alta
              </button>
            </Link>
          </div>
        </div>

        {/* Tabla */}
        <section className="TableContainer">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre completo</th>
                <th>Dirección</th>
                <th>Familia Franciscana</th>
                <th>Edad</th>
                <th>Fecha de ingreso</th>
                <th>Edicion</th>
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
                  <img
                    src="/images/boton_editar.png"
                    alt="Editar"
                    className="edit-button"
                    style={{ cursor: 'pointer' }}
                    onClick={() => alert('Editar J201')}
                  />
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
                  <img
                    src="/images/boton_editar.png"
                    alt="Editar"
                    className="edit-button"
                    style={{ cursor: 'pointer' }}
                    onClick={() => alert('Editar J202')}
                  />
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
