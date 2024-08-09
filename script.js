document.addEventListener("DOMContentLoaded", () => {
    // Select all the elements that need the fade-in animation
    const aboutMeSection = document.querySelector('.about-me-text');
    const aboutMeImage = document.querySelector('.about-me-profile-image');
    const aboutMeTitle = document.querySelector('.about-me-title');
    const aboutMeNameTitle = document.querySelector('.about-me-name-title');
    const aboutMeDescription = document.querySelector('.about-me-description');
    const aboutMeSocialIcons = document.querySelector('.about-me-social-icons');

    const serviceBoxes = document.querySelectorAll('.service-box');
    const contactButton = document.querySelector('.contact-button');
    const contactHeader = document.querySelector('.adam-contact-section h1');
    const contactForm = document.querySelector('.adam-contact-form');
    const contactInfo = document.querySelector('.adam-contact-info');
    const contactMap = document.querySelector('.adam-contact-map');
    const infoColumns = document.querySelectorAll('.adam-info-column');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the animation has triggered
            }
        });
    }, observerOptions);

    // Observe all the elements in the About Me section
    if (aboutMeSection) observer.observe(aboutMeSection);
    if (aboutMeImage) observer.observe(aboutMeImage);
    if (aboutMeTitle) observer.observe(aboutMeTitle);
    if (aboutMeNameTitle) observer.observe(aboutMeNameTitle);
    if (aboutMeDescription) observer.observe(aboutMeDescription);
    if (aboutMeSocialIcons) observer.observe(aboutMeSocialIcons);

    // Observe all the elements in the contact section
    serviceBoxes.forEach(box => observer.observe(box));
    if (contactButton) observer.observe(contactButton);
    if (contactHeader) observer.observe(contactHeader);
    if (contactForm) observer.observe(contactForm);
    if (contactInfo) observer.observe(contactInfo);
    if (contactMap) observer.observe(contactMap);
    infoColumns.forEach(column => observer.observe(column));
});