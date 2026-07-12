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
      "Hương gỗ hiện đại, thanh lịch và đầy bản lĩnh — dành cho những người yêu sự tối giản nhưng khác biệt, phù hợp cho cả nam và nữ.",
    intro:
      "Nomad Wood là mùi hương dành cho những người yêu thích sự tối giản nhưng khác biệt. Một hương thơm mang đậm chất gỗ hiện đại, cân bằng giữa nét thanh lịch, mạnh mẽ và cuốn hút — không quá nồng, không quá ngọt, tạo dấu ấn bằng cảm giác sạch sẽ, tinh tế và sang trọng.",
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
        "<p>Nomad Wood là mùi hương dành cho những người yêu thích sự tối giản nhưng khác biệt. Một hương thơm mang đậm chất gỗ hiện đại, cân bằng giữa nét thanh lịch, mạnh mẽ và cuốn hút, phù hợp cho cả nam và nữ.</p><p style='margin-top:10px'>Không quá nồng, không quá ngọt, Nomad Wood tạo nên dấu ấn bằng cảm giác sạch sẽ, tinh tế và sang trọng. Đây là lựa chọn lý tưởng cho môi trường công sở, những buổi gặp gỡ đối tác hay các dịp đặc biệt, đồng thời cũng đủ linh hoạt để trở thành mùi hương sử dụng hằng ngày.</p><p style='margin-top:10px'>Chai thủy tinh dày dặn, nắp kim loại tông đồng/xám khói, nhãn giấy trắng ngà — trọn vẹn tinh thần tối giản, ấm áp của thương hiệu.</p>",
      "Tầng hương":
        "<h4 style='font-family:var(--serif);font-size:17px;margin-bottom:6px;color:var(--ink)'>Hương đầu</h4><ul><li>Bạch đậu khấu (Cardamom)</li><li>Lá Violet</li><li>Hoa Iris</li></ul><p style='margin:8px 0 18px'>Sự kết hợp của bạch đậu khấu cay nhẹ cùng lá violet và hoa iris mang đến cảm giác tươi mới, thanh lịch và đầy cuốn hút ngay từ những giây phút đầu tiên.</p><h4 style='font-family:var(--serif);font-size:17px;margin-bottom:6px;color:var(--ink)'>Hương giữa</h4><ul><li>Gỗ đàn hương Úc (Australian Sandalwood)</li><li>Gỗ tuyết tùng (Cedarwood)</li><li>Papyrus</li></ul><p style='margin:8px 0 18px'>Gỗ đàn hương Úc mềm mại hòa quyện cùng gỗ tuyết tùng và papyrus tạo nên chiều sâu, mang đến cảm giác khô ráo, sạch sẽ và đầy nam tính nhưng vẫn đủ tinh tế cho cả nữ giới.</p><h4 style='font-family:var(--serif);font-size:17px;margin-bottom:6px;color:var(--ink)'>Hương cuối</h4><ul><li>Da thuộc (Leather Accord)</li><li>Xạ hương (Musk)</li><li>Hổ phách (Amber)</li></ul><p style='margin-top:8px'>Sự ấm áp của hổ phách, nét sang trọng của da thuộc và sự mềm mại của xạ hương lưu lại trên da một cách tự nhiên, tạo cảm giác gần gũi nhưng khó quên.</p>",
      "Phong cách &amp; Độ lưu hương":
        "<ul><li>Hương gỗ hiện đại (Modern Woody)</li><li>Thanh lịch – Sang trọng – Cá tính</li><li>Unisex, phù hợp cho cả nam và nữ</li><li>Thích hợp sử dụng quanh năm, đặc biệt vào mùa thu, đông hoặc trong môi trường máy lạnh</li></ul><p style='margin-top:16px'><b>Lưu hương:</b> khoảng 8–12 giờ (tùy cơ địa và môi trường sử dụng).<br><b>Tỏa hương:</b> trong phạm vi khoảng một cánh tay trong những giờ đầu, sau đó trở nên nhẹ nhàng và gần gũi.</p><p style='margin-top:16px'><b>Dành cho ai?</b> Nomad Wood dành cho những người theo đuổi phong cách tối giản, yêu thích sự tinh tế và muốn tạo dấu ấn bằng một mùi hương khác biệt — không chỉ là một chai nước hoa mà còn là tuyên ngôn về cá tính, sự tự tin và phong cách sống hiện đại.</p>",
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
