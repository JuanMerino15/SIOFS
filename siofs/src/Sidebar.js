import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar-container">
      <aside className="sidebar">
        <div className="profile">
          <div className="profile-pic">
            <img src="/images/icono_admin.png" className="iconA" alt="Icono de usuario" />
          </div>
          <h3>User Name</h3>
          <p className="role">Ecónomo</p>
        </div>
        <nav>
  <ul className="slidebar-nav">
    <li>
      <Link to="/">
        <img src="/images/IconoHome.png" alt="Inicio" className="icon" />
        <span>Inicio</span>
      </Link>
    </li>
    <li 
      className={`menu-item ${activeMenu === 'administracion' ? 'active' : ''}`}
      onClick={() => toggleMenu('administracion')}
    >
      <div className="menu-item-header">
        <img src="/images/IconoAdministracion.png" alt="Administración" className="icon" />
        <span>Administración</span>
      </div>
      {activeMenu === 'administracion' && (
        <ul className="submenu">
          <li><Link to="/Administracion/Hermanos/submenuHS">Hermanos Seglares</Link></li>
          <li><Link to="/Administracion/Asistencias">Asistencias</Link></li>
          <li><Link to="/Administracion/Procedimientos">Procedimientos</Link></li>
          <li><Link to="/Administracion/Defunciones">Defunciones</Link></li>
          <li><Link to="/Administracion/Apostolados">Apostolados</Link></li>
        </ul>
      )}
    </li>
    <li 
      className={`menu-item ${activeMenu === 'economia' ? 'active' : ''}`}
      onClick={() => toggleMenu('economia')}
    >
      <div className="menu-item-header">
        <img src="/images/IconoEconomia.png" alt="Economía" className="icon" />
        <span>Economía</span>
      </div>
      {activeMenu === 'economia' && (
        <ul className="submenu">
          <li><Link to="/Economia/Finanzas">Finanzas</Link></li>
          <li><Link to="/Economia/Presupuestos">Presupuestos</Link></li>
          <li><Link to="/Economia/BalanceGeneral">Balance General</Link></li>
        </ul>
      )}
    </li>
    <li>
      <Link to="/EstructuraOFS">
        <img src="/images/IconoEstructuraOFS.png" alt="Estructura OFS" className="icon" />
        <span>Estructura OFS</span>
      </Link>
    </li>
    <li>
      <Link to="/Accesos">
        <img src="/images/IconoAccesos.png" alt="Accesos" className="icon" />
        <span>Accesos</span>
      </Link>
    </li>
    <li>
      <Link to="/Reportes">
        <img src="/images/IconoReportes.png" alt="Reportes" className="icon" />
        <span>Reportes</span>
      </Link>
    </li>
  </ul>
</nav>

        <div className="logout">
          <Link to="/Cerrar-sesion">
            <img src="/images/IconoCerrarSesion.png" alt="cerrar-sesion" className="icon" />
            <span>Cerrar Sesión</span>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
