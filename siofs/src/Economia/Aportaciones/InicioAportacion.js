import React, { useState } from "react";
import Sidebar from "../../Sidebar";


function InicioAportacion() {
    const [showFilters, setShowFilters] = useState(false); 


const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
};

    return (
        <div className="InicioAportacion">
            <Sidebar />

            <main className="content1">
                <header className="header">
                    <div className="title">
                        <h1>ECONOMÍA</h1>
                        <h2>APORTACIONES FRATERNAS</h2>
                    </div>
                </header>

                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Buscar hermano seglar..."
                        className="seach-input"
                    />
                    <button className="search-button">Buscar</button>
                </div>
                <div className="filter-container">
                    <button className="filter-button" onClick={toggleFilters}>
                        Filtros
                    </button>

                    {showFilters &&(
                        <div className="filter-menu">
                        <label>
                          <input 
                            type="radio" 
                            name="filter" 
                            value="fecha" 
                          /> Fecha
                        </label>
                        <label>
                          <input 
                            type="radio" 
                            name="filter" 
                            value="coodinador_asignado" 
                          /> Coordinador asignado
                        </label>
                        <label>
                          <input 
                            type="radio" 
                            name="filter" 
                            value="tipo_aportacion" 
                          /> Tipo de aportación
                        </label>
                        <label>
                          <input 
                            type="radio" 
                            name="filter" 
                            value="mes_correspondiente" 
                          /> Mes correspondiente
                        </label>
                        <label>
                          <input 
                            type="radio" 
                            name="filter" 
                            value="aportación_ordinaria" 
                          /> Aportación ordinaria
                        </label>
                        <label>
                          <input 
                            type="radio" 
                            name="filter" 
                            value="aportación_extraordinaria" 
                          /> Aportación extraordinaria
                        </label>
                      </div>
                    )}

                    /*Botón Alta*/
                    <div className="alta-container">
                        <button className="alta-button">
                            Alta
                        </button>
                    </div>
                </div>

                /*Tabla*/
                <section className="TableContainer">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                                <th>Fecha</th>
                                <th>Hermano seglar</th>
                                <th>Tipo de aportación</th>
                                <th>Concepto</th>
                                <th>Monto</th>
                                <th>Coordinador asignado</th>
                                <th>Mes correspondiente</th>
                                <th>  </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10/06/2024</td>
                            <td>Alan David Rivera Cadena</td>
                            <td>Ordinaria</td>
                            <td>Aportación Mensual</td>
                            <td>$15</td>
                            <td>Francisco Pérez</td>
                            <td>Julio</td>
                            <td>
                                <img
                                    src="/images/boton_editar.png"
                                    alt="Editar"
                                    className="edit_button"
                                    style={{ cursor: 'pointer' }}
                                    onClick={ () => alert('Editar J201')}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                </section>
            </main>
        </div>
    );
}

export default InicioAportacion;