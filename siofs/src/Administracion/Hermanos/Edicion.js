import '../../Styles/Edicion.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Select from 'react-select';

function Edicion() {
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
    navigate('/administracion/hermanos/submenuHS');  // Redirige a la página submenu_HS.js
  };

  const handleCancel = () => {
    navigate('/administracion/hermanos/submenuHS');
  };

  const handleHistorial = () => {
    navigate('/administracion/hermanos/HistorialEtapa');  // Redirige a la página Historial_Etapa.js
  };

  return (
    <div className="EdicionHSPage">
      <Sidebar />
      <main className="content1">
        <header className="header">
          <div className="title">
            <h1>ADMINISTRACIÓN</h1>
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <h2>HERMANOS SEGLARES / EDICION</h2>
          </div>
        </header>
      </main>

      <div className="FormContainerWrapper">
        <main className="EdicionHSFormContainer">
          <h2>DATOS PERSONALES</h2>
          <form onSubmit={handleSubmit} className="EdicionHSFormGrid">
            <div className="EdicionHSFormField">
              <label>Nombre(s):</label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Estado Civil:</label>
              <input
                type="text"
                name="estadoCivil"
                value={formData.estadoCivil}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Apellido Paterno:</label>
              <input
                type="text"
                name="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Apellido Materno:</label>
              <input
                type="text"
                name="apellidoMaterno"
                value={formData.apellidoMaterno}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Fecha de Nacimiento:</label>
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Lugar de Nacimiento:</label>
              <input
                type="text"
                name="lugarNacimiento"
                value={formData.lugarNacimiento}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Número de Celular:</label>
              <input
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Número de Casa:</label>
              <input
                type="text"
                name="casa"
                value={formData.casa}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
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

        <main className="DireccionEdicHSContainer">
          <h2>DIRECCIÓN</h2>
          <form className="DireccionEdicHSGrid">
            <div className="EdicionHSFormField">
              <label>Código Postal:</label>
              <Select
                name="codigoPostal"
                value={{ label: formData.codigoPostal, value: formData.codigoPostal }}
                onChange={handleSelectChange('codigoPostal')}
                options={[
                { value: '1000', label: '1000' },
                { value: '2000', label: '2000' },
                { value: '3000', label: '3000' },
                ]}
                placeholder="Selecciona un código postal"
                styles={{
                control: (provided) => ({
                 ...provided,
                width: '95%',           // Ajusta la altura para que sea similar
                borderRadius: '54px',    // Misma medida que los otros campos
                border: '1px solid #ccc',
                padding: '0px',       // Reduce el padding para que no se vea tan alto
                backgroundColor: '#FFFEFB',
                }),
                valueContainer: (provided) => ({
                 ...provided,
          padding: '0',            // Ajusta el padding interno para mantener consistencia
    })
    
  }}
/>
            </div>

            <div className="EdicionHSFormField">
              <label>Asentamiento:</label>
              <input
                type="text"
                name="asentamiento"
                value={formData.asentamiento}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Municipio:</label>
              <input
                type="text"
                name="municipio"
                value={formData.municipio}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Entidad:</label>
              <input
                type="text"
                name="entidad"
                value={formData.entidad}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>País:</label>
              <input
                type="text"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Calle:</label>
              <input
                type="text"
                name="calle"
                value={formData.calle}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Número Interior:</label>
              <input
                type="text"
                name="numeroInterior"
                value={formData.numeroInterior}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Número Exterior:</label>
              <input
                type="text"
                name="numeroExterior"
                value={formData.numeroExterior}
                onChange={handleChange}
              />
            </div>
            <div className="EdicionHSFormField full-width">
            <label>Referencias:</label>
            <textarea
              name="referencias"
              value={formData.referencias}
              onChange={handleChange}
            />
            </div>
          </form>
        </main>
        <main className="ApostoladoEdicHSContainer">
          <h2>APOSTOLADO</h2>
          <form className="ApostoladoEdicHSGrid">
            <div className="EdicionHSFormField">
              <label>Tipo de Apostolado:</label>
              <input
                type="text"
                name="tipoApostolado"
                value={formData.tipoApostolado}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Nombre de Apostolado:</label>
              <input
                type="text"
                name="nombreApostolado"
                value={formData.nombreApostolado}
                onChange={handleChange}
              />
            </div>

            <div className="EdicionHSFormField">
              <label>Fecha de Inicio del Apostolado:</label>
              <input
                type="date"
                name="fechaInicioApostolado"
                value={formData.fechaInicioApostolado}
                onChange={handleChange}
              />
            </div>
          </form>
        </main>
      </div>

      <div className="EdicionHSButtonContainer">
        <button type="button" className="HistorialButton" onClick={handleHistorial}>
          Historial
        </button>
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

export default Edicion;