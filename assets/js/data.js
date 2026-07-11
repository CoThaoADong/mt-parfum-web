/* =========================================================
   MT PARFUM — Dữ liệu chung
   → Sửa giá, thêm sản phẩm mới ngay tại file này.
   ========================================================= */

const SITE = {
  brand: "MT PARFUM",
  sub: "Fine Fragrance",
  tagline: "Fine fragrance made with character",
  phone: "0909 000 000",
  email: "hello@mtparfum.vn",
  address: "366/20H Lê Văn Quới, P. Bình Hưng Hòa, TP. Hồ Chí Minh",
  company: "Công ty TNHH Dược Mỹ Phẩm DC COS (SUNCOS GROUP)",
  madein: "Sản xuất tại Việt Nam",
  socials: { facebook: "#", instagram: "#", tiktok: "#" },
};

/* Định dạng tiền Việt */
function vnd(n) {
  return n.toLocaleString("vi-VN") + "₫";
}

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
      "Hương gỗ ấm áp, nam tính và lưu hương lâu — dấu ấn riêng cho người tìm kiếm sự tinh tế, tự tin và khác biệt.",
    intro:
      "Nomad Wood mở đầu bằng làn hương gỗ trầm ấm, quyện cùng nốt hương thiên nhiên tinh tế, để lại dư hương sang trọng và bền bỉ suốt cả ngày. Một mùi hương được tạo nên cho những người tự tin viết nên phong cách của riêng mình.",
    card: "assets/images/beige_100_box.jpg",
    variants: [
      {
        size: "10ml",
        fl: "0.34 FL.OZ",
        price: 250000,
        compareAt: 0,
        image: "assets/images/dark_10_marble.jpg",
        gallery: [
          "assets/images/dark_10_marble.jpg",
          "assets/images/dark_10_silk.jpg",
          "assets/images/dark_10_marble2.jpg",
          "assets/images/dark_10_open.jpg",
          "assets/images/dark_thankyou_10.jpg",
        ],
      },
      {
        size: "50ml",
        fl: "1.7 FL.OZ",
        price: 690000,
        compareAt: 0,
        image: "assets/images/dark_50_box.jpg",
        gallery: [
          "assets/images/dark_50_box.jpg",
          "assets/images/dark_50_sphere.jpg",
          "assets/images/dark_50_wood.jpg",
          "assets/images/panel_50.jpg",
          "assets/images/beige_duo_spec.jpg",
        ],
      },
      {
        size: "100ml",
        fl: "3.4 FL.OZ",
        price: 1090000,
        compareAt: 0,
        image: "assets/images/beige_100_box.jpg",
        gallery: [
          "assets/images/beige_100_box.jpg",
          "assets/images/beige_100_wide.jpg",
          "assets/images/beige_100_wave.jpg",
          "assets/images/panel_100.jpg",
          "assets/images/dark_thankyou_50100.jpg",
        ],
      },
    ],
    details: {
      "Mô tả sản phẩm":
        "<p>MT Parfum – Nomad Wood là dòng nước hoa Eau de Parfum cao cấp mang hương gỗ ấm, sang trọng và lưu hương lâu. Lấy cảm hứng từ thiên nhiên, mùi hương được thiết kế dành cho cá tính riêng của mỗi người — tinh tế, tự tin và khác biệt.</p><p style='margin-top:10px'>Chai thủy tinh dày dặn, nắp kim loại tông đồng/xám khói, nhãn giấy trắng ngà — trọn vẹn tinh thần tối giản, ấm áp của thương hiệu.</p>",
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
