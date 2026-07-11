# MT PARFUM — Website bán hàng

Website tĩnh (HTML + CSS + JavaScript thuần), chạy được ngay không cần cài đặt.
Phong cách: tối giản, tinh tế, ấm áp — lấy bảng màu & ảnh từ bao bì Nomad Wood.

## 📂 Cấu trúc

```
mt-parfum-web/
├── index.html          Trang chủ
├── products.html       Danh sách sản phẩm
├── product.html        Chi tiết sản phẩm (?id=nomad-wood&size=50ml)
├── about.html          Câu chuyện thương hiệu
├── contact.html        Liên hệ
└── assets/
    ├── css/style.css   Toàn bộ giao diện (bảng màu ở đầu file)
    ├── js/
    │   ├── data.js     ★ DỮ LIỆU: sản phẩm, giá, thông tin liên hệ
    │   ├── site.js     Header, menu, giỏ hàng, footer (dùng chung)
    │   ├── catalog.js  Lưới sản phẩm + Xem nhanh
    │   └── product.js  Trang chi tiết
    └── images/         Ảnh sản phẩm (đã đặt tên theo nội dung)
```

## ✏️ Cách chỉnh sửa thường gặp

**Đổi giá / sửa nội dung sản phẩm:** mở `assets/js/data.js`, sửa trong `PRODUCTS`.
Giá đang để tạm: 10ml = 250.000₫, 50ml = 690.000₫, 100ml = 1.090.000₫ — chị đổi lại theo giá thật.

**Thêm sản phẩm mới:** copy 1 khối `{...}` trong `PRODUCTS`, đổi `id`, `name`, ảnh và giá.
Trang chủ và trang Sản phẩm sẽ tự hiển thị thêm — không cần sửa gì khác (component tái sử dụng).

**Đổi thông tin liên hệ / mạng xã hội:** sửa `SITE` ở đầu `data.js`
(số điện thoại, email, địa chỉ, link Facebook/Instagram/TikTok).

## 👀 Xem thử trên máy

Mở Terminal, chạy trong thư mục này:

```
python3 -m http.server 8848
```

Rồi mở trình duyệt vào: http://127.0.0.1:8848
(Nếu ảnh chưa cập nhật sau khi sửa, bấm Cmd+Shift+R để tải lại bỏ cache.)

## 🌐 Đưa lên mạng (miễn phí)

Kéo–thả cả thư mục `mt-parfum-web` vào https://app.netlify.com/drop
→ có link web ngay trong 1 phút. (Hoặc dùng Vercel, Cloudflare Pages...)

## 🛒 Ghi chú chức năng

- Giỏ hàng lưu bằng localStorage của trình duyệt (chưa nối cổng thanh toán).
  Khi cần bán thật (thanh toán online, quản lý đơn), có thể nâng cấp lên
  Next.js/Shopify — cấu trúc hiện tại đã tách component nên nâng cấp thuận lợi.
- Ô tìm kiếm, đăng ký nhận tin, form liên hệ hiện là demo (hiện thông báo),
  chưa gửi dữ liệu về server.
```
