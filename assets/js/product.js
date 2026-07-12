/* =========================================================
   MT PARFUM — Trang chi tiết sản phẩm
   ========================================================= */

let PD = { product: null, variantIndex: 0, galleryIndex: 0, qty: 1 };

function initProduct() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || PRODUCTS[0].id;
  PD.product = getProduct(id);
  const size = params.get("size");
  const sizeIdx = size ? PD.product.variants.findIndex((v) => v.size === size) : -1;
  PD.variantIndex = sizeIdx >= 0 ? sizeIdx : (1 < PD.product.variants.length ? 1 : 0); // mặc định 50ml
  renderProduct();
}

function currentVariant() { return PD.product.variants[PD.variantIndex]; }

function renderProduct() {
  const p = PD.product, v = currentVariant();
  document.title = `${p.name} — ${p.type} | MT Parfum`;
  const root = qs("#pdp");
  root.innerHTML = `
    <div class="wrap pdp">
      <div class="breadcrumb reveal">
        <a href="index.html">Trang chủ</a> / <a href="products.html">Sản phẩm</a> / <span>${p.name}</span>
      </div>
      <div class="pdp__grid">
        <div class="gallery reveal">
          <div class="gallery__main" id="galMain" onclick="toggleZoom()">
            <img id="galImg" src="${v.gallery[0]}" alt="${p.name} ${v.size}">
          </div>
          <div class="gallery__thumbs" id="galThumbs"></div>
        </div>

        <div class="pdp__info reveal d1">
          <div class="type">${p.type} · ${p.family}</div>
          <h1>${p.name}</h1>
          <p class="lead">${p.intro}</p>
          <div class="pdp__price" id="pdPrice">${vnd(v.price)} <small>/ ${v.size}</small></div>

          <div class="opt-label">Chọn dung tích</div>
          <div class="pills" id="pdPills"></div>

          <div class="pdp__buy">
            <div class="qty">
              <button onclick="pdQty(-1)" aria-label="Giảm">–</button>
              <span id="pdQtyVal">1</span>
              <button onclick="pdQty(1)" aria-label="Tăng">+</button>
            </div>
            <button class="btn btn--outline" onclick="pdAdd()">Thêm vào giỏ</button>
            <button class="btn btn--solid" onclick="pdBuyNow()">Mua ngay</button>
          </div>

          <ul class="pdp__meta">
            <li>${IC.check} Hàng chính hãng · Cam kết 100% nước hoa thật</li>
            <li>${IC.truck} Giao hàng toàn quốc · Miễn phí cho đơn từ 1.000.000₫</li>
            <li>${IC.gift} Đóng gói quà tặng sang trọng kèm thiệp cảm ơn</li>
          </ul>

          <div class="acc" id="pdAcc">
            ${Object.entries(p.details).map(([title, html], i) => `
              <div class="acc__item ${i === 0 ? "open" : ""}">
                <button class="acc__head" onclick="toggleAcc(this)">${title}<span class="plus">+</span></button>
                <div class="acc__panel"><div class="acc__panel-inner">${html}</div></div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </div>

    <section class="section related">
      <div class="wrap">
        <div class="sec-head reveal"><span class="eyebrow">Có thể bạn thích</span><h2>Khám phá thêm</h2></div>
        <div class="grid-products" id="relatedGrid"></div>
      </div>
    </section>`;

  renderThumbs();
  renderPills();
  openFirstPanel();

  // related = tất cả sản phẩm (hiện có 1) — cấu trúc sẵn cho nhiều SP
  renderGrid("#relatedGrid", PRODUCTS);
  initReveal();
}

function renderThumbs() {
  const v = currentVariant();
  qs("#galThumbs").innerHTML = v.gallery.map((src, i) => `
    <button class="${i === PD.galleryIndex ? "active" : ""}" onclick="galSelect(${i})">
      <img src="${src}" alt="Ảnh ${i + 1}">
    </button>`).join("");
}
function galSelect(i) {
  PD.galleryIndex = i;
  const img = qs("#galImg");
  img.style.opacity = 0;
  setTimeout(() => { img.src = currentVariant().gallery[i]; img.style.opacity = 1; }, 180);
  qsa("#galThumbs button").forEach((b, idx) => b.classList.toggle("active", idx === i));
  qs("#galMain").classList.remove("zoomed");
}
function toggleZoom() { qs("#galMain").classList.toggle("zoomed"); }

function renderPills() {
  qs("#pdPills").innerHTML = PD.product.variants.map((vr, i) => `
    <button class="pill ${i === PD.variantIndex ? "active" : ""}" onclick="pdSelect(${i})">
      ${vr.size}<small>${vnd(vr.price)}</small>
    </button>`).join("");
}
function pdSelect(i) {
  PD.variantIndex = i; PD.galleryIndex = 0;
  const v = currentVariant();
  qs("#pdPrice").innerHTML = `${vnd(v.price)} <small>/ ${v.size}</small>`;
  const img = qs("#galImg");
  img.style.opacity = 0;
  setTimeout(() => { img.src = v.gallery[0]; img.style.opacity = 1; }, 180);
  renderThumbs(); renderPills();
}
function pdQty(d) { PD.qty = Math.max(1, PD.qty + d); qs("#pdQtyVal").textContent = PD.qty; }
function pdAdd() { Cart.add(PD.product, currentVariant(), PD.qty); }
function pdBuyNow() { Cart.add(PD.product, currentVariant(), PD.qty); setTimeout(checkout, 400); }

function openFirstPanel() {
  const first = qs("#pdAcc .acc__item.open .acc__panel");
  if (first) first.style.maxHeight = first.scrollHeight + "px";
}

document.addEventListener("DOMContentLoaded", initProduct);
