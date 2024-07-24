document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});