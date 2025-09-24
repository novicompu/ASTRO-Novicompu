# RysthDesign - Agencia de Diseño Web en Guayaquil

<div align="center">
  <img src="./public/favicon.png" alt="RysthDesign Logo" height="100" />
</div>

## Table of Contents

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características Principales](#características-principales)
- [Guía de SEO](#guía-de-seo)
- [Desarrollo Local](#desarrollo-local)
- [Authors](#authors)
- [License](#license)

## Sobre el Proyecto

Agencia de diseño y desarrollo web profesional ubicada en Guayaquil, Ecuador. Especializada en:

- 🎯 Sitios Web Profesionales
- 🛒 Tiendas Online (E-commerce)
- 💻 Aplicaciones Web

## Tecnologías Utilizadas

- Astro
- React
- TailwindCSS
- DaisyUI
- TypeScript

## Características Principales

- ⚡ Rendimiento Optimizado (99/100 en Lighthouse)
- 📱 Diseño Totalmente Responsivo
- 🔍 SEO Optimizado para el mercado de Guayaquil
- 🛠️ Stack Tecnológico Moderno

### Guía de SEO

#### 1. Google Search Console

1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Agregar propiedad (dominio o URL)
3. Verificar propiedad mediante:
   - Archivo HTML
   - Meta tag
   - DNS record
4. Subir sitemap.xml
   ```bash
   https://rysthdesign.com/sitemap-index.xml
   ```

#### 2. Google Business Profile

1. Visitar [Google Business](https://business.google.com)
2. Crear perfil de negocio
3. Agregar información importante:
   - Dirección física en Guayaquil
   - Horario de atención
   - Fotos del negocio
   - Servicios ofrecidos
4. Solicitar verificación por correo postal

#### 3. Structured Data

1. Agregar al `Layout.astro`:

```astro
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebDesigner",
    "name": "RysthDesign",
    "image": "https://rysthdesign.com/logo.png",
    "description": "Agencia de Diseño Web en Guayaquil",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guayaquil",
      "addressRegion": "Guayas",
      "addressCountry": "EC"
    },
    "priceRange": "$$"
  }
</script>
```

#### 4. Meta Tags Esenciales

1. Agregar en `Layout.astro`:

```astro
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="description" content="Agencia de Diseño Web en Guayaquil 🚀" />
<meta name="keywords" content="diseño web guayaquil, paginas web ecuador" />
```

#### 5. Optimización Local

1. Palabras clave objetivo:

   - diseño web guayaquil
   - desarrollo web ecuador
   - paginas web guayaquil
   - tiendas online ecuador

2. Contenido local:

   - Blog posts sobre desarrollo web en Ecuador
   - Casos de éxito de clientes locales
   - Testimonios de empresas guayaquileñas

3. Backlinks locales:
   - Cámara de Comercio de Guayaquil
   - Directorios de empresas ecuatorianas
   - Eventos tech locales

#### 6. Herramientas de Verificación

- [Schema Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Live Demo

[Live Demo](https://react-bookstore-2060.onrender.com/)

## Desarrollo Local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Rysth/ASTRO-RysthDesign.git
   cd ASTRO-RysthDesign
   code .  # To open VS Code Editor
   ```

2. Customize as needed.

### Commands

- **npm run dev:** Run the app in development mode.
- **npm run build:** Build the app for production.
- **npm run eslint:** Launch the ESLINT command.

### Linters

- CSS Checker:

  ```bash
  npx stylelint "**/*.{css,scss}"
  ```

- ESLint Checker:

  ```bash
  npx eslint "**/*.{js,jsx}"
  ```

### Authors

- John Palacios

  - [LinkedIn](https://www.linkedin.com/in/john-rysthcraft/)
  - [GitHub](https://github.com/Rysth)

### License

This project is [MIT](./LICENSE.md) licensed.
