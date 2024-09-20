import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/submenu_HS.css';

function Submenuhs() {
  const [showFilters, setShowFilters] = useState(false);


  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };

  return (
    <div className="Submenuhs">
      <aside className="sidebar">
        <div className="profile">
          <div className="profile-pic">
            <img src="/images/icono_admin.png" className="icon" alt="Icono de usuario" />
          </div>
          <h3>User Name</h3>
          <p className="role">Secretario</p>
        </div>
        <nav>
          <ul>
            <li><a href="#inicio"><i className="fa-regular fa-house"></i> Inicio</a></li>
            <li><Link to="/Administracion/Hermanos/Historial_Etapa">Administración</Link></li>
            <li><Link to="/Administracion/Hermanos/submenu_HS"> Economía</Link></li>
            <li><a href="#estructura-ofs"><i className="fas fa-sitemap"></i> Estructura OFS</a></li>
            <li><a href="#accesos"><i className="fas fa-key"></i> Accesos</a></li>
            <li><a href="#reportes"><i className="fas fa-file-alt"></i> Reportes</a></li>
          </ul>
        </nav>
        <div className="logout">
          <a href="#cerrar-sesion"><i className="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
        </div>
      </aside>

      <main className="content">
        <header className="header">
          <h1>Administración</h1>
          <h2>Hermanos Seglares</h2>

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
              <button className="alta-button">
                Alta
              </button>
            </div>
          </div>
        </header>

        <section className="table-container">
          <table className='table'>
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

