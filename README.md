An effort to create simulation with 3D interactive elements in Three.js- JAVASCRIPT LIBRARY.
Content still in development. Any suggestion appreciated.

https://effectuall.github.io/
Email: effectuallearning@gmail.com

[EFFECTUALL](https://effectuall.com/)

# Effectual Learning - Interactive 3D Physics Simulations (i18n setup)

Dự án này cung cấp các mô phỏng vật lý 3D hỗ trợ học tập STEM.  
Website được xây dựng bằng **HTML, CSS, JS (Three.js, Bootstrap)** và hỗ trợ **đa ngôn ngữ** với [i18next](https://www.i18next.com/).

---

## 📦 Cài đặt & Chạy

### 🔹 HTML + CDN

Nếu dùng **HTML thuần** (như `index.html`), hãy thêm i18next qua CDN:

```html
<!-- i18next -->
<script src="https://unpkg.com/i18next@23.5.0/i18next.min.js"></script>
<!-- tạo file cấu hình i18n ví dụ-->
<script type="module" src="/i18n/index_i18n.js"></script>

Tạo các key-value cho ngôn ngữ trong file en.json và vi.json
```

### 🔹 React / Bundler (Vite, Webpack, Next.js...)

Cài đặt i18next qua **npm** hoặc **yarn**:

#### npm

```bash
npm install i18next
```

#### yarn

```bash
yarn add i18next
```

### 🔹Chạy dự án

#### Dùng VS Code

1. Cài extension **Live Server** trong VS Code.
2. Chuột phải vào `index.html` ➝ **Open with Live Server**.

#### Chạy server với npx serve

```bash
npx serve
```
