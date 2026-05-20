// src/components/Shared/Layout.tsx
import Header from "../Header"; // Ajusta la ruta según tu carpeta

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <footer className="footer-principal">
                © 2026 Sistema de Consultas Medicas - Practica Escolar
            </footer>
        </div>
    );
};

export default Layout;