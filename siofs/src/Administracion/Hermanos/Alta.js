import '../../Styles/Alta.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Select from 'react-select';

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
    codigoPostal: '', // Campo de código postal ahora es lista desplegable
    asentamiento: '',  // Campo de asentamiento ya no es lista desplegable
    municipio: '',
    entidad: '',
    pais: '',
    calle: '',
    numeroInterior: '',
    numeroExterior: '',
    referencias: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name) => (selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos guardados:', formData);
    alert('Los datos han sido guardados correctamente');
    navigate('/administracion/hermanos/submenu_HS');  // Redirige a la página submenu_HS.js
  };

  const handleCancel = () => {
    navigate('/administracion/hermanos/submenu_HS');
  };

  return (
    <div className="AltaPage">
      <Sidebar />
      <main className="content1">
        <header className="header">
          <div className="title">
            <h1>ADMINISTRACIÓN</h1>
            <h2>HERMANOS SEGLARES / ALTA</h2>
          </div>
        </header>
      </main>

      <div className="FormContainerWrapper">
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

        <main className="DireccionFormContainer">
          <h2>DIRECCIÓN</h2>
          <form className="DireccionFormGrid">
            <div className="AltaFormField">
              <label>Código Postal:</label>
              <Select
                name="codigoPostal"
                value={{ label: formData.codigoPostal, value: formData.codigoPostal }}
                onChange={handleSelectChange('codigoPostal')}
                options={[
                  { value: '1000', label: '1000' },
                  { value: '2000', label: '2000' },
                  { value: '3000', label: '3000' },
                  // Agrega más códigos postales según sea necesario
                ]}
                placeholder="Selecciona un código postal"
              />
            </div>

            <div className="AltaFormField">
              <label>Asentamiento:</label>
              <input
                type="text"
                name="asentamiento"
                value={formData.asentamiento}
                onChange={handleChange}
              />
            </div>

            <div className="AltaFormField">
              <label>Municipio:</label>
              <input
                type="text"
                name="municipio"
                value={formData.municipio}
                onChange={handleChange}
              />
            </div>

            <div className="AltaFormField">
              <label>Entidad:</label>
              <input
                type="text"
                name="entidad"
                value={formData.entidad}
                onChange={handleChange}
              />
            </div>

            <div className="AltaFormField">
              <label>País:</label>
              <input
                type="text"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
              />
            </div>

            <div className="AltaFormField">
              <label>Calle:</label>
              <input
                type="text"
                name="calle"
                value={formData.calle}
                onChange={handleChange}
              />
            </div>

            <div className="AltaFormField">
              <label>Número Interior:</label>
              <input
                type="text"
                name="numeroInterior"
                value={formData.numeroInterior}
                onChange={handleChange}
              />
            </div>

            <div className="AltaFormField">
              <label>Número Exterior:</label>
              <input
                type="text"
                name="numeroExterior"
                value={formData.numeroExterior}
                onChange={handleChange}
              />
            </div>

            <div className="AltaFormField">
              <label>Referencias:</label>
              <textarea
                name="referencias"
                value={formData.referencias}
                onChange={handleChange}
              />
            </div>
          </form>
        </main>
      </div>

      <div className="AltaSubmitButtonContainer">
        <button type="button" className="AltaSubmitButton" onClick={handleSubmit}>
          Guardar
        </button>
        <button type="button" className="AltaCancelButton" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Alta;

