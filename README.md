# ARENA — Sitio web para agencia de publicidad

Sitio web institucional desarrollado para **ARENA**, una agencia de publicidad y marketing. Es un proyecto personal que armé para aplicar en la práctica conceptos de desarrollo web más allá de lo que se ve en la currícula formal de la carrera (Ingeniería en Informática).

## Demo

- Repositorio: este mismo repo
- Código: HTML, CSS y JavaScript puro, sin frameworks ni dependencias — se puede abrir `index.html` directamente en el navegador

## Tecnologías

- **HTML5** semántico
- **CSS3** puro (sin frameworks como Bootstrap o Tailwind), con Grid, Flexbox, animaciones con `@keyframes` y media queries para diseño responsive
- **JavaScript vanilla** (ES Modules), sin librerías externas
- **Google Fonts** (Fraunces + Montserrat)
- **Formspree** como backend del formulario de contacto (sin necesidad de servidor propio)

## Funcionalidades

- **Header flotante** tipo píldora, fijo en scroll, con logo y menú de navegación
- **Menú responsive**: dropdown de Servicios por hover en desktop, y por click/toggle en mobile (usando `matchMedia` para detectar dispositivos táctiles)
- **Menú hamburguesa** para mobile
- **Preloader** con animación de logo al cargar la página
- **Marquee animado** (texto en loop infinito) en el hero y en las páginas de servicio
- **Slider de servicios con scroll nativo**: 6 tarjetas recorribles con drag del mouse (con inercia al soltar), swipe táctil nativo del navegador, o teclado — el foco trae automáticamente las tarjetas fuera de pantalla a la vista (sin librerías de carrusel)
- **6 páginas individuales de servicio** (Branding, Paid Media, Social Media, Product Content, Event Coverage, UGC Content), cada una con su propio hero, diagrama de conceptos y servicios relacionados
- **Scroll reveal**: animaciones de aparición (fade + movimiento) al hacer scroll, con `IntersectionObserver`
- **Scroll centrado personalizado**: función que calcula la posición del elemento y lo centra verticalmente en pantalla al navegar desde el menú, tanto en clicks dentro de la página como al llegar desde otra página con el hash en la URL
- **Formulario de contacto** conectado a Formspree vía `fetch` (nombre, correo, teléfono, selector de servicio, mensaje), con validación propia (mensajes de error inline, foco automático en el primer campo inválido) y confirmación de envío in-page, sin redirigir a Formspree
- **Accesibilidad**: skip link, landmark `<main>`, foco visible y navegable por teclado en todo el sitio (incluido el slider), `aria-label`/`aria-expanded` en controles icon-only, y animaciones que respetan `prefers-reduced-motion`
- **Diseño responsive** completo: menú, slider, formulario y tipografía adaptados a mobile

## Estructura del proyecto

```
├── index.html              # Home
├── branding.html            # Página de servicio: Branding
├── paid-media.html          # Página de servicio: Paid Media
├── social-media.html        # Página de servicio: Social Media
├── product-content.html     # Página de servicio: Product Content
├── event-coverage.html      # Página de servicio: Event Coverage
├── ugc-content.html         # Página de servicio: UGC Content
├── styles.css                # Estilos globales
├── script.js                 # Lógica de interactividad (menú, slider, scroll, animaciones)
└── *.jpg / *.png             # Imágenes del sitio
```

## Cómo verlo

No requiere instalación ni build. Alcanza con clonar el repo y abrir `index.html` en el navegador, o servirlo con cualquier servidor estático simple (por ejemplo, la extensión Live Server de VS Code).

## Autor

Facundo D'Elia — Estudiante de Ingeniería en Informática (UNLaM)
