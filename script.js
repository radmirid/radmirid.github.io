document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    for (let anchorLink of anchorLinks) {
        anchorLink.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = anchorLink.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

menuToggle.addEventListener('click', function() {
    menuNav.classList.toggle('show');
});
