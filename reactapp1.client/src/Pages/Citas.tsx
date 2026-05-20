import { useState } from "react";

function Citas() {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [telefono, setTelefono] = useState("");

    const manejarEnvio = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!nombre || !edad || !telefono) {
            alert("Por favor, llena todos los campos");
            return;
        }

        // Estructura que espera tu Backend
        const nuevoPaciente = {
            nombre: nombre,
            edad: parseInt(edad), // El Backend espera un int
            telefono: telefono
        };

        try {
            // Llamada al endpoint POST que creamos en PacientesController
            const respuesta = await fetch('/api/pacientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoPaciente)
            });

            if (respuesta.ok) {
                alert("Paciente registrado correctamente en la base de datos");
                setNombre("");
                setEdad("");
                setTelefono("");
            } else {
                alert("Error al guardar en el servidor");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("No se pudo conectar con el servidor");
        }
    };

    return (
        <main className="contenido">
            <h1>Registrar Cita</h1>
            <p className="subtitulo">Programar nueva consulta medica</p>

            <form className="formulario" onSubmit={manejarEnvio}>
                <input
                    type="text"
                    placeholder="Nombre del paciente"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <button type="submit">Guardar cita y registrar paciente</button>
            </form>
        </main>
    );
}

export default Citas;