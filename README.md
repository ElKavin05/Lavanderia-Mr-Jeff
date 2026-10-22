# Mr Jeff San Francisco — landing estática

Sitio sin dependencias de build, listo para Cloudflare Pages.

## Despliegue en Cloudflare Pages

1. Conecta este repositorio a un proyecto de Cloudflare Pages.
2. Selecciona **None / static site** como framework preset.
3. Deja vacío el comando de build.
4. Configura `public` como **Build output directory**.
5. Publica. Cloudflare servirá `public/index.html` como entrada.

## Desarrollo local

Puedes abrir `public/index.html` directamente en el navegador o servir la carpeta `public` con cualquier servidor estático.

## Fuente del catálogo

Las tarifas destacadas en `public/app.js` provienen del PDF de precios 2026 proporcionado por el cliente. La lista completa se publica también como `public/assets/documentos/lista-de-precios-2026.pdf`.

Los valores Express ausentes, cero o visualmente anómalos en el PDF se representan como **Consultar express**; no se normalizan ni se inventan.
