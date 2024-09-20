import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/Historial_Etapa.css';

function HistorialEtapas() {
  const navigate = useNavigate(); 
  const handleButtonClick = () => {
    navigate('/Administracion/Hermanos/Datos_Etapas');
  };
  return (
    <div className="HistorialEtapas">

      <aside className="sidebar1">
        <div className="profile">
          <div className="profile-pic">
            <img src="/images/icono_admin.png" className="iconA1" alt="Icono de usuario" />
          </div>
          <h3>User Name</h3>
          <p className="role">Secretario</p>
        </div>
        <nav>



        <ul>
   <li>
      <Link to="/">
      <img src="/images/IconoHome.png" alt="Inicio" className="icon" /> Inicio
      </Link>
    </li>
   <li>
      <Link to="/Administracion/Hermanos/Historial_Etapa">
      <img src="/images/IconoAdministracion.png" alt="Administración" className="icon" /> Administración
     </Link>
  </li>
  <li>
      <Link to="/Economia">
      <img src="/images/IconoEconomia.png" alt="Economía" className="icon" /> Economía
     </Link>
  </li>
  <li>
     <Link to="/EstructuraOFS">
      <img src="/images/IconoEstructuraOFS.png" alt="Estructura OFS" className="icon" /> Estructura OFS
      </Link>
   </li>
  <li>
      <Link to="/Accesos">
      <img src="/images/IconoAccesos.png" alt="Accesos" className="icon" /> Accesos
      </Link>
  </li>
  <li>
    <Link to="/Reportes">
      <img src="/images/IconoReportes.png" alt="Reportes" className="icon" /> Reportes
    </Link>
  </li>
</ul>
        </nav>
        <div className="logout">
          <a href="#cerrar-sesion"><i className="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
        </div>
      </aside>

      <main className="content1">
        <header className="header">
        <div className="title">
            <h1>ADMINISTRACIÓN</h1>
            <p>HERMANOS SEGLARES / HISTORIAL ETAPA FORMATIVA</p>
          </div>
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
          <button className="capture-button" onClick={handleButtonClick}>Capturar Etapa</button>
        </section>
      </main>

    </div>
  );
}

export default HistorialEtapas;
