import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <aside className="sidebar">
        <div className="profile">
          <div className="profile-pic"></div>
          <h3>User Name</h3>
          <p className="role">Ministro</p>
        </div>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#administracion">Administración</a></li>
            <li><a href="#economia">Economía</a></li>
            <li><a href="#estructura-ofs">Estructura OFS</a></li>
            <li><a href="#accesos">Accesos</a></li>
            <li><a href="#reportes">Reportes</a></li>
          </ul>
        </nav>
        <div className="logout">
          <a href="#cerrar-sesion">Cerrar Sesión</a>
        </div>
      </aside>

      <main className="content">
      <h1>INICIO</h1>
      <h3>HERMANOS SEGLARES</h3>
        <section className="welcome-container">
          
          <div className="welcome">
            <h1>Paz y Bien</h1>
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
          <h2>Con el sistema podrás:</h2>
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

export default App;
