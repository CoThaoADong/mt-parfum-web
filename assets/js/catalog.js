/* =========================================================
   MT PARFUM — Lưới sản phẩm + Quick View
   ========================================================= */

function productCard(p, i) {
  const { min, max } = priceRange(p);
  const priceTxt = min === max ? vnd(min) : `${vnd(min)} – ${vnd(max)}`;
  return `
  <article class="card reveal ${i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : ""}">
    <div class="card__media">
      ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ""}
      <a href="product.html?id=${p.id}"><img src="${p.card}" alt="${p.name} ${p.type}"></a>
      <div class="card__quick">
        <button class="btn qv-btn" onclick="openQuick('${p.id}')">Xem nhanh</button>
        <a class="btn btn--solid" href="product.html?id=${p.id}">Chi tiết</a>
      </div>
    </div>
    <div class="card__body">
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="type">${p.type} · ${p.family}</div>
      <div class="card__sizes">${p.variants.map((v) => `<span>${v.size}</span>`).join("")}</div>
      <div class="card__price">${priceTxt}</div>
    </div>
  </article>`;
}

function renderGrid(selector, list = PRODUCTS) {
  const el = qs(selector);
  if (!el) return;
  el.innerHTML = list.map((p, i) => productCard(p, i)).join("");
  initReveal();
}

/* ---------- Card theo từng dung tích (dùng cho trang chủ) ---------- */
function variantCard(p, v, i) {
  const href = `product.html?id=${p.id}&size=${v.size}`;
  return `
  <article class="card reveal ${i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : ""}">
    <div class="card__media">
      <span class="card__badge">${v.size}</span>
      <a href="${href}"><img src="${v.image}" alt="${p.name} ${v.size}"></a>
      <div class="card__quick">
        <button class="btn qv-btn" onclick="quickAddVariant('${p.id}','${v.size}')">Thêm vào giỏ</button>
        <a class="btn btn--solid" href="${href}">Chi tiết</a>
      </div>
    </div>
    <div class="card__body">
      <h3><a href="${href}">${p.name}</a></h3>
      <div class="type">Eau de Parfum · ${v.fl}</div>
      <div class="card__price">${vnd(v.price)} <small>/ ${v.size}</small></div>
    </div>
  </article>`;
}
function renderVariantCards(selector, p = PRODUCTS[0]) {
  const el = qs(selector);
  if (!el) return;
  el.innerHTML = p.variants.map((v, i) => variantCard(p, v, i)).join("");
  initReveal();
}
function quickAddVariant(id, size) {
  const p = getProduct(id);
  const v = p.variants.find((x) => x.size === size) || p.variants[0];
  Cart.add(p, v);
}

/* ---------- Quick View modal ---------- */
let QV = { product: null, variantIndex: 0 };

function ensureModal() {
  if (qs("#quickModal")) return;
  const m = document.createElement("div");
  m.className = "modal"; m.id = "quickModal";
  m.innerHTML = `
    <div class="modal__box">
      <button class="modal__close" onclick="closeModal()" aria-label="Đóng">✕</button>
      <div class="modal__media"><img id="qvImg" src="" alt=""></div>
      <div class="modal__info" id="qvInfo"></div>
    </div>`;
  m.addEventListener("click", (e) => { if (e.target === m) closeModal(); });
  document.body.appendChild(m);
}

function openQuick(id) {
  ensureModal();
  QV.product = getProduct(id);
  QV.variantIndex = 1 < QV.product.variants.length ? 1 : 0; // mặc định 50ml
  renderQuick();
  qs("#quickModal").classList.add("open"); lock();
}

function renderQuick() {
  const p = QV.product, v = p.variants[QV.variantIndex];
  qs("#qvImg").src = v.image; qs("#qvImg").alt = `${p.name} ${v.size}`;
  qs("#qvInfo").innerHTML = `
    <div class="type" style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--bronze);margin-bottom:8px">${p.type}</div>
    <h2 style="font-size:34px;margin-bottom:10px">${p.name}</h2>
    <p style="color:var(--ink-soft);font-size:14.5px;margin-bottom:18px">${p.short}</p>
    <div class="pdp__price" style="font-size:28px;margin-bottom:20px">${vnd(v.price)} <small>/ ${v.size}</small></div>
    <div class="opt-label">Dung tích</div>
    <div class="pills" style="margin-bottom:24px">
      ${p.variants.map((vr, idx) => `
        <button class="pill ${idx === QV.variantIndex ? "active" : ""}" onclick="qvSelect(${idx})">
          ${vr.size}<small>${vnd(vr.price)}</small>
        </button>`).join("")}
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn--solid" style="flex:1" onclick="qvAdd()">Thêm vào giỏ</button>
      <a class="btn btn--outline" href="product.html?id=${p.id}">Xem chi tiết</a>
    </div>`;
}
function qvSelect(idx) { QV.variantIndex = idx; renderQuick(); }
function qvAdd() { Cart.add(QV.product, QV.product.variants[QV.variantIndex]); closeModal(); }

function closeModal() {
  const m = qs("#quickModal");
  if (m) m.classList.remove("open");
  if (!qs("#cartDrawer")?.classList.contains("open")) unlock();
}
