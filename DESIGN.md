# Design system — Mr Jeff San Francisco

**Product:** landing page estática para explicar servicios de cuidado de ropa, consultar tarifas 2026 y abrir una conversación en WhatsApp.
**Direction:** “ficha de cuidado y mostrador de tarifas” (posición 3 de 7; `seed:13c01c35e420f2dc`). La interfaz prioriza una lectura clara de servicio → precio → consulta, no una landing promocional genérica.

## Visual direction

- Una cabecera blanca y compacta lleva la identidad local y las rutas principales.
- El hero es una superficie azul profundo con una ficha/recibo blanco de precios reales: el catálogo es la prueba de valor, no decoración.
- Bandas de servicio, reglas finas y una tabla editorial sustituyen la retícula de tarjetas. El resultado debe sentirse útil, local y operativo.
- El tono es directo y tranquilizador en español; se evita prometer horarios, cobertura, entrega o alianzas que no hayan sido confirmados.

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `--ink` / `--ink-deep` | `#082e63` / `#031d44` | superficie principal, titulares y acciones |
| `--cyan` / `--cyan-soft` | `#22afe3` / `#d7f4ff` | acentos, franja de servicios y estados de interacción |
| `--sun` | `#f5bd24` | CTA principal y foco visible |
| `--paper` / `--white` | `#f7fbfc` / `#ffffff` | fondos y fichas de lectura |
| `--line` | `#c7d9e5` | divisores y estructura de tabla |
| categorías | azul, verde, rojo, índigo, morado y amarillo | marcadores funcionales para filtrar tarifas |

La tipografía es **Jeff Sans**: el archivo variable `UbuntuSans-Variable.ttf`, autoalojado, con titulares de alto peso y tracking negativo. Los importes usan numerales tabulares para poder comparar columnas con rapidez.

## Layout and components

- `content-width`: ancho máximo de 1160px y márgenes laterales fluidos; en móvil, 40px y después 32px de aire total.
- Hero: dos columnas en escritorio (mensaje + recibo inclinado); una columna en móvil. El azul profundo se mantiene deliberadamente limpio para que el recibo sea la prueba visual principal.
- Servicio: cuatro bandas en cuadrícula 2×2 que pasan a una sola columna. Cada una recibe un borde interior de color de categoría.
- Catálogo: búsqueda por texto, botones de categoría con estado visible, resumen dinámico, tabla semántica y enlace al PDF completo. Una tarifa Express ambigua se muestra como “Consultar express”.
- Conversión: el CTA de WhatsApp se repite en navegación, hero y cierre. Los enlaces sociales quedan en el pie.
- Header móvil: botón accesible que abre una navegación fija de una columna y bloquea el scroll de fondo.

## Responsive, motion and accessibility

- Puntos principales: escritorio libre; navegación y hero de una columna bajo 760px; ajustes de ritmo y CTAs a ancho completo bajo 480px.
- La tira de servicios permite desplazamiento horizontal discreto en móvil; los botones de categoría siguen el mismo patrón y la tabla conserva scroll horizontal cuando es necesario.
- La ficha de precio tiene una deriva sutil; `prefers-reduced-motion` elimina animación, transiciones y scroll suave.
- Controles con etiquetas, HTML semántico, enlace para saltar al catálogo, estados `aria-pressed`, foco amarillo de alto contraste y menú con `aria-expanded`.

## Content and data rules

- La fuente comercial es el PDF 2026 entregado por el cliente. Mantener el enlace al documento incluso cuando se cambie el contenido visible del catálogo.
- No inferir ni normalizar importes Express vacíos, cero o dudosos; dirigir esos casos a consulta.
- Todo dato no verificado —horarios, cobertura de delivery, tiempos y promociones— queda fuera de la interfaz.
- La información del catálogo vive en `public/app.js`; al actualizarla, conservar categoría, pieza, regular y Express como datos separados.

## Source-of-truth assets

- Logo oficial: `public/assets/brand/mr-jeff-logo-oficial.png`.
- Procedencia del logo: `public/assets/brand/mr-jeff-logo-oficial.png.provenance.json`.
- Lista de precios de referencia: `public/assets/documentos/lista-de-precios-2026.pdf`.
- Tipografía local: `public/assets/fonts/UbuntuSans-Variable.ttf`.
- Investigación y decisiones editoriales: `docs/investigacion-marca.md`, `docs/catalogo-precios-2026.md`, `docs/recursos-visuales.md` y `docs/landing-surface-brief.md`.

No se usaron activos de imagen generados con IA. La única imagen editorial es el logo oficial proporcionado por el cliente; las formas y efectos de la página son CSS.
