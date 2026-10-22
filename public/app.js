const categories = [
  { id: "all", label: "Todas", color: "#082e63" },
  { id: "Lavandería", label: "Lavandería", color: "#13ace6" },
  { id: "Dry Clean", label: "Dry Clean", color: "#48c84c" },
  { id: "Planchado", label: "Planchado", color: "#ce0c2c" },
  { id: "Zapatillas", label: "Zapatillas", color: "#083d88" },
  { id: "Teñido", label: "Teñido", color: "#7f0f95" },
  { id: "Carteras", label: "Carteras", color: "#c9a900" }
];

const prices = [
  ["Lavandería", "BOLSA GRANDE", 18, 20], ["Lavandería", "Bolsa Chica", 7.5, 10], ["Lavandería", "Bolsa Grande", 12, 15], ["Lavandería", "Bolsa Secado Chica", 5, 7], ["Lavandería", "Bolsa de Secado Grande", 10, 15],
  ["Lavandería", "Camisa", 2.5, 3], ["Lavandería", "Pantalon", 2.5, 4], ["Lavandería", "Polo", 2.5, 3.75], ["Lavandería", "Remera/Camiseta", 2.5, 3], ["Lavandería", "Ropa Interior", 1, 3],
  ["Lavandería", "Docena Lavada y Planchada", 27.75, 38.75], ["Lavandería", "Media Docena Lavada y Planchada", 13.95, 16.75], ["Lavandería", "SUSCRIPCION PLAN M", 68, 68], ["Lavandería", "DELIVERY", 3.5, 5],
  ["Lavandería", "Sabana", 7, 10], ["Lavandería", "Edredon Twin", 13.95, 15], ["Lavandería", "Edredon Queen / Full", 16.95, 25], ["Lavandería", "Edredon King / XXL", 20.95, 30], ["Lavandería", "Duvet", 10, 12], ["Lavandería", "Funda de almohada", 2, 3],
  ["Lavandería", "Almohada S/M", 3.5, 5.5], ["Lavandería", "Almohada L/XL", 5.5, 7.5], ["Lavandería", "Cortina 1.27 m", 5.95, 9.95], ["Lavandería", "Manta", 12, 15], ["Lavandería", "Mantel", 9.95, 12.95],
  ["Lavandería", "Desmanche / Blanqueamiento", 3, 4], ["Lavandería", "REPARACION $10", 10, 15], ["Lavandería", "Reparacion", 5, null], ["Lavandería", "Ganchos", 0.1, 0.1],
  ["Dry Clean", "Abrigo Largo", 9.95, 12.95], ["Dry Clean", "Abrigo corto", 6.95, 9], ["Dry Clean", "Blusa", 3, 6], ["Dry Clean", "Camisa", 3, 4], ["Dry Clean", "Chaleco", 3, 6],
  ["Dry Clean", "Chaqueta de Jean", 10, 12], ["Dry Clean", "Corbata", 2, 4], ["Dry Clean", "Jacket", 7.95, 9.95], ["Dry Clean", "JACKET CUERO", 12.95, 16.95], ["Dry Clean", "Jeans", 3, 4.5],
  ["Dry Clean", "Pantalon", 3, 6], ["Dry Clean", "Pantalon Corto", 3, 5], ["Dry Clean", "Pantalon XL", 4, 5.95], ["Dry Clean", "Polo", 3, 4.95], ["Dry Clean", "Saco", 4.25, 5.5], ["Dry Clean", "Sueter", 3.5, 5.5],
  ["Dry Clean", "Traje", 7.95, 9.95], ["Dry Clean", "Vestido Corto", 5.65, 9.95], ["Dry Clean", "Vestido Largo", 9.95, 12.95], ["Dry Clean", "Vestido Novia", 99.75, 200], ["Dry Clean", "Vestido de Fiesta Corto", 12.95, 18.95], ["Dry Clean", "Vestido de Fiesta Largo", 22.95, 39.85],
  ["Planchado", "Camisa", 1.25, 2], ["Planchado", "Pantalon", 1.25, 2], ["Planchado", "Polo", 1.25, 1.5], ["Planchado", "Tshirt", 1.25, 2], ["Planchado", "Blusa", 1.25, 2], ["Planchado", "Falda Corta", 1.5, 3],
  ["Planchado", "Suéter", 1.5, 2.5], ["Planchado", "Corbata", 1.5, 2.55], ["Planchado", "Pashmina", 2, 2], ["Planchado", "Enterizo Corto", 2.25, 4], ["Planchado", "Vestido Corto", 2.25, 4], ["Planchado", "Jacket", 2.95, 4],
  ["Planchado", "Saco", 3, 3.5], ["Planchado", "Vestido Largo", 3.75, 6], ["Planchado", "Abrigo Largo", 4, 6], ["Planchado", "Plancha Docena", 14.75, 16], ["Planchado", "Media Docena", 7.25, 7.95], ["Planchado", "Juego de Sabana King (Sabana, Forro, Funda)", 12.95, null], ["Planchado", "Juego de Sabana Twin (Sabana, Forro, Funda)", 9.95, 15.95], ["Planchado", "Vestido de Fiesta", 10.95, 16],
  ["Zapatillas", "Blanqueamiento", 3, 6], ["Zapatillas", "Botas", 15, 20], ["Zapatillas", "Botas Altas", 20, 25], ["Zapatillas", "Pintura", 3, 6], ["Zapatillas", "Sandalias", 8, 15], ["Zapatillas", "Tacones", 10, 16], ["Zapatillas", "ZAPATILLAS COMPROMETIDAS", 15, 15], ["Zapatillas", "Zapatillas de Cuero / Gamuza", 10, 15], ["Zapatillas", "Zapatillas de Tela", 10, 15],
  ["Teñido", "Vestido", 18, 25], ["Teñido", "Camisa", 8.5, 12], ["Teñido", "Jumper", 16.95, 20.95], ["Teñido", "Pantalon", 8.5, 13.95], ["Teñido", "Uniforme (2 piezas)", 16.95, 20],
  ["Carteras", "Bolso de Espalda", 12, 15], ["Carteras", "Cartera Chica", 7.5, 10.5], ["Carteras", "Cartera Mediana (Dama)", 10, 15], ["Carteras", "Maleta de Mano", 15, 20]
  ,
  ["Lavandería", "ALBA", 6, 9], ["Lavandería", "Alfomba Mediana", 7.95, 10.95], ["Lavandería", "Alfombra Baño Chica", 3.5, 6.5], ["Lavandería", "Alfombra Baño Grande", 5.5, 8.5], ["Lavandería", "Alfombra Grande", 35.95, 55.95], ["Lavandería", "Alfombra de Yoga", 12, 13.95], ["Lavandería", "Almohada de Plumas", 5.5, 7.5],
  ["Lavandería", "Backing", 15.95, 20], ["Lavandería", "Backing", 15, 25], ["Lavandería", "Bandera Ondulada", 12.95, 16.95], ["Lavandería", "Bandera Vertical", 6.95, 9.95], ["Lavandería", "Bata Clinica", 4, 6], ["Lavandería", "Bata de Baño", 4, 5.95], ["Lavandería", "CAJA", 5, 10], ["Lavandería", "Cama de Perro Grande 90 cm", 15, 20], ["Lavandería", "Cama de Perro pequeña 70 cm", 12, 18], ["Lavandería", "Caminos de Mesa", 4.95, 5.95],
  ["Lavandería", "Coche Cojin / Colchon", 10, 15], ["Lavandería", "Cojin", 4.5, 6.5], ["Lavandería", "Cojin Puff", 35.95, 50], ["Lavandería", "Cojin XL", 5.5, 9.5], ["Lavandería", "Cojin XXL", 7.5, 7.5], ["Lavandería", "Cojin de Plumas S/M/L", 7.95, 12.95], ["Lavandería", "Cortina 2.20 m x 2.80 m", 14, 20], ["Lavandería", "Cortina 2.40 m x 0.90 m", 12.95, 20], ["Lavandería", "Cortina 2.60 alto x 6.60 largo", 38.61, null], ["Lavandería", "Cortina 2.60 x 2.30", 16.95, 19.95], ["Lavandería", "Cortina 3.10 x 2.30", 16.95, 19.95], ["Lavandería", "Cortina 4.30 x 2.30", 18.95, 21.95], ["Lavandería", "Cortina 7.65 x 2.30", 22.95, 25.95],
  ["Lavandería", "Edredon de Plumas T/F/Q/K", 30.95, 50.95], ["Lavandería", "Enterizo (Braga)", 15, 25], ["Lavandería", "Enterizo Largo", 6, 6], ["Lavandería", "Espaldar Sillon", 3.95, 4.95], ["Lavandería", "Forro Coche", 15, 20], ["Lavandería", "Forro Grande Sillon", 7.95, 12.95], ["Lavandería", "Forro Mediano Sillon", 6.95, 11.95], ["Lavandería", "Forro Sabana", 7, 10], ["Lavandería", "Funda Cojin Chico", 2.95, 5.95], ["Lavandería", "Funda Silla", 3.5, 7], ["Lavandería", "Gorra", 5, 10.5], ["Lavandería", "Gorro", 5, 4], ["Lavandería", "Guantes", 3.95, 4.95], ["Lavandería", "JACKET CUERO", 12.95, 15.95], ["Lavandería", "Jacket de tela", 5.95, 8.95],
  ["Lavandería", "Mantel Ecowave", 5.95, 7], ["Lavandería", "Manteles UIP", 9.95, 20], ["Lavandería", "Mascota Deportiva", 85, 150], ["Lavandería", "Mascota UIP", 85, 90], ["Lavandería", "Sábanas", 7, 9], ["Lavandería", "Servilleta / Pañuelo", 1.25, 3], ["Lavandería", "Servilletas Europerfumeria", 0.4, 1], ["Lavandería", "TOALLA ROSAS", 0.48, 0.48], ["Lavandería", "Tela de Counter", 12, 23], ["Lavandería", "Toalla grande", 2, 4], ["Lavandería", "Toalla pequeña", 1.25, null], ["Lavandería", "Toga y Birrete", 12.95, 20], ["Lavandería", "Vestido Corto Sencillo", 6, 9], ["Lavandería", "Vestido Largo Sencillo", 9, 12],
  ["Dry Clean", "Abrigo de Invierno", 9.95, 16.95], ["Dry Clean", "Bufanda", 4, 6], ["Dry Clean", "Enterizo Corto", 6.95, 12.95], ["Dry Clean", "Enterizo Largo", 9.95, 11.45], ["Dry Clean", "Falda Larga", 6, 12], ["Dry Clean", "Falda corta", 3, 7.35], ["Dry Clean", "GUANTES", 5, 10], ["Dry Clean", "Gorro / Gorra", 5, 5.5], ["Dry Clean", "Pantalon Invierno", 8.95, 15], ["Dry Clean", "Pashmina", 5.5, 8.5],
  ["Planchado", "ALBA", 4, 3], ["Planchado", "Bodys", 1.25, 2.5], ["Planchado", "Bufanda", 2, 3], ["Planchado", "Chaleco", 2.5, 2.85], ["Planchado", "Cortinas 2 x 1.35", 8.95, 16], ["Planchado", "Duvet", 10, 15], ["Planchado", "Enterizo Largo", 3.95, 6], ["Planchado", "Falda Larga", 3, 6], ["Planchado", "Forro", 7, 10], ["Planchado", "Funda", 0.85, 1.5], ["Planchado", "Manta", 10, 15], ["Planchado", "Mantel (10 puestos)", 9.95, 12.95], ["Planchado", "Mantel (2 puesto)", 4.95, 5.95], ["Planchado", "Mantel (8 puestos)", 6.95, 9.95], ["Planchado", "Pantalon XL", 2.25, 4], ["Planchado", "Sabana", 7, 10], ["Planchado", "Servilleta Chica", 0.85, 1.25], ["Planchado", "Servilleta Grande", 1.5, 2.5], ["Planchado", "Servilleta Mediana", 1, 2], ["Planchado", "Sevilletas", 0.5, 1], ["Planchado", "Toga", 5, 10], ["Planchado", "Vestido Infaltil", 2.25, 4], ["Planchado", "Vestido XL", 4.75, 7]
].map(([category, item, regular, express]) => ({ category, item, regular, express }));

/* ─── DOM refs ─────────────────────────────────────────────────── */
const categoryTabs     = document.querySelector("#category-tabs");
const searchInput      = document.querySelector("#catalogue-search");
const priceGrid        = document.querySelector("#price-grid");
const catalogueSummary = document.querySelector("#catalogue-summary");
const emptyState       = document.querySelector("#empty-state");
const serviceCategoryLinks = document.querySelectorAll("[data-category-link]");
const whatsappLinks    = document.querySelectorAll("[data-whatsapp-link]");
const catalogueWhatsapp = document.querySelector("#catalogue-whatsapp");
const menuToggle       = document.querySelector(".menu-toggle");
const menuToggleLabel  = menuToggle.querySelector(".visually-hidden");
const primaryNav       = document.querySelector(".primary-nav");

let selectedCategory = "all";

/* ─── Helpers ───────────────────────────────────────────────────── */
const money = (v) => `$${Number(v).toFixed(2)}`;
const whatsappBaseUrl = "https://wa.me/mrjeffsanfrancisco";

const WA_ICON = `<svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;

function getWhatsappMessage(category) {
  if (category === "all") return "Hola, quisiera información sobre los servicios de Mr Jeff San Francisco.";
  return `Hola, quisiera consultar sobre el servicio de ${category} en Mr Jeff San Francisco.`;
}

function getItemWhatsappUrl(item, category) {
  const msg = `Hola, quisiera consultar sobre el servicio de *${item}* (${category}) en Mr Jeff San Francisco. ¿Podrían darme más información?`;
  return `${whatsappBaseUrl}?text=${encodeURIComponent(msg)}`;
}

function getCategoryColor(category) {
  return categories.find(({ id }) => id === category)?.color || "#082e63";
}

function highlight(text, query) {
  if (!query) return text;
  const esc = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${esc})`, "gi"), "<mark>$1</mark>");
}

/* ─── WhatsApp links update ─────────────────────────────────────── */
function updateWhatsappLinks() {
  const message = getWhatsappMessage(selectedCategory);
  const url = `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  const selectedLabel = categories.find(({ id }) => id === selectedCategory)?.label || "Todas";

  whatsappLinks.forEach((link) => { link.href = url; });

  catalogueWhatsapp.hidden = selectedCategory === "all";
  if (!catalogueWhatsapp.hidden) {
    catalogueWhatsapp.href = url;
    catalogueWhatsapp.innerHTML = `${WA_ICON} Consultar ${selectedLabel} por WhatsApp <span aria-hidden="true">↗</span>`;
  }
}

/* ─── Tab rendering ─────────────────────────────────────────────── */
function renderTabs() {
  categoryTabs.innerHTML = categories.map(({ id, label, color }) => {
    const dot = id !== "all"
      ? `<span class="tab-dot" style="background:${color}" aria-hidden="true"></span>`
      : "";
    return `<button class="category-tab" type="button" aria-pressed="${id === selectedCategory}" data-category="${id}">${dot}${label}</button>`;
  }).join("");
}

/* ─── Card rendering ────────────────────────────────────────────── */
function renderCard({ item, category, regular, express }, color, delay, query) {
  const waUrl = getItemWhatsappUrl(item, category);
  const expressHtml = express === null
    ? `<span class="price-card__price-value price-card__price-value--consult">Consultar</span>`
    : `<strong class="price-card__price-value">${money(express)}</strong>`;

  return `
    <article class="price-card" style="--cat-color:${color};animation-delay:${delay}ms">
      <span class="price-card__name">${highlight(item, query)}</span>
      <div class="price-card__prices">
        <div class="price-card__price-block">
          <span class="price-card__price-label">Regular</span>
          <strong class="price-card__price-value">${money(regular)}</strong>
        </div>
        <div class="price-card__price-block price-card__price-block--express">
          <span class="price-card__price-label">Express</span>
          ${expressHtml}
        </div>
      </div>
      <a class="price-card__wa-btn" href="${waUrl}" target="_blank" rel="noreferrer">
        ${WA_ICON}
        Consultar por WhatsApp
      </a>
    </article>`;
}

function renderCards() {
  const rawQuery = searchInput.value.trim();
  const query = rawQuery.toLocaleLowerCase("es");

  const filtered = prices.filter(({ category, item }) => {
    const catOk = selectedCategory === "all" || category === selectedCategory;
    const txtOk = item.toLocaleLowerCase("es").includes(query);
    return catOk && txtOk;
  });

  /* Preserve canonical category order */
  const categoryOrder = categories.filter((c) => c.id !== "all").map((c) => c.id);
  const groups = {};
  categoryOrder.forEach((cat) => {
    const entries = filtered.filter((e) => e.category === cat);
    if (entries.length) groups[cat] = entries;
  });

  const selectedLabel = categories.find(({ id }) => id === selectedCategory)?.label || "Todas";
  catalogueSummary.textContent = filtered.length
    ? `${filtered.length} tarifa${filtered.length !== 1 ? "s" : ""} · ${selectedLabel}${rawQuery ? ` · "${rawQuery}"` : ""}`
    : "Sin coincidencias en las tarifas destacadas";

  let globalIndex = 0;
  priceGrid.innerHTML = Object.keys(groups).map((cat) => {
    const entries = groups[cat];
    const color = getCategoryColor(cat);

    const header = `
      <div class="price-group-header" style="--cat-color:${color}">
        <span class="price-group-dot" aria-hidden="true"></span>
        <h3 class="price-group-label">${cat}</h3>
        <span class="price-group-count">${entries.length} servicio${entries.length !== 1 ? "s" : ""}</span>
      </div>`;

    const cards = entries.map((entry) => {
      const delay = Math.min(globalIndex * 30, 380);
      globalIndex++;
      return renderCard(entry, color, delay, rawQuery);
    }).join("");

    return header + cards;
  }).join("");

  emptyState.hidden = Boolean(filtered.length);
  priceGrid.hidden = !filtered.length;
}

/* ─── Category selection ────────────────────────────────────────── */
function selectCategory(category) {
  selectedCategory = category;
  renderTabs();
  renderCards();
  updateWhatsappLinks();
}

/* ─── Event listeners ───────────────────────────────────────────── */
categoryTabs.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;
  selectCategory(btn.dataset.category);
});

searchInput.addEventListener("input", renderCards);

serviceCategoryLinks.forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = "";
    selectCategory(button.dataset.categoryLink);
    document.querySelector("#precios").scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggleLabel.textContent = isOpen ? "Abrir navegación" : "Cerrar navegación";
  primaryNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

primaryNav.addEventListener("click", (e) => {
  if (!e.target.closest("a")) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggleLabel.textContent = "Abrir navegación";
  primaryNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
});

/* ─── Init ──────────────────────────────────────────────────────── */
renderTabs();
renderCards();
updateWhatsappLinks();
