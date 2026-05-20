function Inicio() {
    return (
        <main className="contenido">

            <h1>Panel Médico</h1>
            <p className="subtitulo">Sistema de gestion de consultas medicas</p>

            <div className="cards">

                <div className="card">
                    <h2>👨‍⚕️ Pacientes</h2>
                    <p>Administrar pacientes registrados en el sistema</p>
                    <button>Ver pacientes</button>
                </div>

                <div className="card">
                    <h2>📅 Citas</h2>
                    <p>Gestionar consultas medicas programadas</p>
                    <button>Ver citas</button>
                </div>

                <div className="card">
                    <h2>📊 Estadisticas</h2>
                    <p>Ver informacion general del sistema</p>
                    <button>Ver estadisticas</button>
                </div>

            </div>

            <div className="info">
                <h2>Sobre el sistema</h2>
                <p>
                    Este sistema permite a los medicos gestionar pacientes y consultas
                    de forma rápida y organizada. Facilita la administracion de citas,
                    registro de pacientes y control de información medica.
                </p>
            </div>

        </main>
    )
}

export default Inicio