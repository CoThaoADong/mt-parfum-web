/* =========================================================
   MT PARFUM — Dữ liệu chung
   → Sửa giá, thêm sản phẩm mới ngay tại file này.
   ========================================================= */

const SITE = {
  brand: "MT PARFUM",
  sub: "Fine Fragrance",
  tagline: "Fine fragrance made with character",
  phone: "0799 909 698",
  email: "hello@mtparfum.vn",
  address: "366/20H Lê Văn Quới, P. Bình Hưng Hòa, TP. Hồ Chí Minh",
  company: "Công ty TNHH Dược Mỹ Phẩm DC COS",
  madein: "Sản xuất tại Việt Nam",
  socials: { facebook: "#", instagram: "#", tiktok: "https://www.tiktok.com/@giohangcuamtparfum" },

  /* ⬇️ CHƯA CÔNG BỐ GIÁ: để false → web ẩn giá, hiện "Liên hệ" + nút đặt hàng qua Zalo.
        Khi nào có giá chính thức, đổi thành true là giá hiện lại (giá lưu sẵn trong PRODUCTS). */
  showPrice: true,
  priceNote: "Coming Soon",
  zalo: "https://zalo.me/0799909698",
};

/* Định dạng tiền Việt */
function vnd(n) {
  return n.toLocaleString("vi-VN") + "₫";
}

/* Hiển thị giá 1 dung tích (ẩn khi chưa công bố) */
function priceText(n) {
  return SITE.showPrice ? vnd(n) : SITE.priceNote;
}
/* Hiển thị khoảng giá của cả sản phẩm */
function priceRangeText(p) {
  if (!SITE.showPrice) return SITE.priceNote;
  const { min, max } = priceRange(p);
  return min === max ? vnd(min) : `${vnd(min)} – ${vnd(max)}`;
}
/* Link liên hệ đặt hàng (Zalo) */
function orderHref() { return SITE.zalo; }

/* Danh sách sản phẩm — cấu trúc tái sử dụng, thêm sản phẩm mới bằng cách push thêm object */
const PRODUCTS = [
  {
    id: "nomad-wood",
    name: "Nomad Wood",
    type: "Eau de Parfum",
    family: "Woody · Aromatic",
    badge: "Best Seller",
    tagline: "Fine fragrance made with character",
    short:
      "Hương gỗ hiện đại, thanh lịch và đầy bản lĩnh — dành cho những người yêu sự tối giản nhưng khác biệt, phù hợp cho cả nam và nữ.",
    intro:
      "Nomad Wood là mùi hương dành cho những người yêu thích sự tối giản nhưng khác biệt. Một hương thơm mang đậm chất gỗ hiện đại, cân bằng giữa nét thanh lịch, mạnh mẽ và cuốn hút — không quá nồng, không quá ngọt, tạo dấu ấn bằng cảm giác sạch sẽ, tinh tế và sang trọng.",
    card: "assets/images/that_100_chai.jpg",
    variants: [
      {
        size: "10ml",
        fl: "0.34 FL.OZ",
        price: 199000,
        compareAt: 0,
        poster: "assets/images/poster_10.jpg?v=3",
        image: "assets/images/that_10_chai.jpg",
        gallery: [
          "assets/images/that_10_chai.jpg",
          "assets/images/that_10_vial.jpg",
          "assets/images/that_10_hop.jpg",
          "assets/images/that_bo_dayodu.jpg",
          "assets/images/that_bo_sanpham.jpg",
        ],
      },
      {
        size: "50ml",
        fl: "1.7 FL.OZ",
        price: 549000,
        compareAt: 0,
        poster: "assets/images/poster_50.jpg?v=3",
        image: "assets/images/that_50_chai.jpg",
        gallery: [
          "assets/images/that_50_chai.jpg",
          "assets/images/that_50_hop.jpg",
          "assets/images/that_chai_sach.jpg",
          "assets/images/that_bo_sanpham.jpg",
          "assets/images/that_bo_dayodu.jpg",
          "assets/images/that_sp_trongxuong.jpg",
        ],
      },
      {
        size: "100ml",
        fl: "3.4 FL.OZ",
        price: 899000,
        compareAt: 0,
        poster: "assets/images/poster_100.jpg?v=3",
        image: "assets/images/that_100_chai.jpg",
        gallery: [
          "assets/images/that_100_chai.jpg",
          "assets/images/that_100_hop.jpg",
          "assets/images/that_chai_hop_xep.jpg",
          "assets/images/that_bo_dayodu.jpg",
          "assets/images/that_bo_sanpham.jpg",
          "assets/images/that_luoi_hop.jpg",
        ],
      },
    ],
    details: {
      "Mô tả sản phẩm":
        "<p>Nomad Wood là mùi hương dành cho những người yêu thích sự tối giản nhưng khác biệt. Một hương thơm mang đậm chất gỗ hiện đại, cân bằng giữa nét thanh lịch, mạnh mẽ và cuốn hút, phù hợp cho cả nam và nữ.</p><p style='margin-top:10px'>Không quá nồng, không quá ngọt, Nomad Wood tạo nên dấu ấn bằng cảm giác sạch sẽ, tinh tế và sang trọng. Đây là lựa chọn lý tưởng cho môi trường công sở, những buổi gặp gỡ đối tác hay các dịp đặc biệt, đồng thời cũng đủ linh hoạt để trở thành mùi hương sử dụng hằng ngày.</p><p style='margin-top:10px'>Chai thủy tinh dày dặn, nắp kim loại tông đồng/xám khói, nhãn giấy trắng ngà — trọn vẹn tinh thần tối giản, ấm áp của thương hiệu.</p>",
      "Tầng hương":
        "<h4 style='font-family:var(--serif);font-size:17px;margin-bottom:2px;color:var(--ink)'>Hương đầu</h4><div style='font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:8px'>0 – 20 phút đầu</div><ul><li>Bạch đậu khấu (Cardamom)</li><li>Lá violet</li><li>Hoa iris</li></ul><p style='margin:8px 0 18px'>Cay ấm nhẹ, xanh mát và sạch sẽ — cảm giác tươi mới như một căn phòng vừa lau dọn xong, thanh lịch và cuốn hút ngay từ những giây phút đầu tiên.</p><h4 style='font-family:var(--serif);font-size:17px;margin-bottom:2px;color:var(--ink)'>Hương giữa</h4><div style='font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:8px'>20 phút – vài giờ</div><ul><li>Gỗ đàn hương Úc (Australian Sandalwood)</li><li>Gỗ tuyết tùng (Cedarwood)</li><li>Papyrus</li></ul><p style='margin:8px 0 18px'>Gỗ đàn hương Úc mềm và béo nhẹ hòa cùng gỗ tuyết tùng khô sắc, thêm chút giấy và chút khói của papyrus — tạo chiều sâu khô ráo, sạch sẽ, nam tính mà vẫn đủ tinh tế cho cả nữ giới.</p><h4 style='font-family:var(--serif);font-size:17px;margin-bottom:2px;color:var(--ink)'>Hương cuối</h4><div style='font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:8px'>Lưu lại lâu nhất</div><ul><li>Da thuộc (Leather Accord)</li><li>Xạ hương (Musk)</li><li>Hổ phách (Amber)</li></ul><p style='margin-top:8px'>Da thuộc sang trọng, xạ hương mềm mại và hổ phách ấm áp lưu lại trên da một cách tự nhiên — bám vải rất tốt, gợi và khó quên.</p>",
      "Phong cách &amp; Độ lưu hương":
        "<ul><li>Hương gỗ hiện đại (Modern Woody) — gỗ khói kem, sạch mà ấm</li><li>Thanh lịch · Sang trọng · Cá tính</li><li>Unisex — phù hợp cho cả nam và nữ</li><li>Thích hợp quanh năm, đặc biệt vào thu, đông hoặc trong môi trường máy lạnh</li><li>Hợp môi trường công sở, gặp gỡ đối tác, dịp đặc biệt — và đủ linh hoạt để dùng hằng ngày</li></ul><p style='margin-top:16px'><b>Lưu hương:</b> khoảng 8–12 giờ (tùy cơ địa và môi trường sử dụng).<br><b>Tỏa hương:</b> trong phạm vi khoảng một cánh tay ở những giờ đầu, sau đó nhẹ nhàng và gần gũi hơn.</p><p style='margin-top:16px'>Ban ngày, Nomad Wood nghe chỉn chu và sạch sẽ. Về tối, khi da ấm lên, tầng da thuộc và hổ phách nổi rõ hơn — ấm, gợi, khiến người ta muốn đứng gần hơn.</p>",
      "Thành phần (Ingredients)":
        "<ul><li>Alcohol</li><li>Fragrance</li><li>Water</li><li>PPG-20 Methyl Glucose Ether</li><li>Dipropylene Glycol</li><li>Phenoxyethanol</li></ul>",
      "Hướng dẫn sử dụng (Directions)":
        "<p>Xịt một lượng vừa đủ lên các điểm mạch như cổ tay, sau tai, gáy hoặc lên quần áo, giữ khoảng cách 10–15cm. Có thể xịt lại trong ngày nếu cần.</p>",
      "Bảo quản (Storage)":
        "<p>Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, nhiệt độ dưới 35°C. Hạn dùng: xem trên bao bì.</p>",
      "Lưu ý an toàn (Caution)":
        "<ul><li>Chỉ sử dụng ngoài da.</li><li>Tránh tiếp xúc với mắt và miệng.</li><li>Để xa tầm tay trẻ em.</li><li>Ngưng sử dụng nếu có dấu hiệu kích ứng.</li><li>Chỉ tiêu kích ứng da: Không đáng kể.</li></ul>",
    },
  },
];

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
}
function priceRange(p) {
  const prices = p.variants.map((v) => v.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
