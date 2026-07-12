/* =========================================================
   MT PARFUM — Runtime dùng chung
   Header · Mobile menu · Cart drawer · Footer · Reveal · Toast
   ========================================================= */

/* ---------- Icons ---------- */
const IC = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  fb: '<svg viewBox="0 0 24 24" stroke-width="1.4"><path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>',
  tk: '<svg viewBox="0 0 24 24" stroke-width="1.4"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2 4 5 4.2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-4 13-9 13Z"/><path d="M4 20c2-4 5-7 9-9"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M5 12v9h14v-9"/><path d="M12 8S10 2 7 4s5 4 5 4S14 2 17 4s-5 4-5 4"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
};

const NAV = [
  { label: "Trang chủ", href: "index.html", key: "home" },
  { label: "Sản phẩm", href: "products.html", key: "products" },
  { label: "Câu chuyện thương hiệu", href: "about.html", key: "about" },
  { label: "Liên hệ", href: "contact.html", key: "contact" },
];

/* ---------- Cart state ---------- */
const CART_KEY = "mt_cart_v1";
const Cart = {
  items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  save() { localStorage.setItem(CART_KEY, JSON.stringify(this.items)); },
  add(product, variant, qty = 1) {
    const key = product.id + "-" + variant.size;
    const found = this.items.find((i) => i.key === key);
    if (found) found.qty += qty;
    else this.items.push({
      key, id: product.id, name: product.name, size: variant.size,
      price: variant.price, image: variant.image, qty,
    });
    this.save(); renderCart(); openDrawer();
  },
  changeQty(key, delta) {
    const it = this.items.find((i) => i.key === key);
    if (!it) return;
    it.qty += delta;
    if (it.qty < 1) this.items = this.items.filter((i) => i.key !== key);
    this.save(); renderCart();
  },
  remove(key) { this.items = this.items.filter((i) => i.key !== key); this.save(); renderCart(); },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  total() { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },
};

/* ---------- Build layout ---------- */
function buildLayout() {
  const page = document.body.dataset.page || "";

  /* HEADER */
  const header = document.createElement("header");
  header.className = "header";
  header.id = "appHeader";
  header.innerHTML = `
    <div class="header__inner">
      <nav class="header__nav">
        ${NAV.slice(0, 2).map((n) => `<a href="${n.href}" class="${page === n.key ? "is-active" : ""}">${n.label}</a>`).join("")}
      </nav>
      <a href="index.html" class="logo">
        <b>MT</b><span>Parfum</span>
      </a>
      <div class="header__actions">
        <nav class="header__nav" style="margin-right:10px">
          ${NAV.slice(2).map((n) => `<a href="${n.href}" class="${page === n.key ? "is-active" : ""}">${n.label}</a>`).join("")}
        </nav>
        <button class="icon-btn" aria-label="Tìm kiếm" onclick="toast('Tính năng tìm kiếm sẽ sớm ra mắt')">${IC.search}</button>
        <button class="icon-btn" aria-label="Giỏ hàng" onclick="openDrawer()">
          ${IC.cart}<span class="cart-count" id="cartCount">0</span>
        </button>
        <button class="hamburger" aria-label="Menu" onclick="openMenu()"><span></span><span></span><span></span></button>
      </div>
    </div>`;
  document.body.prepend(header);

  /* MOBILE MENU */
  const menu = document.createElement("div");
  menu.className = "mobile-menu"; menu.id = "mobileMenu";
  menu.innerHTML = `
    <div class="mobile-menu__top">
      <a href="index.html" class="logo"><b>MT</b><span>Parfum</span></a>
      <button class="close-x" onclick="closeMenu()" aria-label="Đóng">✕</button>
    </div>
    <nav>${NAV.map((n) => `<a href="${n.href}" onclick="closeMenu()">${n.label}</a>`).join("")}</nav>
    <div class="mobile-menu__foot">${SITE.phone} · ${SITE.email}</div>`;
  document.body.appendChild(menu);

  /* OVERLAY */
  const ov = document.createElement("div");
  ov.className = "overlay"; ov.id = "overlay"; ov.onclick = closeAll;
  document.body.appendChild(ov);

  /* CART DRAWER */
  const drawer = document.createElement("aside");
  drawer.className = "drawer"; drawer.id = "cartDrawer";
  drawer.innerHTML = `
    <div class="drawer__head">
      <h3>Giỏ hàng <span class="label-sm" id="drawerCount"></span></h3>
      <button class="close-x" onclick="closeDrawer()" aria-label="Đóng">✕</button>
    </div>
    <div class="drawer__body" id="drawerBody"></div>
    <div class="drawer__foot" id="drawerFoot" style="display:none">
      <div class="drawer__row"><span>Tạm tính</span><span id="drawerSub"></span></div>
      <div class="drawer__row"><span>Phí vận chuyển</span><span>Tính khi thanh toán</span></div>
      <div class="drawer__total"><span class="label-sm">Tổng cộng</span><b id="drawerTotal"></b></div>
      <button class="btn btn--solid btn--block" onclick="checkout()">Tiến hành đặt hàng</button>
      <p class="drawer__note">Miễn phí giao hàng cho đơn từ 1.000.000₫</p>
    </div>`;
  document.body.appendChild(drawer);

  /* FOOTER */
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer__news reveal">
        <h3>Gia nhập thế giới hương của MT Parfum</h3>
        <p>Đăng ký để nhận thông tin bộ sưu tập mới, ưu đãi riêng và những câu chuyện mùi hương.</p>
        <form class="news-form" onsubmit="return subscribe(event)">
          <input type="email" placeholder="Nhập email của bạn" required>
          <button class="btn btn--gold" type="submit">Đăng ký</button>
        </form>
      </div>
      <div class="footer__cols">
        <div class="footer__col">
          <a href="index.html" class="logo" style="text-align:left"><b>MT PARFUM</b><span style="letter-spacing:.4em">Fine Fragrance</span></a>
          <p style="margin-top:16px;max-width:300px">${SITE.tagline.toUpperCase()}. Nước hoa được tạo nên cho sự tinh tế, tự tin và cá tính riêng.</p>
          <div class="socials">
            <a href="${SITE.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${IC.fb}</a>
            <a href="${SITE.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${IC.ig}</a>
            <a href="${SITE.socials.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${IC.tk}</a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Khám phá</h4>
          <ul>
            <li><a href="products.html">Sản phẩm</a></li>
            <li><a href="product.html">Nomad Wood</a></li>
            <li><a href="about.html">Câu chuyện thương hiệu</a></li>
            <li><a href="contact.html">Liên hệ</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Chính sách</h4>
          <ul>
            <li><a href="policies.html#huong-dan">Hướng dẫn mua hàng</a></li>
            <li><a href="policies.html#van-chuyen">Vận chuyển</a></li>
            <li><a href="policies.html#doi-tra">Đổi trả &amp; bảo hành</a></li>
            <li><a href="policies.html#bao-mat">Bảo mật</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Liên hệ</h4>
          <p>${SITE.company}<br>${SITE.address}</p>
          <p style="margin-top:12px">${SITE.phone}<br>${SITE.email}</p>
          <p style="margin-top:8px;color:var(--gold-soft)">${SITE.madein}</p>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} MT Parfum. Bản quyền thuộc về thương hiệu MT Parfum.</span>
        <span>Thiết kế theo tinh thần tối giản · tinh tế · ấm áp.</span>
        <span>Design by Nguyễn Văn Quí 05</span>
      </div>
    </div>`;
  document.body.appendChild(footer);

  /* TOAST */
  const t = document.createElement("div");
  t.className = "toast"; t.id = "toast";
  document.body.appendChild(t);

  /* header on-dark only on home hero */
  if (document.querySelector("[data-hero-dark]")) header.classList.add("on-dark");

  renderCart();
  initScroll(header);
  initReveal();
}

/* ---------- Drawer / menu controls ---------- */
function openDrawer() { qs("#cartDrawer").classList.add("open"); qs("#overlay").classList.add("show"); lock(); }
function closeDrawer() { qs("#cartDrawer").classList.remove("open"); qs("#overlay").classList.remove("show"); unlock(); }
function openMenu() { qs("#mobileMenu").classList.add("open"); lock(); }
function closeMenu() { qs("#mobileMenu").classList.remove("open"); unlock(); }
function closeAll() { closeDrawer(); closeMenu(); closeModal && closeModal(); }
function lock() { document.body.classList.add("no-scroll"); }
function unlock() { if (!qs("#cartDrawer").classList.contains("open")) document.body.classList.remove("no-scroll"); }

/* ---------- Render cart ---------- */
function renderCart() {
  const body = qs("#drawerBody"), foot = qs("#drawerFoot");
  const badge = qs("#cartCount"), dCount = qs("#drawerCount");
  const c = Cart.count();
  badge.textContent = c; badge.classList.toggle("show", c > 0);
  dCount.textContent = c ? `(${c} sản phẩm)` : "";

  if (!Cart.items.length) {
    body.innerHTML = `<div class="drawer__empty">${IC.bag}<p style="margin-top:6px">Giỏ hàng của bạn đang trống.</p>
      <a href="products.html" class="link-underline" style="display:inline-block;margin-top:18px" onclick="closeDrawer()">Khám phá sản phẩm</a></div>`;
    foot.style.display = "none";
    return;
  }
  body.innerHTML = Cart.items.map((i) => `
    <div class="cart-item">
      <img class="cart-item__img" src="${i.image}" alt="${i.name}">
      <div class="cart-item__info">
        <h4>${i.name}</h4>
        <div class="meta">Eau de Parfum · ${i.size}</div>
        <div class="qty">
          <button onclick="Cart.changeQty('${i.key}',-1)" aria-label="Giảm">–</button>
          <span>${i.qty}</span>
          <button onclick="Cart.changeQty('${i.key}',1)" aria-label="Tăng">+</button>
        </div>
      </div>
      <div class="cart-item__right">
        <button class="remove" onclick="Cart.remove('${i.key}')">Xóa</button>
        <div class="cart-item__price">${vnd(i.price * i.qty)}</div>
      </div>
    </div>`).join("");
  foot.style.display = "block";
  qs("#drawerSub").textContent = vnd(Cart.total());
  qs("#drawerTotal").textContent = vnd(Cart.total());
}

function checkout() {
  if (!Cart.items.length) return;
  toast("Đơn hàng demo — em sẽ nối cổng thanh toán khi chị cần bán thật.");
}
function subscribe(e) { e.preventDefault(); e.target.reset(); toast("Cảm ơn bạn đã đăng ký nhận tin!"); return false; }

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const t = qs("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}

/* ---------- Sticky header ---------- */
function initScroll(header) {
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Reveal on scroll (robust, không phụ thuộc IntersectionObserver) ---------- */
let _revealBound = false;
function checkReveal() {
  const vh = window.innerHeight;
  qsa(".reveal:not(.in)").forEach((e) => {
    const r = e.getBoundingClientRect();
    if (r.top < vh * 0.9 && r.bottom > 0) e.classList.add("in");
  });
}
function initReveal() {
  checkReveal();
  // đảm bảo hiện nội dung dù có sai số layout/ảnh tải chậm
  requestAnimationFrame(checkReveal);
  setTimeout(checkReveal, 300);
  if (!_revealBound) {
    _revealBound = true;
    window.addEventListener("scroll", checkReveal, { passive: true });
    window.addEventListener("resize", checkReveal);
    window.addEventListener("load", checkReveal);
  }
}

/* ---------- Accordion (dùng chung: trang chi tiết sản phẩm, chính sách...) ---------- */
function toggleAcc(btn) {
  const item = btn.closest(".acc__item");
  const panel = item.querySelector(".acc__panel");
  const isOpen = item.classList.contains("open");
  if (isOpen) { item.classList.remove("open"); panel.style.maxHeight = 0; }
  else { item.classList.add("open"); panel.style.maxHeight = panel.scrollHeight + "px"; }
}

/* ---------- helpers ---------- */
function qs(s, r = document) { return r.querySelector(s); }
function qsa(s, r = document) { return [...r.querySelectorAll(s)]; }

document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
document.addEventListener("DOMContentLoaded", buildLayout);
