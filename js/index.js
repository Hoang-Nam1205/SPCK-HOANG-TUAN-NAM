// Dữ liệu giả lập sản phẩm
const products = [
  {
    name: "iPhone 15 Pro",
    price: "24.990.000₫",
    img: "images/iphone15.png",
  },
  {
    name: "iPad air",
    price: "20.990.000₫",
    img: "https://placehold.co/300x200?text=Samsung",
  },
  {
    name: "MacBook Air M2",
    price: "28.500.000₫",
    img: "https://placehold.co/300x200?text=MacBook",
  },
  {
    name: "WATCH ULTRA 3",
    price: "3.500.000₫",
    img: "https://placehold.co/300x200?text=Sony",
  },
];

// Hiển thị sản phẩm lên HTML
const productList = document.getElementById("product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <span class="price">${product.price}</span>
        <button onclick="addToCart('${product.name}')">Thêm vào giỏ</button>
    `;
  productList.appendChild(card);
});

// Chức năng cuộn xuống
function scrollToProducts() {
  document
    .getElementById("product-section")
    .scrollIntoView({ behavior: "smooth" });
}

// Chức năng giả lập thêm vào giỏ
function addToCart(productName) {
  alert(`Đã thêm ${productName} vào giỏ hàng!`);
}
