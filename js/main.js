/* =========================================================
   Nova Informática — comportamento do site
   ========================================================= */

/* ---------- biblioteca mínima de ícones (stroke, 24x24) ---------- */
const ICONS = {
  phone: '<path d="M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2z"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="1.5"/><path d="M8 21h8M12 17v4"/>',
  wifi: '<path d="M2 8.5a16 16 0 0 1 20 0M5.5 12a11 11 0 0 1 13 0M9 15.5a6 6 0 0 1 6 0"/><circle cx="12" cy="19" r="1"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12l-1 5a5 5 0 0 1-5 4h0a5 5 0 0 1-5-4L6 8z"/><path d="M12 17v4"/>',
  tool: '<path d="M14.5 3.5a4 4 0 0 0-5.4 4.8L3 14.4V19h4.6l6.1-6.1a4 4 0 0 0 4.8-5.4l-2.9 2.9-2.4-2.4 2.9-2.9z"/>',
  gamepad: '<rect x="2.5" y="7.5" width="19" height="10" rx="4"/><path d="M7 10.5v3M5.5 12h3M15.5 11h.01M18 13h.01"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  mouse: '<rect x="7" y="3" width="10" height="18" rx="5"/><path d="M12 3v7"/>',
  recycle: '<path d="M7 4.5 4.5 9M4.5 9 9 9.5M4.5 9 9 6.5"/><path d="M17 19.5 19.5 15M19.5 15 15 14.5M19.5 15 15 17.5"/><path d="M4.5 9a8 8 0 0 1 13.9-5M19.5 15a8 8 0 0 1-13.9 5"/>',
  landline: '<path d="M5 8c0-2 1.5-4 7-4s7 2 7 4v2c-2 1-4 1.5-7 1.5S7 11 5 10z"/><rect x="4" y="16" width="16" height="4" rx="1"/><path d="M8 12.5V16M16 12.5V16"/>',
  whatsapp: '<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.7 14.2c-.3.7-1.5 1.4-2.1 1.5-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.3.6.9 2.1 1 2.2.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.6.3.1.2.1.9-.2 1.6z"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M14 21v-8h2.7l.4-3.2H14V7.7c0-.9.3-1.6 1.6-1.6H17V3.2C16.6 3.1 15.6 3 14.4 3 12 3 10.4 4.4 10.4 7.4v2.4H7.7V13h2.7v8z" fill="currentColor" stroke="none"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m4 6.5 8 6 8-6"/>',
  mappin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  check: '<path d="M4 12.5 9 17.5 20 6.5"/>',
  chevrondown: '<path d="m5 8 7 7 7-7"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.35-4.35"/>',
  shield: '<path d="M12 3 4.5 6v6c0 5 3.4 8.5 7.5 9 4.1-.5 7.5-4 7.5-9V6z"/><path d="m9 12 2 2 4-4"/>',
  store: '<path d="M4 9.5 5 4h14l1 5.5"/><path d="M4 9.5A2.2 2.2 0 0 0 8.4 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4-.5"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>',
  laptop: '<rect x="4" y="4" width="16" height="10.5" rx="1"/><path d="M2 18.5h20l-1.5-4H3.5z"/>'
};

function icon(name, cls){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="${cls || ''}" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* ---------- logo (SVG inline, reaproveita as cores reais da marca) ---------- */
function logoSVG(){
  return `
  <svg viewBox="0 0 190 46" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nova Informática">
    <defs>
      <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#F4F5F6"/>
        <stop offset="0.5" stop-color="#B8BEC5"/>
        <stop offset="1" stop-color="#8B929B"/>
      </linearGradient>
    </defs>
    <text x="0" y="27" font-family="Space Grotesk, sans-serif" font-size="27" font-weight="700"
      fill="url(#chrome)" stroke="#D5162F" stroke-width="0.8">nova</text>
    <rect x="2" y="33" width="120" height="13" fill="#0B62D6"/>
    <text x="7" y="42.5" font-family="Space Grotesk, sans-serif" font-size="10.5" font-weight="700" fill="#fff" letter-spacing="0.5">informática</text>
  </svg>`;
}

/* ---------- utilidades ---------- */
function formatPrice(v){
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function waLink(message){
  const base = `https://api.whatsapp.com/send/?phone=${STORE.whatsapp}&type=phone_number&app_absent=0`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
}
function getParam(name){
  return new URLSearchParams(window.location.search).get(name);
}

/* ---------- injeta partes repetidas (logo, nav de categorias, whatsapp flutuante) ---------- */
function mountChrome(){
  document.querySelectorAll("[data-logo]").forEach(el => el.innerHTML = logoSVG());

  document.querySelectorAll("[data-icon]").forEach(el => {
    el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon));
  });

  document.querySelectorAll("[data-cat-nav]").forEach(el => {
    el.innerHTML = CATEGORIES.map(c =>
      `<li><a href="categoria.html?cat=${c.slug}">${c.name}</a></li>`
    ).join("");
  });

  document.querySelectorAll("[data-cat-bar]").forEach(el => {
    el.innerHTML = CATEGORIES.map(c =>
      `<li><a href="categoria.html?cat=${c.slug}">${c.name}</a></li>`
    ).join("");
  });

  document.querySelectorAll("[data-wa-float]").forEach(el => {
    el.href = waLink("Olá! Vim pelo site e gostaria de mais informações.");
  });

  document.querySelectorAll("[data-wa-link]").forEach(el => {
    el.href = waLink(el.dataset.waLink || "Olá! Vim pelo site e gostaria de mais informações.");
  });

  document.querySelectorAll("[data-store-phones]").forEach(el => {
    el.textContent = STORE.phones.join(" | ");
  });
  document.querySelectorAll("[data-store-email]").forEach(el => {
    el.textContent = STORE.email;
    if (el.tagName === "A") el.href = `mailto:${STORE.email}`;
  });
  document.querySelectorAll("[data-store-address]").forEach(el => el.textContent = STORE.address);

  highlightActiveNav();
}

function highlightActiveNav(){
  const page = window.location.pathname.split("/").pop() || "index.html";
  const cat = getParam("cat");
  document.querySelectorAll(".main-nav a, .cat-bar a").forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;
    const isCatLink = href.includes("categoria.html?cat=");
    if (isCatLink && cat && href.endsWith(`cat=${cat}`)) {
      a.classList.add("is-active");
    } else if (!isCatLink && href === page) {
      a.classList.add("is-active");
    }
  });
}

/* ---------- menu mobile ---------- */
function mountMenuToggle(){
  const btn = document.querySelector(".menu-toggle");
  const header = document.querySelector(".site-header");
  if (!btn || !header) return;
  btn.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* ---------- grid de categorias na home ---------- */
function mountCategoryGrid(){
  const el = document.querySelector("[data-category-grid]");
  if (!el) return;
  el.innerHTML = CATEGORIES.map(c => `
    <a class="cat-tile" href="categoria.html?cat=${c.slug}">
      ${icon(c.icon)}
      <div>
        <strong>${c.name}</strong><br>
        <small>${c.short}</small>
      </div>
    </a>
  `).join("");
}

/* ---------- destaques na home (amostra de produtos) ---------- */
function mountFeatured(){
  const el = document.querySelector("[data-featured]");
  if (!el) return;
  const featured = PRODUCTS.filter(p => p.tag).slice(0, 4);
  el.innerHTML = featured.map(p => productCard(p)).join("");
}

function productCard(p){
  const cat = CATEGORIES.find(c => c.slug === p.cat);
  return `
  <div class="product-card">
    ${p.tag ? `<span class="product-card__tag">${p.tag}</span>` : ""}
    <div class="product-card__thumb">${icon(cat ? cat.icon : "cpu")}</div>
    <div class="product-card__body">
      <span class="product-card__cat">${cat ? cat.name : ""}</span>
      <span class="product-card__name">${p.name}</span>
      <span class="product-card__price">${formatPrice(p.price)}<small>à vista</small></span>
      <a class="btn btn-secondary btn-block" href="${waLink('Olá! Tenho interesse em: ' + p.name)}" target="_blank" rel="noopener">
        Consultar no WhatsApp
      </a>
    </div>
  </div>`;
}

/* ---------- página de categoria ---------- */
function mountCategoryPage(){
  const wrap = document.querySelector("[data-category-page]");
  if (!wrap) return;

  const slug = getParam("cat") || CATEGORIES[0].slug;
  const category = CATEGORIES.find(c => c.slug === slug) || CATEGORIES[0];

  document.querySelectorAll("[data-cat-title]").forEach(el => el.textContent = category.name);
  document.querySelectorAll("[data-cat-desc]").forEach(el => el.textContent = category.short);
  document.title = `${category.name} | ${STORE.name}`;

  const grid = wrap.querySelector("[data-product-grid]");
  const count = wrap.querySelector("[data-product-count]");
  const sortSelect = wrap.querySelector("[data-sort]");

  function render(){
    let items = PRODUCTS.filter(p => p.cat === category.slug);
    const sort = sortSelect ? sortSelect.value : "relevancia";
    if (sort === "menor-preco") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "maior-preco") items = [...items].sort((a, b) => b.price - a.price);
    if (sort === "nome") items = [...items].sort((a, b) => a.name.localeCompare(b.name));

    count.textContent = `${items.length} produto${items.length === 1 ? "" : "s"}`;

    if (items.length === 0){
      grid.innerHTML = "";
      grid.insertAdjacentHTML("afterend", `
        <div class="empty-state" data-empty>
          ${icon("search")}
          <p>Ainda não há itens cadastrados nesta categoria.</p>
          <a class="btn btn-primary" href="${waLink('Olá! Vi a categoria ' + category.name + ' no site e queria saber o que tem disponível.')}" target="_blank" rel="noopener">Perguntar no WhatsApp</a>
        </div>`);
    } else {
      const prev = wrap.querySelector("[data-empty]");
      if (prev) prev.remove();
      grid.innerHTML = items.map(p => productCard(p)).join("");
    }
  }

  if (sortSelect) sortSelect.addEventListener("change", render);
  render();
}

/* ---------- produto em 3D que reage ao mouse (estilo Apple) ----------
   Ao passar o mouse sobre a ilustração do hero, ela inclina seguindo
   a posição do cursor (rotateX/rotateY), como nas páginas de produto
   da Apple. Sem hover disponível (touch) ou com "reduzir movimento"
   ligado, o produto fica parado na posição de descanso.            */
function mountHeroTilt(){
  const wrap = document.querySelector("[data-tilt]");
  const obj = document.querySelector("[data-tilt-object]");
  if (!wrap || !obj) return;

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const MAX_TILT = 14; // graus

  function onMove(e){
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0 a 1
    const y = (e.clientY - rect.top) / rect.height;    // 0 a 1
    const rotY = (x - 0.5) * MAX_TILT * 2;
    const rotX = (0.5 - y) * MAX_TILT * 2;
    obj.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.04,1.04,1.04)`;
    obj.style.setProperty("--gx", `${x * 100}%`);
    obj.style.setProperty("--gy", `${y * 100}%`);
  }

  function onEnter(){ obj.classList.add("is-active"); }
  function onLeave(){
    obj.classList.remove("is-active");
    obj.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }

  function setup(){
    wrap.removeEventListener("mousemove", onMove);
    wrap.removeEventListener("mouseenter", onEnter);
    wrap.removeEventListener("mouseleave", onLeave);
    onLeave();
    if (canHover.matches && !reduced.matches){
      wrap.addEventListener("mousemove", onMove);
      wrap.addEventListener("mouseenter", onEnter);
      wrap.addEventListener("mouseleave", onLeave);
    }
  }

  setup();
  canHover.addEventListener("change", setup);
  reduced.addEventListener("change", setup);
}

/* ---------- formulário de newsletter (front-end apenas) ---------- */
function mountNewsletterForm(){
  document.querySelectorAll("[data-newsletter-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector("input[type=email]");
      const msg = form.querySelector(".form-msg");
      if (!input.checkValidity()){
        msg.textContent = "Digite um e-mail válido.";
        return;
      }
      msg.textContent = "Cadastro realizado! Em breve você recebe nossas promoções.";
      form.reset();
    });
  });
}

/* ---------- formulário de contato (front-end apenas, envia via WhatsApp) ---------- */
function mountContactForm(){
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const success = document.querySelector("[data-form-success]");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach(field => {
      const wrapper = field.closest(".form-field");
      if (!field.checkValidity()){
        valid = false;
        wrapper.classList.add("has-error");
      } else {
        wrapper.classList.remove("has-error");
      }
    });
    if (!valid) return;

    const name = form.querySelector("#nome").value;
    const subject = form.querySelector("#assunto").value;
    const message = form.querySelector("#mensagem").value;
    const text = `Olá! Meu nome é ${name}.\nAssunto: ${subject}\n${message}`;

    success.classList.add("is-visible");
    success.querySelector("a").href = waLink(text);
    form.reset();
  });
}

/* ---------- abas de políticas ---------- */
function mountPolicyTabs(){
  const tabs = document.querySelectorAll("[data-policy-tab]");
  if (!tabs.length) return;

  const wanted = getParam("tab");
  if (wanted && document.querySelector(`[data-policy-panel="${wanted}"]`)){
    tabs.forEach(t => t.classList.remove("is-active"));
    document.querySelectorAll("[data-policy-panel]").forEach(p => p.classList.remove("is-active"));
    document.querySelector(`[data-policy-tab="${wanted}"]`).classList.add("is-active");
    document.querySelector(`[data-policy-panel="${wanted}"]`).classList.add("is-active");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("is-active"));
      document.querySelectorAll("[data-policy-panel]").forEach(p => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.querySelector(`[data-policy-panel="${tab.dataset.policyTab}"]`).classList.add("is-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountChrome();
  mountMenuToggle();
  mountCategoryGrid();
  mountFeatured();
  mountHeroTilt();
  mountCategoryPage();
  mountNewsletterForm();
  mountContactForm();
  mountPolicyTabs();
});
