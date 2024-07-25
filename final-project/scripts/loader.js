document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        menu.classList.toggle('open');
    });
});
