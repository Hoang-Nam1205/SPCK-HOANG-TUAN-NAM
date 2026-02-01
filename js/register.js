document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate password length
    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Email này đã được đăng ký!");
        return;
    }

    // Create new user object
    const newUser = {
        fullname: fullname,
        email: email,
        password: password
    };

    // Add to users array
    users.push(newUser);

    // Save back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký thành công! Đang chuyển hướng đến trang đăng nhập...");
    window.location.href = "login.html";
});