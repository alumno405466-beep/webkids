# Kids Talent — Proyecto web (webkids)

Guía breve de instalación y uso para el proyecto localizado en `webkids`.

## Requisitos

- Node.js v18+ (recomendado)
- npm o pnpm

## Instalación

1. Abre una terminal en la carpeta del repositorio y sitúate en el proyecto:

```bash
cd webkids
```

2. Instala dependencias:

```bash
npm install
# o
pnpm install
```

## Ejecutar en desarrollo

Arranca el servidor de desarrollo (Vite):

```bash
npm run dev
# o
pnpm dev
```

Abre la URL que muestre Vite (por defecto `http://localhost:5173`).

## Build y previsualización

Generar build de producción:

```bash
npm run build
# o
pnpm build
```

Previsualizar el resultado del build:

```bash
npm run preview
# o
pnpm preview
```

## Estructura principal del proyecto

- `src/` — código fuente (React + TypeScript)
  - `pages/` — páginas principales (p. ej. `Nosotros.tsx`, `Contact.tsx`)
  - `ui/` — componentes reutilizables (Section, GoogleMap...)
  - `content/` — datos estáticos (staff, contact)
- `public/` — activos estáticos
- `package.json` — scripts y dependencias

## Guía de usuario

- Abrir la aplicación en el navegador.
- Ir a la sección "Nuestro Equipo" (la página que renderiza `Nosotros.tsx`).
- Cada profesor aparece en una tarjeta con imagen, nombre y rol.
- Comportamiento hover: al poner el cursor sobre la tarjeta, la imagen se oculta y en su lugar aparece la descripción larga (`info`). El efecto usa utilidades de Tailwind (`group-hover`, `opacity`) y transiciones CSS.

Verificación rápida del hover:

1. `npm run dev` o `pnpm dev`.
2. Abrir la página `Nosotros` en el navegador.
3. Pasar el cursor por encima de una tarjeta; la imagen debe desvanecerse y mostrarse la información del profesor.

## Notas de desarrollo

- Animaciones de entrada y aparición usan `framer-motion`.
- Si no ves el overlay en hover, comprueba que la tarjeta incluye la clase `group` y que el overlay usa `group-hover:opacity-100`.

## Contribuir

- Crea una rama nueva: `git checkout -b feat/mi-cambio`.
- Haz commits claros y push a tu rama.

## Soporte

Si necesitas ayuda, abre un issue o contacta al mantenedor del repositorio.

---

Archivo actualizado para proporcionar instrucciones en español y guía de uso.
