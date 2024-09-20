import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">

      <aside className="sidebar">
        <div className="profile">
          <div className="profile-pic">
            <img src="/images/icono_admin.png" className="icon" alt="Icono de usuario" />
          </div>
          <h3>User Name</h3>
          <p className="role">Ministro</p>
        </div>
        <nav>
        <ul>
          <li><a href="#inicio"><i class="fa-regular fa-house"></i> Inicio</a></li>
          <li><Link to="/Administracion/Hermanos/Historial_Etapa">Administración</Link></li>
          <li><Link to="/Administracion/Hermanos/submenu_HS"> Economía</Link></li>
          <li><a href="#estructura-ofs"><i className="fas fa-sitemap"></i> Estructura OFS</a></li>
          <li><a href="#accesos"><i className="fas fa-key"></i> Accesos</a></li>
          <li><a href="#reportes"><i className="fas fa-file-alt"></i> Reportes</a></li>
        </ul>
        </nav>
        <div className="logout">
          <a href="#cerrar-sesion"><i className="cerrar sesion"></i> Cerrar Sesión</a>
        </div>
      </aside>

      <main className="content">
        <header className="header">
          <h1>INICIO</h1>
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </header>
        <h3>HERMANOS SEGLARES</h3>
        <section className="welcome-container">
          <div className="welcome">
            <h1>PAZ Y BIEN</h1>
            <p>
              Somos una comunidad de laicos comprometidos con vivir el Evangelio 
              según el ejemplo de San Francisco de Asís. Nuestra misión es fomentar 
              la paz, la justicia y el cuidado de la creación, sirviendo a los 
              necesitados y construyendo una fraternidad de amor y servicio.
            </p>
            <p>
              Este sistema integral está diseñado para facilitar la gestión y 
              coordinación de nuestras actividades, asegurando una administración 
              eficiente y transparente.
            </p>
          </div>
          <div className="image-container">
            <img src="/images/San_Francisco.jpg" alt="San Francisco de Asís" className="right-image" />
          </div>
        </section>

        <section className="features">
          <h1>CON EL SISTEMA PODRÁS:</h1>
          <div className="feature-buttons">
            <button>Llevar el control del hermano seglar</button>
            <button>Gestionar las asistencias</button>
            <button>Coordinar los procedimientos</button>
            <button>Administrar los jornales</button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default HomePage;
