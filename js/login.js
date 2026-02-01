document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find "user" matching credentials
    const validUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (validUser) {
      alert("Đăng nhập thành công! Chào mừng " + " quay lại TechStore.");

      // Optionally store current user session (not requested but good practice, can skip for now based on strict requirements)
      // localStorage.setItem('currentUser', JSON.stringify(validUser));

      window.location.href = "index.html";
    } else {
      alert("Email hoặc mật khẩu không chính xác!");
    }
  } else {
    alert("Vui lòng nhập đầy đủ thông tin.");
    alert("Vui lòng nhập đầy đủ thông tin.");
  }
});
