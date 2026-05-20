import { useState } from "react";

interface Paciente {
    nombre: string;
    edad: string;
    telefono: string;
}

interface Props {
    datos: Paciente[];
    alBorrar: (indice: number) => void;
    alEditar: (indice: number, editado: Paciente) => void;
}

function Pacientes({ datos, alBorrar, alEditar }: Props) {
    const [editandoIndice, setEditandoIndice] = useState<number | null>(null);
    const [editado, setEditado] = useState<Paciente>({ nombre: "", edad: "", telefono: "" });

    const iniciarEdicion = (indice: number, paciente: Paciente) => {
        setEditandoIndice(indice);
        setEditado(paciente);
    };

    const guardarEdicion = (indice: number) => {
        alEditar(indice, editado);
        setEditandoIndice(null);
    };

    return (
        <main className="contenido fade-in">
            <h1>Pacientes Registrados</h1>
            <div className="tabla-contenedor">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((p, index) => (
                            <tr key={index}>
                                {editandoIndice === index ? (
                                    <>
                                        <td><input value={editado.nombre} onChange={e => setEditado({ ...editado, nombre: e.target.value })} /></td>
                                        <td><input value={editado.edad} onChange={e => setEditado({ ...editado, edad: e.target.value })} /></td>
                                        <td><input value={editado.telefono} onChange={e => setEditado({ ...editado, telefono: e.target.value })} /></td>
                                        <td>
                                            <button className="btn-save" onClick={() => guardarEdicion(index)}>✔️</button>
                                            <button className="btn-cancel" onClick={() => setEditandoIndice(null)}>❌</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{p.nombre}</td>
                                        <td>{p.edad}</td>
                                        <td>{p.telefono}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => iniciarEdicion(index, p)}>✏️</button>
                                            <button className="btn-delete" onClick={() => alBorrar(index)}>🗑️</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Pacientes;