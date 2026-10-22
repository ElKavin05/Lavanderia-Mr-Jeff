# Catálogo de precios 2026 — fuente del cliente

Fuente prioritaria: `Lista de Precios 2026.pdf`, entregada por el cliente el 22 de octubre de 2026 y revisada visualmente en sus cinco páginas.

## Categorías confirmadas

- Lavandería
- Dry Clean
- Planchado
- Zapatillas
- Teñido
- Carteras

El documento también confirma servicios de delivery y reparación dentro de Lavandería.

## Reglas de implementación

1. Cada producto publicado debe conservar exactamente el nombre y el precio regular del PDF.
2. Cuando exista un precio Express legible y positivo, se puede mostrar como una segunda tarifa.
3. Si el campo Express aparece vacío, con `0` o con un valor visualmente anómalo (por ejemplo, entre paréntesis), no se infiere un precio. La interfaz debe indicar **Consultar express**.
4. Los precios se presentan en USD y no se convierten ni se redondean.
5. No se publican condiciones, horario, SLA ni zonas de delivery que no aparezcan confirmadas por el cliente.

## Precios de entrada útiles para la landing

| Servicio | Precio regular | Precio Express | Observación |
| --- | ---: | ---: | --- |
| Bolsa chica | $7.50 | $10.00 | Lavandería |
| Bolsa grande | $12.00 | $15.00 | Lavandería |
| Delivery | $3.50 | $5.00 | Cobertura y condiciones pendientes de confirmar |
| Camisa (lavandería) | $2.50 | $3.00 | Por pieza |
| Camisa (dry clean) | $3.00 | $4.00 | Por pieza |
| Camisa (planchado) | $1.25 | $2.00 | Por pieza |
| Zapatillas de tela | $10.00 | $15.00 | Zapatillas |
| Vestido (teñido) | $18.00 | $25.00 | Teñido |
| Cartera chica | $7.50 | $10.50 | Carteras |

El catálogo completo debe residir en los datos de la landing, no limitarse a esta tabla de resumen.
