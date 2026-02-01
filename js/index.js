// Chọn tất cả các nút "Mua"
const buyButtons = document.querySelectorAll('.btn-outline');

buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Tìm tên sản phẩm (thẻ h2 hoặc h3 gần nhất trong cùng container)
        const container = e.target.closest('.content-wrapper');
        const productName = container.querySelector('h2, h3').innerText;
        
        // Hiệu ứng thông báo đơn giản
        alert(`Bạn đã chọn mua: ${productName}\nVui lòng đăng nhập để thanh toán.`);
        
        // Chuyển hướng sang trang login (tùy chọn)
        // window.location.href = 'login.html';
    });
});

console.log("TechStore Loaded - Apple Style");