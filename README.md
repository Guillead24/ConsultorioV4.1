🩺 MedSystem – Sistema de Gestión de Consultas Médicas
📖 Descripción

MedSystem es una aplicación web desarrollada con React que permite simular un sistema básico de gestión médica. El sistema ofrece una interfaz sencilla donde se pueden visualizar pacientes, registrar citas médicas y navegar entre diferentes secciones del sistema.

El proyecto fue creado utilizando Vite, una herramienta moderna para desarrollar aplicaciones frontend de manera rápida y eficiente.

La aplicación está estructurada utilizando componentes reutilizables, lo que permite mantener el código organizado y escalable.

🎯 Objetivo del Proyecto

El objetivo principal de este proyecto es desarrollar una aplicación web que simule un sistema básico para la administración de consultas médicas, permitiendo gestionar información relacionada con pacientes y citas médicas.

También busca aplicar los conceptos fundamentales del desarrollo con React, como:

Creación de componentes

Organización modular del código

Uso de TypeScript

Aplicación de estilos con CSS

Separación de páginas dentro de la aplicación

🧰 Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

React – Biblioteca para construir interfaces de usuario.

Vite – Herramienta para crear proyectos React modernos.

TypeScript – Lenguaje que agrega tipado estático a JavaScript.

Microsoft Visual Studio – Entorno de desarrollo utilizado para crear el proyecto.

CSS3 – Utilizado para el diseño y estilo de la interfaz.

📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

src
│
├── assets
│
├── components
│   └── Header.tsx
│
├── Pages
│   ├── Inicio.tsx
│   ├── Pacientes.tsx
│   └── Citas.tsx
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
Explicación de carpetas

components
Contiene componentes reutilizables de la aplicación, como el encabezado del sistema.

Pages
Contiene las diferentes páginas de la aplicación:

Inicio

Pacientes

Citas

assets
Carpeta donde se almacenan recursos como imágenes e íconos.

⚙️ Instalación del Proyecto

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clonar el repositorio
git clone https://github.com/usuario/medsystem.git
2. Entrar a la carpeta del proyecto
cd medsystem
3. Instalar dependencias
npm install
4. Ejecutar la aplicación
npm run dev

Después de ejecutar el comando, abre el navegador en:

http://localhost:5173
🧩 Componentes del Sistema
Header

El componente Header representa la barra superior de navegación del sistema.

Incluye:

Logo del sistema

Menú de navegación

Acceso a las principales secciones

Este componente se reutiliza en todas las páginas del sistema.

🏠 Página de Inicio

La página Inicio funciona como el panel principal del sistema.

Incluye:

Título del sistema

Descripción general

Tarjetas de acceso rápido

Las tarjetas permiten acceder a las principales secciones del sistema:

Pacientes

Citas

Estadísticas

👨‍⚕️ Página de Pacientes

La página Pacientes muestra una tabla con información básica de pacientes registrados en el sistema.

La tabla incluye:

Nombre del paciente

Edad

Teléfono

Este módulo puede ampliarse para incluir funcionalidades como:

Registro de nuevos pacientes

Edición de información

Eliminación de registros

Historial médico

📅 Página de Citas

La página Citas permite registrar consultas médicas mediante un formulario.

El formulario incluye los siguientes campos:

Nombre del paciente

Fecha de la cita

Hora de la consulta

Este módulo puede ampliarse para incluir:

Calendario de citas

Edición de citas

Cancelación de consultas

🎨 Diseño de la Interfaz

La interfaz del sistema utiliza CSS para crear un diseño limpio y moderno.

Características principales:

Barra de navegación superior

Tarjetas informativas

Botones interactivos

Formularios simples

Diseño centrado y ordenado

Se utilizan propiedades CSS como:

box-shadow
border-radius
flexbox
padding

para mejorar la apariencia visual del sistema.

🚀 Mejoras Futuras

Este proyecto puede mejorarse agregando funcionalidades adicionales como:

Navegación con React Router

Conexión con una base de datos

API para almacenar pacientes

Sistema de autenticación de usuarios

Panel de administración

Estadísticas avanzadas

📚 Conclusión

El proyecto MedSystem demuestra cómo construir una aplicación web moderna utilizando React y una arquitectura basada en componentes.

La organización del código permite que el sistema sea fácil de mantener, entender y ampliar en el futuro. Además, sirve como base para desarrollar aplicaciones más complejas dentro del ámbito médico o administrativo.



guía de instalación paso a paso

estructura explicada con diagramas

sección de contribución.
