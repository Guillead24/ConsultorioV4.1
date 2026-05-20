function Header() {
    return (
        <header className="header">
            <div className="logo">
                {/* El ícono de estetoscopio que ya tienes */}
                🩺 MedSystem
            </div>

            {/* Borramos el <nav> con los enlaces que se veían morados */}
            <div className="header-info">
                <span>Panel Administrativo</span>
            </div>
        </header>
    );
}

export default Header;