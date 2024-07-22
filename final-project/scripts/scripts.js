document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function () {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});
document.getElementById('menu').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
