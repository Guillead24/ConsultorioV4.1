

# **MedSystem - Sistema de Gestión de Consultas Médicas**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![.NET](https://img.shields.io/badge/.NET_8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)
![Entity Framework](https://img.shields.io/badge/EF%20Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)

---

## **Descripción del Proyecto**
**MedSystem** es una plataforma web integral diseñada para la administración de consultorios médicos. El sistema permite gestionar el flujo completo de atención, desde el registro inicial del paciente hasta la programación y seguimiento de citas médicas.

Esta versión corresponde al avance de la **Unidad 3**, donde se ha migrado toda la lógica estática a una **arquitectura basada en estados dinámicos** y componentes reutilizables bajo el estándar de **Single Page Application (SPA)**.

---

## **Funcionalidades Principales**

**Panel de Control (Dashboard)**: Interfaz de bienvenida con acceso directo a los módulos críticos mediante un sistema de tarjetas (Cards).

**Gestión Dinámica de Pacientes**: Tabla interactiva que muestra información en tiempo real de los pacientes registrados.

**Módulo de Citas**: Formulario inteligente que permite capturar datos de nuevas consultas y actualizar el estado global de la aplicación instantáneamente

**Navegación Sin Recarga**: Sistema de rutas internas que mejora la experiencia de usuario (UX) al evitar parpadeos en el navegador.

---

## **Tecnologías y Herramientas**

| Tecnología | Propósito |
| :--- | :--- |
| **React 18** | Biblioteca base para la creación de componentes funcionales. |
| **TypeScript** | Aseguramiento de calidad mediante tipado estático de datos. |
| **ASP.NET Core 8** | Infraestructura de servidor y servicios API REST. |
| **SQL Server** | Sistema de gestión de base de datos relacional para persistencia. |
| **EF Core 8** | ORM para el mapeo de objetos y acceso a datos (Code-First). |
| **CSS3 Custom Properties** | Diseño institucional basado en una paleta de colores profesional. |
| **Vite** | Entorno de desarrollo de alta velocidad y empaquetado. |

---

## **Arquitectura del Software**

El código se organiza siguiendo el principio de **Separación de Responsabilidades**:

```text
src/
├── components/
│   └── Shared/         # Componentes transversales (Layout, Navbar)
├── Pages/              # Vistas de negocio (Inicio, Pacientes, Citas)
├── App.tsx             # Gestión del Estado Global y Lógica de Negocio
├── main.tsx            # Punto de montaje de la aplicación
└── App.css             # Capa de estilos y animaciones (Transitions)
```

---

## **Implementación Fullstack y Persistencia**

Se ha evolucionado el sistema hacia una arquitectura de servicios integrados, logrando la conexión efectiva entre el cliente y el servidor:

*   **Integración de Endpoints**: Se estructuró el Backend mediante el patrón de controladores, implementando endpoints RESTful para operaciones CRUD completas sobre el modelo de Pacientes utilizando `ControllerBase`.
*   **Persistencia de Datos**: Implementación de **Entity Framework Core 8** bajo el enfoque **Code-First**. La sincronización con la base de datos SQL Server se gestiona mediante migraciones automáticas para garantizar la integridad de la información.
*   **Comunicación Eficiente**: El Frontend (React) se comunica con el Backend (ASP.NET Core) mediante peticiones asíncronas, permitiendo el registro y consulta de datos en tiempo real.
*   **Gestión de Errores**: Sistema robusto de manejo de respuestas HTTP, devolviendo códigos de estado específicos (como 404 Not Found o 400 Bad Request) para una depuración y experiencia de usuario optimizada.

---

## **Guía de Ejecución Local**

1. **Instalar dependencias:**
```bash
-npm install
-npm run dev
```

---

## **Próximos Objetivos**
Pasarlo a un servidor para convertirla en una pagina web la cual no dependa de nuestros ordenadores

---

## **Información Académica**

*   **Alumno 1**: Ruben Rios Gonzalez – c20340733
*   **Alumno 2**: Guillermo Angulo Durón - 21340458.
*   **Concepto proyecto**: Odontología.
*   **Materia**: Aplicaciones Web.
*   **Docente**: Abril Leticia Herrera Quintero.
