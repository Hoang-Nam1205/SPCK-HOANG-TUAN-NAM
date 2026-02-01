document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Giả lập kiểm tra (Trong thực tế sẽ gọi API về server)
  if (email && password) {
    alert("Đăng nhập thành công! Chào mừng bạn quay lại TechStore.");
    // Chuyển hướng về trang chủ
    window.location.href = "index.html";
  } else {
    alert("Vui lòng nhập đầy đủ thông tin.");
  }
});
