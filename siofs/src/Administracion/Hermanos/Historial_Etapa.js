import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Historial_Etapa.css';

function HistorialEtapas() {
  return (
    <div className="HistorialEtapas">

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
          <h2>Hermanos Seglares / Historial Etapa Formativa</h2>
        </header>
        <section className="table-container">
          <table className='table'>
            <thead>
              <tr>
                <th>Hermano Seglar</th>
                <th>Etapa Formativa</th>
                <th>Activo</th>
                <th>Fecha Inicio</th>
                <th>Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rodrigo Rivera Macías</td>
                <td>Imposición Primera Etapa</td>
                <td>No</td>
                <td>10/06/2024</td>
                <td>10/06/2024</td>
              </tr>
              <tr>
                <td>Rodrigo Rivera Macías</td>
                <td>Imposición Segunda Etapa</td>
                <td>Sí</td>
                <td>10/06/2024</td>
                <td>10/06/2024</td>
              </tr>
            </tbody>
          </table>
          <button className="capture-button">Capturar Etapa</button>
        </section>
      </main>

    </div>
  );
}

export default HistorialEtapas;
