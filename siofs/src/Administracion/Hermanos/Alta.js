import '../../Styles/Alta.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';

function Alta() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombres: '',
    estadoCivil: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    celular: '',
    casa: '',
    familiaFranciscana: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    navigate('/');
  };

  return (
    <div className="AltaPage">
      <Sidebar />
      <main className="AltaFormContainer">
        <h2>DATOS PERSONALES</h2>
        <form onSubmit={handleSubmit} className="AltaFormGrid">
          <div className="AltaFormField">
            <label>Nombre(s):</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Estado Civil:</label>
            <input
              type="text"
              name="estadoCivil"
              value={formData.estadoCivil}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Apellido Paterno:</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Apellido Materno:</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Lugar de Nacimiento:</label>
            <input
              type="text"
              name="lugarNacimiento"
              value={formData.lugarNacimiento}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Número de Celular:</label>
            <input
              type="text"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Número de Casa:</label>
            <input
              type="text"
              name="casa"
              value={formData.casa}
              onChange={handleChange}
            />
          </div>

          <div className="AltaFormField">
            <label>Familia Franciscana:</label>
            <input
              type="text"
              name="familiaFranciscana"
              value={formData.familiaFranciscana}
              onChange={handleChange}
            />
          </div>
        </form>
      </main>
      <div className="AltaSubmitButtonContainer">
        <button type="submit" className="AltaSubmitButton">Enviar</button>
      </div>
    </div>
  );
}

export default Alta;

