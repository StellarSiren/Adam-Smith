const accordions = document.querySelectorAll('.faq-custom-accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
            this.querySelector('.faq-custom-icon').textContent = '+';
        } else {
            panel.style.display = 'block';
            this.querySelector('.faq-custom-icon').textContent = '-';
        }
    });
});