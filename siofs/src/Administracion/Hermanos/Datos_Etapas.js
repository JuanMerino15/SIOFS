import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Datos_Etapas.css';

const Datos_Etapas = () => {
  return (
    <div className="DatosEtapas">
      
      <aside className="sidebar2">
        <div className="profile2">
          <div className="profile-pic2">
            <img src="/images/icono_admin.png" className="iconA2" alt="Icono de usuario" />
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
        <Link to="/Cerrar-sesion">
                <img src="/images/IconoCerrarSesion.png" alt="cerrar-sesion" className="icon" /> Cerrar Sesión
              </Link>
        </div>
      </aside>

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
                <div className="input-group">
  <input type="text" id="imposicion2" />
  <img src="/images/IconoCalendario.png" alt="Calendario" className="calendar-icon" />
  <img src="/images/check.png" alt="Check" className="check-icon" />
</div>
              </div>
              <div className="col">
                <label htmlFor="profesionTemporal">Profesión Temporal</label>
                <div className="input-group">
                    <input type="text" id="profesionPerpetua" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="profesionPerpetua">Profesión Perpetua</label>
                <div className="input-group">
                  <input type="text" id="profesionPerpetua" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="imposicion2">Imposición 2a Etapa</label>
                <div className="input-group">
                  <input type="text" id="imposicion2" />
                  <i className="fas fa-calendar-alt"></i>
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
              <div className="col">
                <label htmlFor="formacion">Formación como neoprofeso(a)</label>
                <div className="input-group">
                  <input type="text" id="formacion" />
                  <i className="fas fa-calendar-alt"></i>
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="guardar">GUARDAR</button>
          <button className="cancelar">CANCELAR</button>
        </div>
      </main>
    </div>
  );
};

export default Datos_Etapas;
