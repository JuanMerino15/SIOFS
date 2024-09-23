import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Alta() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        fechaNacimiento: '',
        lugarNacimiento: '',
        numeroCelular: '',
        numeroCasa: '',
        estadoCivil: '',
        familiaFranciscana: '',
        codigoPostal: '',
        asentamiento: '',
        municipio: '',
        entidad: '',
        pais: '',
        calle: '',
        numeroInterior: '',
        numeroExterior: '',
        referencias: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form data submitted: ", formData);
    };

    return (
        <div className="container mx-auto p-6">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4">
                <h1 className="text-2xl font-bold text-center text-[var(--primary-100)]">Datos Personales</h1>
                
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        name="nombre"
                        placeholder="Nombre(s)"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <select
                        name="estadoCivil"
                        value={formData.estadoCivil}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="" disabled>Estado Civil</option>
                        <option value="soltero">Soltero</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">Divorciado</option>
                        <option value="viudo">Viudo</option>
                    </select>
                    <Input
                        name="apellidoPaterno"
                        placeholder="Apellido Paterno"
                        value={formData.apellidoPaterno}
                        onChange={handleChange}
                    />
                    <Input
                        name="apellidoMaterno"
                        placeholder="Apellido Materno"
                        value={formData.apellidoMaterno}
                        onChange={handleChange}
                    />
                    <Input
                        name="fechaNacimiento"
                        placeholder="Fecha de Nacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        type="date"
                    />
                    <Input
                        name="lugarNacimiento"
                        placeholder="Lugar de Nacimiento"
                        value={formData.lugarNacimiento}
                        onChange={handleChange}
                    />
                    <Input
                        name="numeroCelular"
                        placeholder="Número Celular"
                        value={formData.numeroCelular}
                        onChange={handleChange}
                    />
                    <Input
                        name="numeroCasa"
                        placeholder="Número de Casa"
                        value={formData.numeroCasa}
                        onChange={handleChange}
                    />
                    <Input
                        name="familiaFranciscana"
                        placeholder="Familia Franciscana"
                        value={formData.familiaFranciscana}
                        onChange={handleChange}
                        className="col-span-2"
                    />
                </div>

                <h2 className="text-2xl font-bold text-center mt-6 text-[var(--primary-100)]">Dirección</h2>
                
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        name="codigoPostal"
                        placeholder="Código Postal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                    />
                    <Input
                        name="asentamiento"
                        placeholder="Asentamiento"
                        value={formData.asentamiento}
                        onChange={handleChange}
                    />
                    <Input
                        name="municipio"
                        placeholder="Municipio"
                        value={formData.municipio}
                        onChange={handleChange}
                    />
                    <Input
                        name="entidad"
                        placeholder="Entidad"
                        value={formData.entidad}
                        onChange={handleChange}
                    />
                    <Input
                        name="pais"
                        placeholder="País"
                        value={formData.pais}
                        onChange={handleChange}
                    />
                    <Input
                        name="calle"
                        placeholder="Calle"
                        value={formData.calle}
                        onChange={handleChange}
                    />
                    <Input
                        name="numeroInterior"
                        placeholder="Número Interior"
                        value={formData.numeroInterior}
                        onChange={handleChange}
                    />
                    <Input
                        name="numeroExterior"
                        placeholder="Número Exterior"
                        value={formData.numeroExterior}
                        onChange={handleChange}
                    />
                    <Input
                        name="referencias"
                        placeholder="Referencias"
                        value={formData.referencias}
                        onChange={handleChange}
                        className="col-span-2"
                    />
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    <Button className="bg-[var(--accent-100)] hover:bg-[var(--accent-200)] text-white" type="submit">
                        Guardar
                    </Button>
                    <Button variant="outline" className="text-[var(--primary-100)] border-[var(--primary-100)]" type="button" onClick={() => setFormData({})}>
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    );
}
