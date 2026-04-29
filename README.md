# 🌟 Kids Talent - Plataforma Web

![Kids Talent Logo](public/logo.svg) <!-- Asegúrate de que esta ruta sea correcta o cámbiala por un banner -->


## 🚀 Características Principales

- **Catálogo Dinámico**: Exploración detallada de Programas y Campamentos con filtros avanzados.
- **Sistema de Registro (Intake)**: Formulario optimizado para la inscripción de alumnos en las diferentes actividades.
- **Diseño Premium**: Interfaz moderna con animaciones fluidas (Framer Motion) y diseño responsivo adaptado a todos los dispositivos.
- **Blog Informativo**: Sección de noticias y artículos relevantes para la comunidad.
- **Optimización SEO**: Implementación de meta-etiquetas dinámicas para mejorar el posicionamiento en buscadores.
- **Sección de Preguntas Frecuentes (FAQ)**: Ayuda interactiva para resolver dudas comunes de los usuarios.

---

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando las últimas tecnologías en desarrollo web frontend:

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Gestión de Estado y Datos**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Formularios**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (Validación)
- **Enrutamiento**: [React Router DOM 7](https://reactrouter.com/)
- **Notificaciones**: [Sonner](https://sonner.emilkowal.ski/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (Versión 18 o superior recomendada)
- **npm** (Viene con Node.js) o **pnpm**

---

## 🔧 Instalación y Configuración Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/kids-talent.git
   cd kids-talent
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   # O si usas pnpm
   pnpm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

4. **Construir para producción:**
   ```bash
   npm run build
   ```
   Los archivos optimizados se generarán en la carpeta `dist/`.

---

## 📖 Guía de Usuario

### 1. Exploración de Actividades
Navega a través de las secciones de **Programas** y **Campamentos** desde el menú principal. Puedes ver los detalles específicos de cada actividad haciendo clic en sus tarjetas informativas.

### 2. Proceso de Inscripción
Una vez seleccionada una actividad, utiliza el botón de "Inscribirse" para acceder al formulario de **Intake**. Completa los datos del tutor y del alumno para formalizar la solicitud.

### 3. Información Corporativa
En la sección **Nosotros**, podrás conocer al equipo detrás de Kids Talent y nuestra metodología de enseñanza.

### 4. Contacto y Soporte
Si tienes dudas, visita la página de **FAQ** o utiliza el formulario de **Contacto** para enviarnos un mensaje directo.

---

## 📁 Estructura del Proyecto

```text
src/
├── app/          # Proveedores globales (QueryClient, Helmet, etc.)
├── assets/       # Imágenes, iconos y recursos estáticos
├── content/      # Archivos de datos o contenido estático
├── layout/       # Componentes de estructura (Navbar, Footer)
├── lib/          # Configuraciones de librerías externas
├── pages/        # Componentes de página principales
├── seo/          # Componentes para gestión de meta-tags
└── ui/           # Biblioteca de componentes reutilizables (Botones, Cards, etc.)
```

---

## 📄 Licencia

Este proyecto es de uso privado para **Kids Talent**. Todos los derechos reservados.

---

¡Desarrollado con ❤️ para potenciar el talento de los más pequeños!
