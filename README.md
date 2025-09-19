# Portfolio Personal - Pedro

Mi portfolio personal desarrollado con Astro, mostrando mis proyectos, experiencia profesional y certificaciones.

## 🌟 Características

- **Diseño moderno y responsivo**: Adaptado a dispositivos móviles y escritorio
- **Optimizado para rendimiento**: Construido con Astro para carga rápida
- **Analíticas integradas**: Seguimiento con Vercel Analytics

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework principal
- **Vercel Analytics** - Métricas de uso
- **Astro Compress** - Optimización de assets

## � Estructura del Proyecto

```text
/
├── public/                  # Assets estáticos
│   ├── documents/          # Documentos (CV, certificados)
│   ├── favicon/            # Iconos de la aplicación
│   └── og-preview.jpg      # Imagen de preview social
├── src/
│   ├── assets/
│   │   └── img/            # Imágenes del portfolio
│   ├── components/         # Componentes Astro
│   │   ├── About.astro     # Sección sobre mí
│   │   ├── Header.astro    # Navegación
│   │   ├── Hero.astro      # Sección principal
│   │   ├── Timeline.astro  # Experiencia profesional
│   │   ├── Projects.astro  # Proyectos destacados
│   │   └── Certifications.astro # Certificaciones
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   └── pages/
│       └── index.astro     # Página principal
└── package.json
```

## 🚀 Comandos de Desarrollo

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente                |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                   |

## 🎯 Secciones del Portfolio

- **Hero**: Presentación principal con animaciones
- **Sobre mí**: Información personal y profesional
- **Experiencia**: Timeline de mi trayectoria profesional
- **Proyectos**: Proyectos destacados con enlaces y tecnologías
- **Certificaciones**: Certificaciones técnicas obtenidas

## � Desarrollo Local

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre `http://localhost:4321` en tu navegador

## 📄 Licencia

Este proyecto es de uso personal y está disponible como referencia para otros desarrolladores.

---

Desarrollado con ❤️ por Pedro
