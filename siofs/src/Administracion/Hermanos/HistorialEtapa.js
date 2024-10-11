import React from 'react';
import { useNavigate } from 'react-router-dom';/*Se borro Link*/
import '../../Styles/Historial_Etapa.css';
import Sidebar from '../../Sidebar'; 
function HistorialEtapas() {
  const navigate = useNavigate(); 
  const handleButtonClick = () => {
    navigate('/Administracion/Hermanos/DatosEtapas');
  };
  return (
    <div className="HistorialEtapas">


<Sidebar />
      

      <main className="content1">
        <header className="header">
        <div className="title">
            <h1>ADMINISTRACIÓN</h1>
            <h2>HERMANOS SEGLARES / HISTORIAL ETAPA FORMATIVA</h2>
          </div>
        </header>
        <section className="TableContainer">
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