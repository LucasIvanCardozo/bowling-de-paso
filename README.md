# 🎳 Bowling de Paso

**El lugar más divertido de Buenos Aires para disfrutar en familia y con amigos.**

Sitio web oficial de Bowling de Paso: un centro de entretenimiento familiar en el corazón de Buenos Aires que ofrece bowling, juegos arcade y gastronomía en un ambiente moderno y acogedor.

🌐 **[www.bowlingdepaso.com.ar](https://www.bowlingdepaso.com.ar)**

---

## 📑 Tabla de contenidos

1. [Sobre el proyecto](#-sobre-el-proyecto)
2. [Stack tecnológico](#-stack-tecnológico)
3. [Inicio rápido](#-inicio-rápido)
4. [Scripts disponibles](#-scripts-disponibles)
5. [Estructura del proyecto](#-estructura-del-proyecto)
6. [Rutas](#-rutas)
7. [Convenciones de código](#-convenciones-de-código)
8. [Optimización de imágenes](#-optimización-de-imágenes)
9. [SEO y rendimiento](#-seo-y-rendimiento)
10. [Despliegue](#-despliegue)
11. [Guía para contribuir](#-guía-para-contribuir)

---

## 🏢 Sobre el proyecto

Este repositorio contiene el código fuente del sitio web institucional de Bowling de Paso. Está desarrollado como una **Single Page Application (SPA)** con foco en:

- ⚡ **Rendimiento**: carga rápida con preloads de fuentes, lazy-loading de imágenes y builds optimizados con Vite.
- 🔍 **SEO**: meta tags dinámicos con `react-helmet-async`, `lang="es-AR"`, canonical URL y Open Graph.
- ♿ **Accesibilidad**: semántica correcta, atributos `alt` en todas las imágenes y navegación por teclado.
- 📱 **Responsive**: layout fluido que se adapta a mobile, tablet y desktop.

### 📍 Ubicación y horarios

- 🏠 **Dirección:** Córdoba 3766, Buenos Aires
- 🕐 **Horario:** Todos los días de 17:00 a 02:00 hs

---

## 🚀 Stack tecnológico

| Categoría | Tecnología | Versión |
|---|---|---|
| **Framework UI** | React | 19.2 |
| **Lenguaje** | TypeScript | 5.9 (modo estricto) |
| **Bundler / Dev server** | Vite | 7.3 |
| **Routing** | React Router | 7.13 |
| **Estilos** | CSS Modules | — |
| **SEO** | react-helmet-async | 3.0 |
| **Procesamiento de imágenes** | sharp | 0.34 |
| **Linting** | ESLint + typescript-eslint | 9.39 / 8.48 |
| **Despliegue** | GitHub Pages | — |

---

## ⚡ Inicio rápido

### Requisitos previos

- **Node.js** 18 o superior
- **pnpm** 9 o superior (recomendado)

```bash
# Instalar pnpm si no lo tenés
npm install -g pnpm
```

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/lucascardozo/bowling-de-paso.git
cd bowling-de-paso

# Instalar dependencias
pnpm install

# Iniciar el servidor de desarrollo
pnpm dev
```

El servidor de Vite se levantará en `http://localhost:5173` por defecto.

---

## 📜 Scripts disponibles

```bash
pnpm dev        # Inicia el servidor de desarrollo con HMR
pnpm build      # Type-check + build de producción a ./dist
pnpm preview    # Sirve el build localmente para verificación
pnpm lint       # Ejecuta ESLint sobre todo el proyecto
pnpm deploy     # Compila y publica en GitHub Pages
```

> **Tip:** para revisar un solo archivo con ESLint: `pnpm lint -- src/main.tsx`

---

## 📁 Estructura del proyecto

```
bowling-de-paso/
├── public/                # Recursos estáticos servidos tal cual (fuentes, favicons)
├── scripts/               # Scripts utilitarios (optimización de imágenes)
│   └── optimize-images.js
├── src/
│   ├── assets/            # Recursos estáticos (imágenes, SVGs)
│   │   └── svgs/          # Componentes SVG
│   ├── components/        # Componentes reutilizables
│   │   ├── features/      # Componentes específicos de funcionalidad
│   │   │   ├── Anotacion.tsx
│   │   │   ├── Confetis.tsx
│   │   │   ├── ItemCarta.tsx
│   │   │   ├── LogoTexto.tsx
│   │   │   ├── Marcas.tsx
│   │   │   ├── Tarjeta.tsx
│   │   │   └── TarjetaAlbum.tsx
│   │   └── layouts/       # Componentes de layout (Nav, Footer)
│   │       ├── Nav.tsx
│   │       └── Footer.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useIntersection.tsx
│   │   ├── useSeasonalSchedule.ts
│   │   └── useWidth.tsx
│   ├── lib/               # Lógica de negocio y acceso a datos
│   │   └── db/            # Patrón repository
│   ├── pages/             # Páginas/rutas de la aplicación
│   │   ├── index.tsx      # Inicio
│   │   ├── layout.tsx     # Layout raíz con <Outlet/>
│   │   ├── historia/      # Nuestra historia
│   │   ├── contactanos/   # Contacto
│   │   ├── menu/          # Carta (en desarrollo)
│   │   └── logros/        # Logros (en desarrollo)
│   ├── types/             # Definiciones de tipos TypeScript
│   │   ├── menu.ts
│   │   ├── record.ts
│   │   └── scoreboard.ts
│   ├── animations.css     # Animaciones globales (keyframes compartidos)
│   ├── main.css           # Estilos globales (reset, tokens)
│   └── main.tsx           # Entry point + configuración del router
├── AGENTS.md              # Instrucciones para asistentes AI
├── CNAME                  # Dominio custom para GitHub Pages
├── eslint.config.js       # Configuración de ESLint flat config
├── index.html             # HTML raíz (preloads críticos de fuentes)
├── tsconfig*.json         # Configuración de TypeScript
├── vite.config.ts         # Configuración de Vite (alias @)
└── package.json
```

---

## 🧭 Rutas

Las rutas se definen en `src/main.tsx` usando `createBrowserRouter` de React Router v7. Todas están envueltas en un `Layout` que provee `Nav` y `Footer`.

| Path | Componente | Estado |
|---|---|---|
| `/` | `Index` | ✅ Activa |
| `/historia` | `Historia` | ✅ Activa |
| `/logros` | `Logros` | 🚧 En desarrollo (deshabilitada) |
| `/menu` | `Menu` | 🚧 En desarrollo (deshabilitada) |

---

## 📐 Convenciones de código

Este proyecto sigue reglas estrictas de TypeScript y convenciones de nomenclatura bien definidas. Más detalle en [`AGENTS.md`](./AGENTS.md).

### Nomenclatura

| Tipo | Convención | Ejemplo |
|---|---|---|
| Componentes | kebab-case | `tarjeta.tsx`, `marcas.tsx` |
| Hooks | camelCase con prefijo `use` | `useIntersection.tsx` |
| Tipos | PascalCase en `src/types/` | `PlayerRecord` |
| CSS Modules | kebab-case + `.module.css` | `tarjeta.module.css` |
| Directorios | kebab-case | `src/components/features/` |

### Componentes

- **Páginas** → `export default`
- **Componentes reutilizables** → `export const` (named export)
- **Arrow functions** para componentes funcionales

```tsx
// Página (default export)
export default function Index() {
  return <div>Content</div>
}

// Componente reutilizable (named export)
export const Tarjeta = () => {
  return <div>Card content</div>
}
```

### Imports

- **Sin punto y coma** al final de las sentencias de import.
- Usá el **alias `@/`** para imports desde `src/`:
  ```tsx
  import LogoTexto from '@/components/features/LogoTexto'
  import type { PlayerRecord } from '@/types/record'
  ```
- Usá `import type` para imports de solo tipo (requerido por `verbatimModuleSyntax`).

### TypeScript

- Modo estricto activado (`strict: true`).
- ❌ **Prohibido:** `any`, `@ts-ignore`, class components, CSS no-modular.
- ✅ **Siempre:** tipos explícitos en parámetros y retornos.

### Estilos

Cada componente tiene su `.module.css` correspondiente:

```tsx
import styles from './tarjeta.module.css'

export const Tarjeta = () => (
  <div className={styles.container}>...</div>
)
```

Las animaciones compartidas viven en `src/animations.css`.

---

## 🖼️ Optimización de imágenes

Las imágenes se procesan con un script personalizado basado en `sharp` que genera versiones WebP optimizadas:

```bash
node scripts/optimize-images.js
```

Las imágenes optimizadas se commitean al repositorio para evitar re-procesarlas en cada build (estrategia de trade-off entre tamaño de repo y tiempo de build).

---

## 🔍 SEO y rendimiento

- **HTML lang:** `es-AR`
- **Meta tags críticos:** `viewport`, `color-scheme`, `theme-color`, `robots`, `language`, `author`, `canonical`.
- **Preloads de fuentes:** Bebas Neue y Arial Rounded MT Std en `index.html` para eliminar FOIT/FOUT.
- **Imágenes:** siempre con `alt` descriptivo y `loading="lazy"`.
- **Meta tags dinámicos:** `react-helmet-async` permite setear `<title>` y `<meta>` por página.

---

## 🌐 Despliegue

El sitio se publica en **GitHub Pages** apuntando al dominio custom `www.bowlingdepaso.com.ar` (definido en `CNAME`).

```bash
pnpm deploy
```

Este comando ejecuta, en orden:

1. `vite build` — type-check de TypeScript + bundle de producción a `./dist`.
2. Escribe `www.bowlingdepaso.com.ar` en `dist/CNAME`.
3. Publica el contenido de `dist/` en la rama `gh-pages` usando `gh-pages`.

Para un deploy manual, asegurate de que la rama `gh-pages` esté configurada en la sección **Pages** del repositorio.

---

## 🤝 Guía para contribuir

1. **Respetá las convenciones** de nombres y estructura del proyecto (ver arriba).
2. **TypeScript estricto:** no uses `any` ni `@ts-ignore`.
3. **Páginas** → `export default`. **Componentes reutilizables** → named export.
4. **Imports sin punto y coma** y con alias `@/` para rutas dentro de `src/`.
5. **Imágenes:** siempre con `alt` descriptivo y `loading="lazy"`.
6. Antes de commitear, corré:
   ```bash
   pnpm lint
   pnpm build
   ```
7. Commits pequeños, enfocados y con mensajes descriptivos.

Para más detalle sobre convenciones y arquitectura, consultá [`AGENTS.md`](./AGENTS.md).

---

## 👤 Autor

Sitio desarrollado por **Lucas Iván Cardozo** para Bowling de Paso.

---

<div align="center">

✨ **Hecho con ❤️ y pasión por el bowling** ✨

🎳 *Donde cada juego es una celebración* 🎳

</div>