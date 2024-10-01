// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // Si tienes estilos específicos

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="profile-pic">
          <img src="/images/icono_admin.png" className="iconA" alt="Icono de usuario" />
        </div>
        <h3>User Name</h3>
        <p className="role">Ecónomo</p>
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
            <Link to="/Administracion/Hermanos/submenu_HS">
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
        <Link to="/Cerrar-sesion">
          <img src="/images/IconoCerrarSesion.png" alt="cerrar-sesion" className="icon" /> Cerrar Sesión
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
