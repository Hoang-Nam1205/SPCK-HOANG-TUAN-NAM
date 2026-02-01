document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Scroll amount per click (card width + gap)
    const scrollAmount = 420; // 400px card + 20px gap

    // Update button states
    function updateButtons() {
        // Disable prev button if at start
        prevBtn.disabled = productGrid.scrollLeft <= 0;
        
        // Disable next button if at end (allow small buffer)
        const maxScroll = productGrid.scrollWidth - productGrid.clientWidth;
        nextBtn.disabled = productGrid.scrollLeft >= maxScroll - 10;
    }

    // Initial check
    updateButtons();

    // Scroll listeners
    productGrid.addEventListener('scroll', updateButtons);

    // Click handlers
    prevBtn.addEventListener('click', () => {
        productGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        productGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
