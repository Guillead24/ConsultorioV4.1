import { useState } from "react";
import Layout from "./components/Shared/Layout";
import Inicio from "./Pages/Inicio";
import Pacientes from "./Pages/Pacientes";
import Citas from "./Pages/Citas";
import "./App.css";

// Definimos la estructura de un paciente para TypeScript
interface Paciente {
    nombre: string;
    edad: string;
    telefono: string;
}

function App() {
    // Estado para la navegación
    const [paginaActual, setPaginaActual] = useState("inicio");

    // Estado de la lista de pacientes
    const [listaPacientes, setListaPacientes] = useState<Paciente[]>([
        { nombre: "Juan Perez", edad: "30", telefono: "555-1234" },
        { nombre: "Ana Lopez", edad: "25", telefono: "555-5678" },
        { nombre: "Carlos Ramirez", edad: "40", telefono: "555-8899" }
    ]);

    // Función para agregar paciente
    const agregarNuevoPaciente = (nuevo: Paciente) => {
        setListaPacientes([...listaPacientes, nuevo]);
        setPaginaActual("pacientes");
    };

    // Funciones placeholders para cumplir con la interfaz del componente Pacientes
    const manejarBorrar = (index: number) => {
        console.log("Borrar paciente en el índice:", index);
        // Aquí agregarás la lógica de eliminar de la BD más adelante
    };

    const manejarEditar = (index: number) => {
        console.log("Editar paciente en el índice:", index);
        // Aquí agregarás la lógica de editar en la BD más adelante
    };

    // Renderizado del contenido según la página
    const mostrarContenido = () => {
        switch (paginaActual) {
            case "inicio": return <Inicio />;
            case "pacientes": return (
                <Pacientes
                    datos={listaPacientes}
                    alBorrar={manejarBorrar}
                    alEditar={manejarEditar}
                />
            );
            case "citas": return <Citas alGuardar={agregarNuevoPaciente} />;
            default: return <Inicio />;
        }
    };

    return (
        <Layout>
            <nav className="menu-navegacion">
                <button
                    className={paginaActual === 'inicio' ? 'active' : ''}
                    onClick={() => setPaginaActual("inicio")}
                >
                    Inicio
                </button>
                <button
                    className={paginaActual === 'pacientes' ? 'active' : ''}
                    onClick={() => setPaginaActual("pacientes")}
                >
                    Ver Pacientes
                </button>
                <button
                    className={paginaActual === 'citas' ? 'active' : ''}
                    onClick={() => setPaginaActual("citas")}
                >
                    Registrar Cita
                </button>
            </nav>

            {/* Renderizado de la página seleccionada */}
            <div className="fade-in">
                {mostrarContenido()}
            </div>
        </Layout>
    );
}

export default App;