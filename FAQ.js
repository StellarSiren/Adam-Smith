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
document.addEventListener("DOMContentLoaded", () => {
    // FAQ Elements Selection
    const faqSection = document.querySelector('.faq-custom-container');
    const faqItems = document.querySelectorAll('.faq-custom-item');
    const faqAccordions = document.querySelectorAll('.faq-custom-accordion');
    const faqIcons = document.querySelectorAll('.faq-custom-icon');
    const faqPanels = document.querySelectorAll('.faq-custom-panel');

    // Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    // Intersection Observer for FAQ elements
    const faqObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has triggered
            }
        });
    }, observerOptions);

    // Observe all FAQ elements
    if (faqSection) faqObserver.observe(faqSection);
    faqItems.forEach(item => faqObserver.observe(item));
    faqAccordions.forEach(accordion => faqObserver.observe(accordion));
    faqIcons.forEach(icon => faqObserver.observe(icon));
    faqPanels.forEach(panel => faqObserver.observe(panel));
});
