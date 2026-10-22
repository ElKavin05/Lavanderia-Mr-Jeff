# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JavaScript, confirmed by the user for Cloudflare Pages deployment.

## Users

People in Panamá who need to resolve laundry care without spending their time washing, drying, ironing, or coordinating specialty garment care. They arrive primarily from social channels or a direct WhatsApp link and need to understand services, prices, and the next action quickly.

## Product Purpose

Mr Jeff San Francisco is a local laundry service. This landing page presents its current 2026 service catalogue and directs prospective customers to WhatsApp to request service.

## Positioning

The page combines a locally verified Mr Jeff San Francisco identity with the customer-provided 2026 price list. It makes the actual item-level catalogue available before the visitor starts a WhatsApp conversation.

## Operating Context

The first release is a static Cloudflare Pages site. It needs to work on mobile, where visitors browse service categories and start a WhatsApp conversation. Social links are verified. The exact public address, operating hours, delivery coverage, delivery conditions, and turnaround promise remain intentionally unpublished until confirmed by the client.

## Capabilities and Constraints

- Browse six customer-provided categories: Lavandería, Dry Clean, Planchado, Zapatillas, Teñido, and Carteras.
- Filter every price-list item by item name and category; retain the original PDF as an accessible complete-document reference.
- Show regular and Express prices only where they are unambiguous in the source PDF.
- Treat blank, zero, or anomalous Express values as "Consultar express"; do not correct, infer, or calculate them.
- Use WhatsApp as the conversion path and retain the verified Instagram and Facebook links.
- No server, runtime framework, analytics dependency, remote fonts, or invented commercial claims.

## Brand Commitments

- Use the client-provided Mr Jeff logo at `public/assets/brand/mr-jeff-logo-oficial.png`.
- Preserve the local identity observed in verified channels: deep blue, cyan, white, clear Spanish, and a practical, reassuring voice.
- Do not present global Mr Jeff material or other branches as if they belonged to San Francisco, Panamá.
- Do not represent Washday Hub as a current partner without confirmation.

## Evidence on Hand

- 2026 price list supplied by the client: `/home/kevin05/Downloads/Lista de Precios 2026.pdf`.
- Official logo supplied by the client: `public/assets/brand/mr-jeff-logo-oficial.png`.
- Verified local Instagram, Facebook, and WhatsApp links recorded in `docs/fuentes-marca.md`.
- Brand and commercial research in `docs/investigacion-marca.md`.
- No approved original photography for the site; the page must not represent social post art as a licensed hero asset.

## Product Principles

- Make the next step clear: understand the service, find the price, open WhatsApp.
- Keep commercial facts traceable to the client-provided price list or a verified current source.
- Use a local, human service voice without overpromising timings, coverage, or promotions.
- Favor a fast, accessible mobile experience that remains useful on a weak connection.

## Accessibility & Inclusion

- Use semantic HTML, keyboard-operable controls, visible focus states, adequate color contrast, and text labels for every icon-only control.
- Respect reduced-motion preferences and maintain legibility at mobile zoom.
